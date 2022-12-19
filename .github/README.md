# eslint-config

Opinionated eslint configuration to be used among applications and libraries. It groups the following packages:

- eslint-config-next
- eslint-plugin-simple-import-sort
- eslint-plugin-sort
- eslint-plugin-unused-imports

## Getting started

Create a _.npmrc_ file at the root of your project. This file should look like this:

```.npmrc
@agusmgarcia:registry=https://npm.pkg.github.com
```

Then execute the following command:

```bash
npm i @agusmgarcia/eslint-config
```

Create a `.eslintrc` file at the root of your project and extends from the installed library:

## Setup for applications

```json
{
  "extends": ["@agusmgarcia/eslint-config/app"]
}
```

## Setup for libraries

```json
{
  "extends": ["@agusmgarcia/eslint-config/lib"]
}
```
