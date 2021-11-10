import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/first.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/first.html",
    'title': "Beginning",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Beginning</h1>\n<p>Hello there! I am starting this blogging journey because I am using Deno a tech\nstack for it and I want to try do some learning in public. I will be posting\nhere anything that relevant for my personal grows.</p>\n<p>It is not planning to be tutorial base blogs. I will be more about how I am\nlearning, what I am using to get better and some random opinions about\neverything. Definitely learning by doing (for my opinion) is the best approach\nand I am talking this on next level. <strong>publicity</strong> . Will see how it will play\nout.</p>\n<p>I am planning to write in Russian and English. Tech, personal grows, finances.\nFor now I have single reader - me in the future. I hope you will enjoy reading\nit later Stas.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "Beginning"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Hello there! I am starting this blogging journey because I am using Deno a tech\nstack for it and I want to try do some learning in public. I will be posting\nhere anything that relevant for my personal grows.</p>\n<p>It is not planning to be tutorial base blogs. I will be more about how I am\nlearning, what I am using to get better and some random opinions about\neverything. Definitely learning by doing (for my opinion) is the best approach\nand I am talking this on next level. <strong>publicity</strong> . Will see how it will play\nout.</p>\n<p>I am planning to write in Russian and English. Tech, personal grows, finances.\nFor now I have single reader - me in the future. I hope you will enjoy reading\nit later Stas.</p>'
        } }),
    'toc': null,
    'author': "Stanislau",
    'contributors': [
        "Stanislau"
    ],
    'date': "2021-11-07T00:00:00.000Z",
    'updated': null,
    'excerpt': "Hello there! I am starting this blogging journey because I am using Deno a tech stack for it and I want to try do some learning in public. I will be posting here anything that relevant for my personal grows. It...",
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
            }
        ],
        "categories": [],
        "tags": [
            {
                "name": "english",
                "count": 2
            },
            {
                "name": "story",
                "count": 2
            },
            {
                "name": "haskell",
                "count": 1
            }
        ]
    }
};
