import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/haskell/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/haskell/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'title': "haskell",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/RPNC.md",
                "title": "RPNC",
                "link": "posts/RPNC.html",
                "date": "2021-11-09T00:00:00.000Z",
                "updated": null,
                "author": "Stanislau",
                "contributors": [
                    "Stanislau"
                ],
                "tags": [
                    "english",
                    "story",
                    "haskell"
                ],
                "excerpt": "Reverse Polish notation calculator This is another way to do calculation. Even now some of modern calculators support this notation. But where I have learned it? Haskell! Yes, by reading book about Haskell I wa..."
            }
        ],
        "categories": [],
        "tags": [
            {
                "name": "english",
                "count": 4
            },
            {
                "name": "story",
                "count": 3
            },
            {
                "name": "haskell",
                "count": 1
            },
            {
                "name": "no_answer",
                "count": 1
            },
            {
                "name": "thoughts",
                "count": 1
            }
        ]
    }
};
