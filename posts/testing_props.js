import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/testing.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/testing.html",
    'title': "Testing",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Testing</h1>\n<p>Bla bala bablablalb</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "Testing"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Bla bala bablablalb</p>'
        } }),
    'toc': null,
    'author': "Stanislau",
    'contributors': [
        "Stanislau"
    ],
    'date': "2021-11-07T00:00:00.000Z",
    'updated': null,
    'excerpt': "Bla bala bablablalb",
    'cover': undefined,
    'category': [
        "personal"
    ],
    'tags': [
        "english",
        "story"
    ],
    'blog': {
        "isPost": true,
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
            },
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
            },
            {
                "pagePath": "posts/first.md",
                "title": "Beginning",
                "link": "posts/first.html",
                "date": "2021-11-07T00:00:00.000Z",
                "updated": null,
                "author": "Stanislau",
                "contributors": [
                    "Stanislau"
                ],
                "tags": [
                    "english",
                    "story"
                ],
                "excerpt": "Hello there! I am starting this blogging journey because I am using Deno a tech stack for it and I want to try do some learning in public. I will be posting here anything that relevant for my personal grows. It..."
            },
            {
                "pagePath": "posts/testing.md",
                "title": "Testing",
                "link": "posts/testing.html",
                "date": "2021-11-07T00:00:00.000Z",
                "updated": null,
                "author": "Stanislau",
                "contributors": [
                    "Stanislau"
                ],
                "tags": [
                    "english",
                    "story"
                ],
                "excerpt": "Bla bala bablablalb"
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
