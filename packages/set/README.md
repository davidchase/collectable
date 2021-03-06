# Collectable.js: Immutable Set

> An persistent set data structure, backed by an immutable hash map

[![Build Status](https://travis-ci.org/frptools/collectable.svg?branch=master)](https://travis-ci.org/frptools/collectable)
[![NPM version](https://badge.fury.io/js/%40collectable%2Fset.svg)](http://badge.fury.io/js/%40collectable%2Fset)
[![GitHub version](https://badge.fury.io/gh/frptools%2Fcollectable.svg)](https://badge.fury.io/gh/frptools%2Fcollectable)

*This documentation is under construction. The list of functions, descriptions and examples are pending.*

## Installation

```
# via NPM
npm install --save @collectable/set

# or Yarn
yarn add @collectable/set
```

If you intend to use other data structures as well, install the main collectable package instead. It takes a dependency on each of these data structures, and so they will become available implicitly, after installation.

```
# via NPM
npm install --save collectable

# or Yarn
yarn add collectable
```

TypeScript type definitions are included by default.

## Usage

Import and use the functions you need:

```js
import {fromArray, arrayFrom} from '@collectable/set';

const set = fromArray(['X', 'Y']); // => <[X, Y]>
const array = arrayFrom(set); // => [X, Y]
```

Pre-curried versions of functions for a given data structure are available by appending `/curried` to the import path, like so:

```ts
import {fromArray, append} from '@collectable/set/curried';

const addZ = append('Z');
const set = addZ(fromArray(['X', 'Y'])); // => <[X, Y, Z]>
```

Use a modern bundler such as Webpack 2 or Rollup in order to take advantage of tree shaking capabilities, giving you maximum flexbility to use what you need while excluding anything else from the final build.

## API

All set-manipulation functions are available from module `@collectable/set`.

Curried versions of each of these (where applicable) are available from module `@collectable/set/curried`. The curried versions of each function will suffer a minor performance hit due to the additional layers of indirection required to provide a curried interface. In most cases this is not worth worrying about, but if maximum performance is desired, consider using the non-curried API instead.

----

*Documentation pending*