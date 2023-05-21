# Math Utils Package
Generates a random number between two given values.
===


[![версия npm](https://badge.fury.io/js/random-from-to.svg)](https://www.npmjs.com/package/random-from-to)


The Math Utils package provides a set of useful mathematical utility functions that can be used in JavaScript applications. This package includes the following functions:

- `random`: Generates a random number between two given values.
- `geometricMean`: Calculates the geometric mean of a set of numbers.
- `arithmeticMean`: Calculates the arithmetic mean of a set of numbers.

## Installation

To install the Math Utils package, you can use npm or yarn:

```shell
npm install random-from-to
```

or

```shell
yarn add random-from-to
```

## Usage

To use the functions provided by this package, you need to import them into your JavaScript code:

```javascript
const { random, geometricMean, arithmeticMean } = require('random-from-to');
```

### Generating a Random Number

The `random` function allows you to generate a random number between two given values. It takes two arguments: `num1` and `num2`. Here's an example:

```javascript
const randomNumber = random(1, 10);
console.log(randomNumber);
// Output: A random number between 1 and 10
```

### Calculating Geometric Mean

The `geometricMean` function calculates the geometric mean of a set of numbers. It accepts a variable number of arguments. Here's an example:

```javascript
const mean = geometricMean(2, 4, 8);
console.log(mean);
// Output: 4 (the geometric mean of 2, 4, and 8)
```

### Calculating Arithmetic Mean

The `arithmeticMean` function calculates the arithmetic mean of a set of numbers. It also accepts a variable number of arguments. Here's an example:

```javascript
const mean = arithmeticMean(2, 4, 6, 8, 10);
console.log(mean);
// Output: 6 (the arithmetic mean of 2, 4, 6, 8, and 10)
```

## Benefits

The Math Utils package provides convenient functions for performing common mathematical calculations in JavaScript applications. By using this package, you can:

- Easily generate random numbers within a given range.
- Calculate the geometric mean of a set of numbers.
- Calculate the arithmetic mean of a set of numbers.

These utility functions can be particularly useful in various scenarios, including statistical analysis, data processing, game development, and more.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/tukhtamurodov/random).

## @powered by [elshod](https://t.me/the_elshod)

---

Feel free to customize this `readme.md` file according to your specific package details and requirements.