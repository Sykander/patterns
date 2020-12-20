# Iterable Async Methods 
[![Try iterable-async on RunKit](https://badge.runkitcdn.com/iterable-async.svg)](https://npm.runkit.com/iterable-async)
[![Documentation](https://inch-ci.org/github/dwyl/hapi-auth-jwt2.svg?branch=master)](https://github.com/Sykander/iterable-async/wiki)
[![Known Vulnerabilities](https://snyk.io/test/github/Sykander/iterable-async/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Sykander/iterable-async?targetFile=package.json)

A collection of methods for looping iterable objects asynchronously using something similar to the Array api.

## Installation

```
 $ npm install iterable-async
```

## Usage

***ES6 Format***

``` js
const AsyncArray = require('iterable-async');
```

***TypeScript Format***

``` ts
import * as AsyncArray from "iterable-async";
```

## Async Array

An Array class with additional async array methods.

### Methods

| Method | Description | Wiki |
| -- | -- | -- |
| **asyncFilter** | Filter an iterable object asynchronously. | [wiki](https://github.com/Sykander/iterable-async/wiki/Async-Filter) |
| **asyncFindIndex** | Find an item's index in an iterable object asynchronously | [wiki](https://github.com/Sykander/iterable-async/wiki/Async-Find-Index) |
| **asyncFind** | Find an item in an iterable object asynchronously | [wiki](https://github.com/Sykander/iterable-async/wiki/Async-Filter) |
| **asyncForEach** | Loop over an iterable object asynchronously | [wiki](https://github.com/Sykander/iterable-async/wiki/Async-For-Each) |
| **asyncMapSort** | Map an iterable object asynchronously and then resolve when it's sorted, this method is much more efficient than running a regular `asyncSort` when done with a synchronous comparison function | [wiki](https://github.com/Sykander/iterable-async/wiki/Async-Map-Sort) |
| **asyncMap** | Map an iterable object asynchronously | [wiki](https://github.com/Sykander/iterable-async/wiki/Async-Map) |
| **asyncReduce** | Reduce an iterable object asynchronously | [wiki](https://github.com/Sykander/iterable-async/wiki/Async-Reduce) |
| **asyncSort** | Sort an iterable object asynchronously | [wiki](https://github.com/Sykander/iterable-async/wiki/Async-Sort) |

## Development

Development is open to contribution, check the project board "Development" for tickets.

### Scripts

| Script | Description |
|--|--|
| lint | Lints the project and returns a report |
| lint:check | Returns a report on lint issues in the project |
| lint:fix | Fixes lint issues in the project and returns a report on the ones which couldn't be fixed |
| lint:report | Generates lint-summary.json in the reports folder |
| test | Runs all tests and returns a report on which pass/fail |
| test:unit-tests | Runs only unit tests and returns a report on which pass/fail |
| test:unit-tests-report | Generates unit-tests-summary.json in reports |
| test:code-style | Runs only code checks and returns a report on which pass/fail |
| test:type-definitions | Attempt to compile and create type definitions for the project |
| test:coverage | Generates coverage-summary.json in reports and confirms whether the coverage criteria is met |

Eg. to run all lint tests
```
 $ npm run lint
```

### Commit Rules

* All commits should pass the lint check commands
