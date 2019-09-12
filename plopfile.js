module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      { type: 'input', name: 'name', message: 'What is your component name?' }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{kebabCase name}}',
        base: 'plop-templates/component',
        templateFiles: 'plop-templates/component/**/*.hbs'
      },
      {
        type: 'addMany',
        destination: 'packages/{{kebabCase name}}/.storybook',
        base: 'plop-templates/component/.storybook',
        templateFiles: 'plop-templates/component/.storybook/**/*.hbs'
      }
    ]
  })
}
