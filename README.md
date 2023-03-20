# GameForm Web Components

This repository contains the web components that are responsible for the mini-games/assessments that are part of the [GameForm](https://getgameform.com/) service.

[GameForm](https://getgameform.com/) is a project for CS6460, Educational Technology, at Georgia Institute of Technology. The tool aids in the creation of
embeddable, gamified formative assessments for
use with online course content. 

## Usage

The component(s) can be used independently from GameForm. You can manually embed into any web page by using the CDN URL for a specific component

### Pub-Trivia Assessment 

#### Step 1:
Add the script to your web page:
```html
<script src="https://cdn.jsdelivr.net/gh/bdaley/gf-web-components/dist/assets/js/gf-trivia.js" async></script>
```

#### Step 2:

Add the custom web component wherever you would like the assessment to load on your page. Be sure to customize the attributes and &lt;slot&gt; (for the question):

```html
<gf-trivia answers="blue,green,red,yellow" time="10">
    What is the best color?
</gf-trivia>
```

| Attribute         | Default Value     | Description |
|--------------|-----------|------------|
| answers | no default - required      | A comma-separated list of options. The first item should be the correct answer.        |
| time      | 30  | Specifies the number of seconds in the countdown timer.       |
| &lt;slot&gt;      | no default - required  | Typically reserved for the question, but allows for images and other elements.       |






## Developer Documentation
### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```
