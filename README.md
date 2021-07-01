# App loader

A simple loader useful for single page applications (SPA).

## Usage

### Import module

#### Style (css)

```html
<link rel="stylesheet" href="./path/to/style.css" />
```

#### Javascript

```js
import { Loader } from "./path/to/loader.js";
```

_Note : With `import` the type attribute must be `module`_

```html
<script src="./main.js" type="module"></script>
```

### Initialisation

Create a new instance of Loader class :

```js
const load = new Loader();
```

### start()

Start the loader in html page

Params :

- None

Return : undefined

```js
load.start();
```

### stop()

Stop the loader in html page

Params :

- None

Return : undefined

```js
load.stop();
```

## Example

```js
import { Loader } from "../dist/loader.js";
const load = new Loader();
load.start();
setTimeout(() => {
  load.stop();
}, 4000);
```

And see the test directory for more examples.
