const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content@v2:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "You can provide a `sitemap` key in your markdown frontmatter to configure specific URLs. Make sure you include a `loc`."
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/en/checkout/failed",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/failed"
                    },
                    {
                        "hreflang": "de",
                        "href": "/checkout/failed"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/failed"
                    }
                ]
            },
            {
                "loc": "/checkout/failed",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/failed"
                    },
                    {
                        "hreflang": "de",
                        "href": "/checkout/failed"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/failed"
                    }
                ]
            },
            {
                "loc": "/en/checkout",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/checkout"
                    },
                    {
                        "hreflang": "de",
                        "href": "/checkout"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout"
                    }
                ]
            },
            {
                "loc": "/checkout",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/checkout"
                    },
                    {
                        "hreflang": "de",
                        "href": "/checkout"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout"
                    }
                ]
            },
            {
                "loc": "/en/checkout/success",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/success"
                    },
                    {
                        "hreflang": "de",
                        "href": "/checkout/success"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/success"
                    }
                ]
            },
            {
                "loc": "/checkout/success",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/success"
                    },
                    {
                        "hreflang": "de",
                        "href": "/checkout/success"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/success"
                    }
                ]
            },
            {
                "loc": "/en/company/milestones",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/company/milestones"
                    },
                    {
                        "hreflang": "de",
                        "href": "/company/milestones"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/milestones"
                    }
                ]
            },
            {
                "loc": "/company/milestones",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/company/milestones"
                    },
                    {
                        "hreflang": "de",
                        "href": "/company/milestones"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/milestones"
                    }
                ]
            },
            {
                "loc": "/en/company/partners",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/company/partners"
                    },
                    {
                        "hreflang": "de",
                        "href": "/company/partners"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/partners"
                    }
                ]
            },
            {
                "loc": "/company/partners",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/company/partners"
                    },
                    {
                        "hreflang": "de",
                        "href": "/company/partners"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/partners"
                    }
                ]
            },
            {
                "loc": "/en/contact",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/contact"
                    },
                    {
                        "hreflang": "de",
                        "href": "/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact"
                    }
                ]
            },
            {
                "loc": "/contact",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/contact"
                    },
                    {
                        "hreflang": "de",
                        "href": "/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact"
                    }
                ]
            },
            {
                "loc": "/en",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "de",
                        "href": "/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "de",
                        "href": "/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/en/legal/notice",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/legal/notice"
                    },
                    {
                        "hreflang": "de",
                        "href": "/legal/notice"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/notice"
                    }
                ]
            },
            {
                "loc": "/legal/notice",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/legal/notice"
                    },
                    {
                        "hreflang": "de",
                        "href": "/legal/notice"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/notice"
                    }
                ]
            },
            {
                "loc": "/en/legal/privacy",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/legal/privacy"
                    },
                    {
                        "hreflang": "de",
                        "href": "/legal/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/privacy"
                    }
                ]
            },
            {
                "loc": "/legal/privacy",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/legal/privacy"
                    },
                    {
                        "hreflang": "de",
                        "href": "/legal/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/privacy"
                    }
                ]
            },
            {
                "loc": "/en/legal/tos",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/legal/tos"
                    },
                    {
                        "hreflang": "de",
                        "href": "/legal/tos"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/tos"
                    }
                ]
            },
            {
                "loc": "/legal/tos",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/legal/tos"
                    },
                    {
                        "hreflang": "de",
                        "href": "/legal/tos"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/tos"
                    }
                ]
            },
            {
                "loc": "/en/newsroom",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/newsroom"
                    },
                    {
                        "hreflang": "de",
                        "href": "/newsroom"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/newsroom"
                    }
                ]
            },
            {
                "loc": "/newsroom",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/newsroom"
                    },
                    {
                        "hreflang": "de",
                        "href": "/newsroom"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/newsroom"
                    }
                ]
            },
            {
                "loc": "/en/products/dedicated",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/dedicated"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/dedicated"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/dedicated"
                    }
                ]
            },
            {
                "loc": "/products/dedicated",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/dedicated"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/dedicated"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/dedicated"
                    }
                ]
            },
            {
                "loc": "/en/products/domain",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/domain"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/domain"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/domain"
                    }
                ]
            },
            {
                "loc": "/products/domain",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/domain"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/domain"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/domain"
                    }
                ]
            },
            {
                "loc": "/en/products/lic-cert",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/lic-cert"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/lic-cert"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/lic-cert"
                    }
                ]
            },
            {
                "loc": "/products/lic-cert",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/lic-cert"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/lic-cert"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/lic-cert"
                    }
                ]
            },
            {
                "loc": "/en/products/vps-root",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/vps-root"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/vps-root"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/vps-root"
                    }
                ]
            },
            {
                "loc": "/products/vps-root",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/vps-root"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/vps-root"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/vps-root"
                    }
                ]
            },
            {
                "loc": "/en/products/webspace",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/webspace"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/webspace"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/webspace"
                    }
                ]
            },
            {
                "loc": "/products/webspace",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/webspace"
                    },
                    {
                        "hreflang": "de",
                        "href": "/products/webspace"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/webspace"
                    }
                ]
            },
            {
                "loc": "/en/sitemap.xml",
                "_sitemap": "de"
            },
            {
                "loc": "/sitemap.xml",
                "_sitemap": "de"
            },
            {
                "loc": "/de/sitemap.xml",
                "_sitemap": "de"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/"
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            null
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
