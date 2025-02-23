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
                "loc": "/checkout/failed",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/checkout/failed"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/checkout/failed"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/failed"
                    }
                ]
            },
            {
                "loc": "/de/checkout/failed",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/checkout/failed"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/checkout/failed"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/failed"
                    }
                ]
            },
            {
                "loc": "/checkout",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/checkout"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/checkout"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout"
                    }
                ]
            },
            {
                "loc": "/de/checkout",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/checkout"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/checkout"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout"
                    }
                ]
            },
            {
                "loc": "/checkout/success",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/checkout/success"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/checkout/success"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/success"
                    }
                ]
            },
            {
                "loc": "/de/checkout/success",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/checkout/success"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/checkout/success"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/success"
                    }
                ]
            },
            {
                "loc": "/company/milestones",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/company/milestones"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/company/milestones"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/milestones"
                    }
                ]
            },
            {
                "loc": "/de/company/milestones",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/company/milestones"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/company/milestones"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/milestones"
                    }
                ]
            },
            {
                "loc": "/company/partners",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/company/partners"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/company/partners"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/partners"
                    }
                ]
            },
            {
                "loc": "/de/company/partners",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/company/partners"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/company/partners"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/partners"
                    }
                ]
            },
            {
                "loc": "/contact",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/contact"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact"
                    }
                ]
            },
            {
                "loc": "/de/contact",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/contact"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact"
                    }
                ]
            },
            {
                "loc": "/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/de",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/legal/notice",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/legal/notice"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/legal/notice"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/notice"
                    }
                ]
            },
            {
                "loc": "/de/legal/notice",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/legal/notice"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/legal/notice"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/notice"
                    }
                ]
            },
            {
                "loc": "/legal/privacy",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/legal/privacy"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/legal/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/privacy"
                    }
                ]
            },
            {
                "loc": "/de/legal/privacy",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/legal/privacy"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/legal/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/privacy"
                    }
                ]
            },
            {
                "loc": "/legal/tos",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/legal/tos"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/legal/tos"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/tos"
                    }
                ]
            },
            {
                "loc": "/de/legal/tos",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/legal/tos"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/legal/tos"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/tos"
                    }
                ]
            },
            {
                "loc": "/newsroom",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/newsroom"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/newsroom"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/newsroom"
                    }
                ]
            },
            {
                "loc": "/de/newsroom",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/newsroom"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/newsroom"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/newsroom"
                    }
                ]
            },
            {
                "loc": "/products/dedicated",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/dedicated"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/dedicated"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/dedicated"
                    }
                ]
            },
            {
                "loc": "/de/products/dedicated",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/dedicated"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/dedicated"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/dedicated"
                    }
                ]
            },
            {
                "loc": "/products/domain",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/domain"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/domain"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/domain"
                    }
                ]
            },
            {
                "loc": "/de/products/domain",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/domain"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/domain"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/domain"
                    }
                ]
            },
            {
                "loc": "/products/lic-cert",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/lic-cert"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/lic-cert"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/lic-cert"
                    }
                ]
            },
            {
                "loc": "/de/products/lic-cert",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/lic-cert"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/lic-cert"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/lic-cert"
                    }
                ]
            },
            {
                "loc": "/products/vps-root",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/vps-root"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/vps-root"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/vps-root"
                    }
                ]
            },
            {
                "loc": "/de/products/vps-root",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/vps-root"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/vps-root"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/vps-root"
                    }
                ]
            },
            {
                "loc": "/products/webspace",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/webspace"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/webspace"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/webspace"
                    }
                ]
            },
            {
                "loc": "/de/products/webspace",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/products/webspace"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/products/webspace"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/webspace"
                    }
                ]
            },
            {
                "loc": "/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/en/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/de/sitemap.xml",
                "_sitemap": "en"
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
            {
                "loc": "/",
                "_sitemap": "en",
                "images": [
                    {
                        "loc": "https://i.pravatar.cc/120?img=1"
                    },
                    {
                        "loc": "https://i.pravatar.cc/120?img=7"
                    },
                    {
                        "loc": "https://i.pravatar.cc/120?img=3"
                    },
                    {
                        "loc": "https://i.pravatar.cc/120?img=5"
                    },
                    {
                        "loc": "https://i.pravatar.cc/120?img=8"
                    },
                    {
                        "loc": "https://i.pravatar.cc/120?img=9"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
