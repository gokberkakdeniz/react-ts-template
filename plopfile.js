// eslint-disable-next-line func-names
module.exports = function (plop) {
  plop.setGenerator("page", {
    description: "react-router page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{ pascalCase name }}/{{ pascalCase name }}.tsx",
        templateFile: "plop-templates/page/Page.hbs",
      },
      {
        type: "add",
        path:
          "src/pages/{{ pascalCase name }}/{{ pascalCase name }}.module.css",
        templateFile: "plop-templates/page/Page.module.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{ pascalCase name }}/index.ts",
        templateFile: "plop-templates/page/index.hbs",
      },
    ],
  });

  plop.setGenerator("component", {
    description: "reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/component/{{ pascalCase name }}/{{ pascalCase name }}.tsx",
        templateFile: "plop-templates/component/Component.hbs",
      },
      {
        type: "add",
        path:
          "src/component/{{ pascalCase name }}/{{ pascalCase name }}.module.css",
        templateFile: "plop-templates/component/Component.module.hbs",
      },
      {
        type: "add",
        path: "src/component/{{ pascalCase name }}/index.ts",
        templateFile: "plop-templates/component/index.hbs",
      },
    ],
  });

  plop.setGenerator("store", {
    description: "redux action, saga, reducer",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "state name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/store/{{ kebabCase name }}/index.ts",
        templateFile: "plop-templates/state/index.hbs",
      },
      {
        type: "add",
        path: "src/store/{{ kebabCase name }}/{{ kebabCase name }}.actions.ts",
        templateFile: "plop-templates/state/state.actions.hbs",
      },
      {
        type: "add",
        path: "src/store/{{ kebabCase name }}/{{ kebabCase name }}.reducer.ts",
        templateFile: "plop-templates/state/state.reducer.hbs",
      },
      {
        type: "add",
        path: "src/store/{{ kebabCase name }}/{{ kebabCase name }}.sagas.ts",
        templateFile: "plop-templates/state/state.sagas.hbs",
      },
      {
        type: "add",
        path: "src/store/{{ kebabCase name }}/{{ kebabCase name }}.types.ts",
        templateFile: "plop-templates/state/state.types.hbs",
      },
    ],
  });

  plop.setGenerator("helper", {
    description: "helper function",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "function name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/helpers/{{ kebabCase name }}.ts",
        templateFile: "plop-templates/helper/helper.hbs",
      },
    ],
  });

  plop.setGenerator("hook", {
    description: "react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "hook name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/use{{ pascalCase name }}.ts",
        templateFile: "plop-templates/hook/hook.hbs",
      },
    ],
  });
};
