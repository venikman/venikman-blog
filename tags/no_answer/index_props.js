import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/no_answer/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/no_answer/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'title': "no_answer",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/LTS.md",
                "title": "Long Term Support",
                "link": "posts/LTS.html",
                "date": "2021-11-14T00:00:00.000Z",
                "updated": null,
                "author": "Stanislau",
                "contributors": [
                    "Stanislau"
                ],
                "tags": [
                    "thoughts",
                    "english",
                    "no_answer"
                ],
                "excerpt": "My work When we trying to hire people while we trying to sell idea that work with us is really great, one of our selling point is that we have ofter opportunity to start new projects. (we assume) That people do..."
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
