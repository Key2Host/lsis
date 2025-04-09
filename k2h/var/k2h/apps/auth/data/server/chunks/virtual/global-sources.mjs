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
                "loc": "/recover",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/recover"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/recover"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/recover"
                    }
                ]
            },
            {
                "loc": "/en/recover",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/recover"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/recover"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/recover"
                    }
                ]
            },
            {
                "loc": "/sign-up",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/sign-up"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/sign-up"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/sign-up"
                    }
                ]
            },
            {
                "loc": "/en/sign-up",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "de",
                        "href": "/sign-up"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/sign-up"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/sign-up"
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
