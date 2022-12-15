# vue_env

Basic Vue3 env example to show how to move something to env variables

.env related info could be found here
[Vite enviroment vars](https://vitejs.dev/guide/env-and-mode.html)
or here [Vue enviroments and modes](https://cli.vuejs.org/guide/mode-and-env.html)

Additional configs to default app
- path aliases https://stackoverflow.com/questions/55309945/vue-cli-3-project-alias-src-to-or-not-working

NOTE! Don't use path aliases at .env variables. It should be a direct path. As alternative you can mode images to external storage and use direct URL to it.

Very eseful thing is `.env.example` - is like template for `.env` files

Additional example could be found here https://stackblitz.com/edit/vue-3-vite-access-environment-variables-from-dotenv?file=.env

To run the project with different .env please use the mode parameter
to run in production mode
```bash
npm run dev -- --mode production
```
or
```bash
npm run dev -- --mode echo_msk
```
to run in echo_msk mode

Further improvements
- Add a .env validation like [this](https://dotenv-linter.github.io/#/usage/compare) or [this](https://github.com/Julien-R44/vite-plugin-validate-env)
- Add a scanner for secrets (like API keys): https://github.com/Yelp/detect-secrets or something similar

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

