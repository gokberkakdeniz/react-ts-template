# react-ts-template

A minimal opinionated `react` template with `react-redux`, `redux-saga`, `react-router`, `typescript`, `eslint`, and `prettier`.

## VisualStudio Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

## Coding style

- Airbnb eslint config with small changes 
- Functional components
- Component names and files are PascalCase.
- Function names are camelCase, files are kebab-case

## Scripts
- `start`: react-scripts start
- `build`: react-scripts build
- `test`: react-scripts test
- `eject`: react-scripts eject
- `g`: plop (angular cli like [code generator](https://plopjs.com/))

## Project hierachy

    .
    ├── plop-templates
    ├── public
    └── src
        ├── components
        ├── helpers
        ├── hooks
        ├── pages
        │   └── Counter
        │       ├── Counter.module.css
        │       ├── Counter.tsx
        │       └── index.ts
        ├── router
        ├── store
        │   ├── counter
        │   │   ├── counter.actions.ts
        │   │   ├── counter.reducer.ts
        │   │   ├── counter.sagas.ts
        │   │   ├── counter.types.ts
        │   │   └── index.ts
        │   ├── index.ts
        │   ├── reducer.ts
        │   ├── saga.ts
        │   ├── state.ts
        │   └── store.ts
        └── types
