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
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/checkout/failed",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/checkout/failed"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/failed"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/failed"
                    }
                ]
            },
            {
                "loc": "/en/checkout/failed",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/checkout/failed"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/failed"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/failed"
                    }
                ]
            },
            {
                "loc": "/checkout",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/checkout"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/checkout"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout"
                    }
                ]
            },
            {
                "loc": "/en/checkout",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/checkout"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/checkout"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout"
                    }
                ]
            },
            {
                "loc": "/checkout/success",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/checkout/success"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/success"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/success"
                    }
                ]
            },
            {
                "loc": "/en/checkout/success",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/checkout/success"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/checkout/success"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/checkout/success"
                    }
                ]
            },
            {
                "loc": "/company/milestones",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/company/milestones"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/company/milestones"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/milestones"
                    }
                ]
            },
            {
                "loc": "/en/company/milestones",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/company/milestones"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/company/milestones"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/milestones"
                    }
                ]
            },
            {
                "loc": "/company/partners",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/company/partners"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/company/partners"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/partners"
                    }
                ]
            },
            {
                "loc": "/en/company/partners",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/company/partners"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/company/partners"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/company/partners"
                    }
                ]
            },
            {
                "loc": "/contact",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/contact"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact"
                    }
                ]
            },
            {
                "loc": "/en/contact",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/contact"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact"
                    }
                ]
            },
            {
                "loc": "/",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/en",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/legal/notice",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/legal/notice"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/legal/notice"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/notice"
                    }
                ]
            },
            {
                "loc": "/en/legal/notice",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/legal/notice"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/legal/notice"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/notice"
                    }
                ]
            },
            {
                "loc": "/legal/privacy",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/legal/privacy"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/legal/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/privacy"
                    }
                ]
            },
            {
                "loc": "/en/legal/privacy",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/legal/privacy"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/legal/privacy"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/privacy"
                    }
                ]
            },
            {
                "loc": "/legal/tos",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/legal/tos"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/legal/tos"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/tos"
                    }
                ]
            },
            {
                "loc": "/en/legal/tos",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/legal/tos"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/legal/tos"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/legal/tos"
                    }
                ]
            },
            {
                "loc": "/newsroom",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/newsroom"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/newsroom"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/newsroom"
                    }
                ]
            },
            {
                "loc": "/en/newsroom",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/newsroom"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/newsroom"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/newsroom"
                    }
                ]
            },
            {
                "loc": "/products/dedicated",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/dedicated"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/dedicated"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/dedicated"
                    }
                ]
            },
            {
                "loc": "/en/products/dedicated",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/dedicated"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/dedicated"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/dedicated"
                    }
                ]
            },
            {
                "loc": "/products/domain",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/domain"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/domain"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/domain"
                    }
                ]
            },
            {
                "loc": "/en/products/domain",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/domain"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/domain"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/domain"
                    }
                ]
            },
            {
                "loc": "/products/lic-cert",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/lic-cert"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/lic-cert"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/lic-cert"
                    }
                ]
            },
            {
                "loc": "/en/products/lic-cert",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/lic-cert"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/lic-cert"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/lic-cert"
                    }
                ]
            },
            {
                "loc": "/products/vps-root",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/vps-root"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/vps-root"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/vps-root"
                    }
                ]
            },
            {
                "loc": "/en/products/vps-root",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/vps-root"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/vps-root"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/vps-root"
                    }
                ]
            },
            {
                "loc": "/products/webspace",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/webspace"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/webspace"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/webspace"
                    }
                ]
            },
            {
                "loc": "/en/products/webspace",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/products/webspace"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/products/webspace"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/products/webspace"
                    }
                ]
            },
            {
                "loc": "/sitemap.xml",
                "_sitemap": "de"
            },
            {
                "loc": "/en/sitemap.xml",
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
            {
                "loc": "/",
                "_sitemap": "de"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
