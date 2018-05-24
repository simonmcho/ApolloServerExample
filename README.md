## Learning project for setting up Apollo Server

### Steps to take:
1. Create a folder for your project
2. Add the following dependencies: `yarn add --dev babel-core babel-cli babel-preset-env`. This is to set up babel for transpiling ES6 to ES5
3. Create `.babelrc` and add this for configuration 
```
{
    "presets": ["env"]
}

```
4. Automate babel by adding `Babel watch`: `yarn add --dev babel-watch`
5. Add the following line in your `scripts` object in your `package.json`: `"dev": "babel-watch server.js"`
6. Add the `express` framework: `yarn add express`
7. Add graphQL packages: `yarn add graphql graphql-tools apollo-server-express`

Use `https://www.youtube.com/watch?v=5evJqX5i1zE`