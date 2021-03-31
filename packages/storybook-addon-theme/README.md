# Storybook Addon Theme

Storybook Addon Theme can be used to change the background color and default theme inside the preview in [Storybook](https://storybook.js.org).

![Storybook screenshot](https://user-images.githubusercontent.com/679346/113085270-c0c51800-919c-11eb-8325-d41f32fc2b50.png)

## Installation

Theme is part of [@pluralsight/ps-design-system-storybook-preset](https://github.com/pluralsight/design-system/tree/master/packages/storybook-preset) or you can install it individually with:

```sh
npm i -D @pluralsight/ps-design-system-storybook-addon-theme
```

## Configuration

Add the following to [`.storybook/main.js`](https://storybook.js.org/docs/react/configure/overview#configure-your-storybook-project):

```js
module.exports = {
  addons: ['@pluralsight/ps-design-system-storybook-addon-theme']
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

