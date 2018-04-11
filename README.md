# structure-pug-sass-webpack

src
    assets
        images
    lib
        adminlte
        bootstrap
        font-awesome
        jquery
    script
        index.js
    style
        component (style)
            header.scss
            so on..
        index.scss 
            (include scss component)
    template
        components
            ...
        pages
            home.pug
            ..
            (all page will run with serve)
        index.pug
            (wil append TO pages/home.pug... when run project)
        