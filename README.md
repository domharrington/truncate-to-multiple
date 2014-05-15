# truncate-to-multiple

Truncate an array to the highest multiple of a number

[![build status](https://secure.travis-ci.org/domharrington/truncate-to-multiple.png)](http://travis-ci.org/domharrington/truncate-to-multiple)

## Installation

```
npm install truncate-to-multiple --save
```

## Usage
```js
var truncateToMultiple = require('truncate-to-multiple')

console.log(truncateToMultiple([ 1, 2, 3, 4, 5, 6, 7, 8 ], 3))
// -> [ 1, 2, 3, 4, 5, 6 ]
```

### `var truncatedArray = truncateToMultiple(array, multiple)`

Options must include:

- `array` - an array to be truncated
- `multiple` - a multiple to truncate by

## Credits
[Dom Harrington](https://github.com/domharrington/)
