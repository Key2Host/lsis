import { a1 as tryUseNuxtApp, a0 as withoutTrailingSlash } from './server.mjs';
import { V as pascalCase } from '../nitro/nitro.mjs';

const checksums = {
  "newsroom": "v3.5.0--vp-g9-TDLeM4UMdmnsFT34aWCnZn-2ktl2cMHedO0Uo"
};
const tables = {
  "newsroom": "_content_newsroom",
  "info": "_content_info"
};
const buildGroup = (group, type) => {
  const conditions = group._conditions;
  return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
const collectionQueryGroup = (collection) => {
  const conditions = [];
  const query = {
    // @ts-expect-error -- internal
    _conditions: conditions,
    where(field, operator, value) {
      let condition;
      switch (operator.toUpperCase()) {
        case "IN":
        case "NOT IN":
          if (Array.isArray(value)) {
            const values = value.map((val) => singleQuote(val)).join(", ");
            condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
          } else {
            throw new TypeError(`Value for ${operator} must be an array`);
          }
          break;
        case "BETWEEN":
        case "NOT BETWEEN":
          if (Array.isArray(value) && value.length === 2) {
            condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
          } else {
            throw new Error(`Value for ${operator} must be an array with two elements`);
          }
          break;
        case "IS NULL":
        case "IS NOT NULL":
          condition = `"${String(field)}" ${operator.toUpperCase()}`;
          break;
        case "LIKE":
        case "NOT LIKE":
          condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
          break;
        default:
          condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
      }
      conditions.push(`${condition}`);
      return query;
    },
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "OR"));
      return query;
    }
  };
  return query;
};
const collectionQueryBuilder = (collection, fetch) => {
  const params = {
    conditions: [],
    selectedFields: [],
    offset: 0,
    limit: 0,
    orderBy: [],
    // Count query
    count: {
      field: "",
      distinct: false
    }
  };
  const query = {
    // @ts-expect-error -- internal
    __params: params,
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "OR"));
      return query;
    },
    path(path) {
      return query.where("path", "=", withoutTrailingSlash(path));
    },
    skip(skip) {
      params.offset = skip;
      return query;
    },
    where(field, operator, value) {
      query.andWhere((group) => group.where(String(field), operator, value));
      return query;
    },
    limit(limit) {
      params.limit = limit;
      return query;
    },
    select(...fields) {
      if (fields.length) {
        params.selectedFields.push(...fields);
      }
      return query;
    },
    order(field, direction) {
      params.orderBy.push(`"${String(field)}" ${direction}`);
      return query;
    },
    async all() {
      return fetch(collection, buildQuery()).then((res) => res || []);
    },
    async first() {
      return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
    },
    async count(field = "*", distinct = false) {
      return fetch(collection, buildQuery({
        count: { field: String(field), distinct }
      })).then((m) => m[0].count);
    }
  };
  function buildQuery(opts = {}) {
    let query2 = "SELECT ";
    if (opts == null ? void 0 : opts.count) {
      query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
    } else {
      const fields = Array.from(new Set(params.selectedFields));
      query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
    }
    query2 += ` FROM ${tables[String(collection)]}`;
    if (params.conditions.length > 0) {
      query2 += ` WHERE ${params.conditions.join(" AND ")}`;
    }
    if (params.orderBy.length > 0) {
      query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
    } else {
      query2 += ` ORDER BY stem ASC`;
    }
    const limit = (opts == null ? void 0 : opts.limit) || params.limit;
    if (limit > 0) {
      if (params.offset > 0) {
        query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
      } else {
        query2 += ` LIMIT ${limit}`;
      }
    }
    return query2;
  }
  return query;
};
function singleQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    return (keys || []).filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
  };
}
async function generateNavigationTree(queryBuilder, extraFields = []) {
  var _a;
  const params = queryBuilder.__params;
  if (!((_a = params == null ? void 0 : params.orderBy) == null ? void 0 : _a.length)) {
    queryBuilder = queryBuilder.order("stem", "ASC");
  }
  const collecitonItems = await queryBuilder.orWhere(
    (group) => group.where("navigation", "<>", "false").where("navigation", "IS NULL")
  ).select("navigation", "stem", "path", "title", "meta", ...extraFields || []).all();
  const { contents, configs } = collecitonItems.reduce((acc, c) => {
    var _a2;
    if (String(c.stem).split("/").pop() === ".navigation") {
      c.title = ((_a2 = c.title) == null ? void 0 : _a2.toLowerCase()) === "navigation" ? "" : c.title;
      const key = c.path.split("/").slice(0, -1).join("/") || "/";
      acc.configs[key] = {
        ...c,
        ...c.body
      };
    } else {
      acc.contents.push(c);
    }
    return acc;
  }, { configs: {}, contents: [] });
  const pickConfigNavigationFields = (content) => ({
    ...pick(["title", ...extraFields])(content),
    ...content.meta,
    ...isObject(content == null ? void 0 : content.navigation) ? content.navigation : {}
  });
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...extraFields])(content),
    ...isObject(content == null ? void 0 : content.navigation) ? content.navigation : {}
  });
  const nav = contents.reduce((nav2, content) => {
    var _a2;
    const parts = content.path.substring(1).split("/");
    const idParts = content.stem.split("/");
    const isIndex = !!((_a2 = idParts[idParts.length - 1]) == null ? void 0 : _a2.match(/([1-9]\d*\.)?index/g));
    const getNavItem = (content2) => ({
      title: content2.title,
      path: content2.path,
      stem: content2.stem,
      children: [],
      ...pickNavigationFields(content2)
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem.path];
      if (typeof (dirConfig == null ? void 0 : dirConfig.navigation) !== "undefined" && (dirConfig == null ? void 0 : dirConfig.navigation) === false) {
        return nav2;
      }
      if (content.path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      if (dirConfig) {
        Object.assign(
          navItem,
          pickConfigNavigationFields(dirConfig)
        );
      }
    }
    if (parts.length === 1) {
      const existed2 = nav2.find((item) => item.path === navItem.path && item.page === false);
      if (isIndex && existed2) {
        Object.assign(existed2, {
          page: void 0,
          children: [
            ...navItem.children || [],
            ...existed2.children || []
          ]
        });
      } else {
        nav2.push(navItem);
      }
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof (conf == null ? void 0 : conf.navigation) !== "undefined" && conf.navigation === false) {
        return [];
      }
      let parent = nodes.find((n) => n.path === currentPathPart);
      if (!parent) {
        const navigationConfig = conf ? pickConfigNavigationFields(conf) : {};
        parent = {
          ...navigationConfig,
          title: navigationConfig.title || generateTitle(part),
          path: currentPathPart,
          stem: idParts.slice(0, i + 1).join("/"),
          children: [],
          page: false
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    const existed = siblings.find((item) => item.path === navItem.path && item.page === false);
    if (existed) {
      Object.assign(existed, {
        ...navItem,
        page: void 0,
        children: [
          ...navItem.children || [],
          ...existed.children || []
        ]
      });
    } else {
      siblings.push(navItem);
    }
    return nav2;
  }, []);
  return sortAndClear(nav);
}
function sortAndClear(nav) {
  var _a;
  const sorted = nav;
  for (const item of sorted) {
    if ((_a = item.children) == null ? void 0 : _a.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
  }
  return nav;
}
function isObject(obj) {
  return obj !== null && Object.prototype.toString.call(obj) === "[object Object]";
}
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
async function generateItemSurround(queryBuilder, path, opts) {
  const { before = 1, after = 1, fields = [] } = opts || {};
  const navigation = await generateNavigationTree(queryBuilder, fields);
  const flatData = flattedData(navigation);
  const index = flatData.findIndex((item) => item.path === path);
  const beforeItems = index === -1 ? [] : flatData.slice(index - before, index);
  const afterItems = index === -1 ? [] : flatData.slice(index + 1, index + after + 1);
  return [
    ...Array.from({ length: before }).fill(null).concat(beforeItems).slice(beforeItems.length),
    ...afterItems.concat(Array.from({ length: after }).fill(null)).slice(0, after)
  ];
}
function flattedData(data) {
  const flatData = data.flatMap((item) => {
    const children = item.children ? flattedData(item.children) : [];
    if (item.page === false || children.length && children.find((c) => c.path === item.path)) {
      return children;
    }
    return [{ ...item, children: void 0 }, ...children];
  });
  return flatData;
}
async function fetchQuery(event, collection, sql) {
  return await $fetch(`/__nuxt_content/${collection}/query`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    headers: { "content-type": "application/json" },
    query: { v: checksums[String(collection)], t: void 0 },
    method: "POST",
    body: {
      sql
    }
  });
}
const queryCollection = (collection) => {
  var _a, _b;
  const event = (_b = (_a = tryUseNuxtApp()) == null ? void 0 : _a.ssrContext) == null ? void 0 : _b.event;
  return collectionQueryBuilder(collection, (collection2, sql) => executeContentQuery(event, collection2, sql));
};
function queryCollectionItemSurroundings(collection, path, opts) {
  return chainablePromise(collection, (qb) => generateItemSurround(qb, path, opts));
}
async function executeContentQuery(event, collection, sql) {
  {
    return fetchQuery(event, String(collection), sql);
  }
}
function chainablePromise(collection, fn) {
  const queryBuilder = queryCollection(collection);
  const chainable = {
    where(field, operator, value) {
      queryBuilder.where(String(field), operator, value);
      return chainable;
    },
    andWhere(groupFactory) {
      queryBuilder.andWhere(groupFactory);
      return chainable;
    },
    orWhere(groupFactory) {
      queryBuilder.orWhere(groupFactory);
      return chainable;
    },
    order(field, direction) {
      queryBuilder.order(String(field), direction);
      return chainable;
    },
    then(onfulfilled, onrejected) {
      return fn(queryBuilder).then(onfulfilled, onrejected);
    },
    catch(onrejected) {
      return this.then(void 0, onrejected);
    },
    finally(onfinally) {
      return this.then(void 0, void 0).finally(onfinally);
    },
    get [Symbol.toStringTag]() {
      return "Promise";
    }
  };
  return chainable;
}

export { queryCollectionItemSurroundings as a, queryCollection as q };
//# sourceMappingURL=app-CXXWM6cm.mjs.map
