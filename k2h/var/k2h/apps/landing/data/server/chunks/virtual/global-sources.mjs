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
                "loc": "/checkout/failed"
            },
            {
                "loc": "/checkout"
            },
            {
                "loc": "/checkout/success"
            },
            {
                "loc": "/company/milestones"
            },
            {
                "loc": "/company/office"
            },
            {
                "loc": "/company/partners"
            },
            {
                "loc": "/contact"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/legal/notice"
            },
            {
                "loc": "/legal/privacy"
            },
            {
                "loc": "/legal/tos"
            },
            {
                "loc": "/newsroom"
            },
            {
                "loc": "/products/dedicated"
            },
            {
                "loc": "/products/domain"
            },
            {
                "loc": "/products/lic-cert"
            },
            {
                "loc": "/products/vps-root"
            },
            {
                "loc": "/products/webspace"
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
