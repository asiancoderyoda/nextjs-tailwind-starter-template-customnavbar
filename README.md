# Project Setup

To get started, you'll want to create a starter next application by running the following command.

> Create a new next js project using `npx create-next-app [app-name]`

## Integrating Tailwind CSS

To integrate Tailwind CSS you need to install the following dependencies.
First, install Tailwind CSS and PostCSS.
```
npm install --save-dev tailwindcss postcss-preset-env
```

Configure Tailwind after the dependencies gets installed
```
npx tailwind init
```

#### Then, create a postcss.config.js file in the root of your project for your PostCSS configuration. Add the following snippet of code.
```javascript
module.exports = {
  plugins: ['tailwindcss', 'postcss-preset-env'],
}
```

Now that Tailwind and PostCSS are configured, we'll need to use it. To do so we need to add an index.css into our styles directory and add the following.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### We are almost done

To see changes we need to delete the preincluded CSS files and also delete the same from the _app.js file
Imporst the index.css into _app.js
```
import '../styles/index.css';
```

#### Restart development server to see the changes


## If you are cloning this repo make sure to run this command first
```
npm install
```