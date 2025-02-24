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
                "loc": "/en/sitemap.xml",
                "_sitemap": "de"
            },
            {
                "loc": "/de/sitemap.xml",
                "_sitemap": "de"
            },
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
                        "href": "/de/checkout/failed"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/checkout/failed"
                    }
                ]
            },
            {
                "loc": "/de/checkout/failed",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/failed"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/checkout/failed"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/checkout/failed"
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
                        "href": "/de/checkout"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/checkout"
                    }
                ]
            },
            {
                "loc": "/de/checkout",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/checkout"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/checkout"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/checkout"
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
                        "href": "/de/checkout/success"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/checkout/success"
                    }
                ]
            },
            {
                "loc": "/de/checkout/success",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/success"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/checkout/success"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/checkout/success"
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
                        "href": "/de/company/milestones"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/company/milestones"
                    }
                ]
            },
            {
                "loc": "/de/company/milestones",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/company/milestones"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/company/milestones"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/company/milestones"
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
                        "href": "/de/company/partners"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/company/partners"
                    }
                ]
            },
            {
                "loc": "/de/company/partners",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/company/partners"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/company/partners"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/company/partners"
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
                        "href": "/de/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/contact"
                    }
                ]
            },
            {
                "loc": "/de/contact",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/contact"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/contact"
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
                        "href": "/de"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de"
                    }
                ]
            },
            {
                "loc": "/de",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de"
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
                        "href": "/de/legal/notice"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/legal/notice"
                    }
                ]
            },
            {
                "loc": "/de/legal/notice",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/legal/notice"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/legal/notice"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/legal/notice"
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
                        "href": "/de/legal/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/legal/privacy"
                    }
                ]
            },
            {
                "loc": "/de/legal/privacy",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/legal/privacy"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/legal/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/legal/privacy"
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
                        "href": "/de/legal/tos"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/legal/tos"
                    }
                ]
            },
            {
                "loc": "/de/legal/tos",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/legal/tos"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/legal/tos"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/legal/tos"
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
                        "href": "/de/newsroom"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/newsroom"
                    }
                ]
            },
            {
                "loc": "/de/newsroom",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/newsroom"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/newsroom"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/newsroom"
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
                        "href": "/de/products/dedicated"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/dedicated"
                    }
                ]
            },
            {
                "loc": "/de/products/dedicated",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/dedicated"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/dedicated"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/dedicated"
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
                        "href": "/de/products/domain"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/domain"
                    }
                ]
            },
            {
                "loc": "/de/products/domain",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/domain"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/domain"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/domain"
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
                        "href": "/de/products/lic-cert"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/lic-cert"
                    }
                ]
            },
            {
                "loc": "/de/products/lic-cert",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/lic-cert"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/lic-cert"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/lic-cert"
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
                        "href": "/de/products/vps-root"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/vps-root"
                    }
                ]
            },
            {
                "loc": "/de/products/vps-root",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/vps-root"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/vps-root"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/vps-root"
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
                        "href": "/de/products/webspace"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/webspace"
                    }
                ]
            },
            {
                "loc": "/de/products/webspace",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/en/products/webspace"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/webspace"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/de/products/webspace"
                    }
                ]
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
