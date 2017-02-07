# Getting Started

## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x` and NPM `3.x.x`+

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies
* `npm run serve` to start the dev server in another tab

## Running the app
 Run `npm run serve` to start a local server.

### server
```bash
# development
npm run serve
# production
npm run serve:pro

```

### test
```bash
# unit testing - test reports at /test-reports/html/index.html
npm run test
npm run test:dev
npm run test:pro

# e2e testing
npm run e2e

```

### build
```bash
# build will be generated at /dist
npm run build
npm run build:dev
npm run build:pro

```

### docs
```bash
# docs will be generated at /docs/typedoc
npm run docs

```

### linting
```bash
# tslint
npm run lint

```

## File Structure

We use the component approach in our starter. This is the standard Angular2 propose for developing scalable application and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-webpack-starter/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js          * karma config for our unit tests
 |   ├──protractor.conf.js     * protractor config for our end-to-end tests
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │   └──webpack.test.js        * our testing webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 |   ├──index.html             * Index.html: where we generate our index page
 |   ├──polyfills.ts           * our polyfills file
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──modules/           * Funtional Units separated in individual modules 
 │   │   ├──shared/            * our shared component, reusable in any module
 │   │   ├──shell/             * our bootstrap component, visual scaffold of our app 
 │   │   │
 │   │   ├──app.environment.ts 
 │   │   ├──app.module.ts      
 │   │   ├──app.routes.ts      
 │   │   └──index.ts           
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──humans.txt          * for humans to know who the developers are
 │
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file

```

## Features included

* Build process with WebPack for development and production environment.  
    * JIT
    * AOT
* Unit Testing with Karma and Jasmine
* End-to-End testing with Protractor.
* Test reporting with HTML and file versions.
* Quality code test with TsLint and Codelyzer.
* Coverage threshold control, environnement configurable.      
* Preview Live reload on development.

## Application Features

* Style: FlexBox and Material style
* Mobile first layout
* Routing encapsulation by module with lazyload integrated
* Module LazyLoad by feature and nested modules
* Youtube API integration


