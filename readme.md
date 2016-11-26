# ![Barebones](http://jaydenseric.com/shared/barebones-logo.svg)

## Setup

For development tools and building:

1. Install the latest [Node.js and NPM](https://nodejs.org).
2. Run `npm install` within the project root directory in Terminal.
3. Run `npm run build:watch`.
4. Run `npm start` in another tab. Tada!

Ensure your editor supports:

- [EditorConfig](http://editorconfig.org). Atom users install [editorconfig](https://atom.io/packages/editorconfig).
- [ESLint](http://eslint.org) live JS linting, respecting `package.json` config. Atom users install [linter-eslint](https://atom.io/packages/linter-eslint).
- [stylelint](http://stylelint.io) live CSS linting, respecting `package.json` config. Atom users install [linter-stylelint](https://atom.io/packages/linter-stylelint).

## Structure

- `/components` contains a sub-directory for each component, holding source JS, styles and image assets. Avoid nesting component directories as a flat structure guarantees unique component names, makes paths less complex and encourages reuse.
- `/components/app` is the top component for the entire site and is the JS and CSS entrypoint; from here components are recursively imported and initialized. Import polyfills here.
- `/bundle` is the compiled JS, CSS and sourcemaps.
- `/content` is where actual content such as images live. This is analogous to a CMS `uploads` folder and can be organized however you like. Never place content assets or hardcode content text anywhere in `/components`!

## Scripts

| Command               | Purpose                                         |
|:----------------------|:------------------------------------------------|
| `npm run lint:js`     | Lint JS (see `eslintConfig` in `package.json`). |
| `npm run lint:js:fix` | Lint JS and automatically fix issues.           |
| `npm run lint:css`    | Lint CSS (see `stylelint` in `package.json`).   |
| `npm run clean`       | Delete `/bundle`.                               |
| `npm run build`       | Compile JS and CSS to `/bundle`.                |
| `npm run build:watch` | Build, rebuilding on source file changes.       |
| `npm start`           | Start a dev server and open in browser.         |

## Tips

- Use NPM to manage 3rd party dependencies.
- Avoid adding already minified assets for better sourcemap assisted debugging.
- Use [JSDoc](http://usejsdoc.org) when writing JS.
- Don't vendor prefix CSS rules that are on a standards track; [Autoprefixer](https://github.com/postcss/autoprefixer) will take care of it.
- Don't reset, normalize or otherwise declare styles globally; all variables and rules should be scoped to a component. `html` and `body` are an exception as they form the top `app` component.
- Only refer to the UI and not content when naming things in `/components`. For example, `icon-link` is more versatile than `contact-us-link`.
