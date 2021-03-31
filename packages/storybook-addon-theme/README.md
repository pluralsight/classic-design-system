# Storybook Addon Theme

Storybook Addon Theme can be used to change the background color and default theme inside the preview in [Storybook](https://storybook.js.org).

![React Storybook Screenshot](https://user-images.githubusercontent.com/679346/113080059-755a3c00-9193-11eb-9193-f54ec63c2e4a.png)

## Installation

Theme is part of [@pluralsight/storybook-preset](https://github.com/pluralsight/design-system/tree/master/packages/storybook-preset) or you can install it individually with:

```sh
npm i -D @pluralsight/storybook-addon-theme
```

## Configuration

Add the following to [`.storybook/main.js`](https://storybook.js.org/docs/react/configure/overview#configure-your-storybook-project):

```js
module.exports = {
  addons: ['@pluralsight/storybook-addon-theme']
}
```

## Usage

Stories will default to the `dark` theme.

Override the default for a single story, all of a component's stories, or for all stories with the `theme.name` parameter (*[see more instructions here](https://storybook.js.org/docs/react/writing-stories/parameters)*):

```js
theme: { name: 'light' }
```

Disable the theme with the `theme.disable` parameter:

```typescript jsx
theme: { disable: true }
```

If you're using Storybook's [addon-essentials](https://storybook.js.org/docs/react/essentials/introduction) you'll probably want to disable the `Background` addon since it also sets the background. Add the following to `.storybook/preview.js`:
```js
parameters: {
  backgrounds: { disable: true }
}
```

