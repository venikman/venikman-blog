export default {
    srcDir: "src",
    theme: "blog",
    plugins: ["blog"],
    title: "Stanislau Venikman Niadbailau blog",
    description: "My thoughts about everything I do.",
    blog: {
        root: "/posts/",
        social: {
            github: "venikman",
            email: "nedbailov3754256@gmail.com",
            twitter: "venik_man",
        },
    },
    nav: [
        {
            text: "Home",
            link: "/",
            icon: "czs-home-l",
        },
        {
            text: "Test tsx",
            link: "/test_tsx.html",
            icon: "czs-sun-l",
        },
    ],
};
