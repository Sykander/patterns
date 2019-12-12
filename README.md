# Iterable Async Methods

A collection of methods for looping iterable objects asynchronously using something similar to the Array api.

## Methods

* Async Map
* Async For Each
* Async Filter
* Async Find
* Async Find Index

### Async Map

Map an iterable object asynchronously
```
function asyncMap(callback, [thisArg]) {...}
```

### Async For Each

Loop over an iterable object asynchronously
```
function asyncForEach(callback, [thisArg]) {...}
```

### Async Filter 

Filter an iterable object asynchronously
```
function asyncFilter(callback, [thisArg]) {...}
```

### Async Find

Find an item in an iterable object asynchronously
```
function asyncFind(callback, [thisArg]) {...}
```

### Async Find Index

Find an item's index in an iterable object asynchronously
```
function asyncFindIndex(callback, [thisArg]) {...}
```

## Development

Development is open to contribution, check the project board "Development" for tickets.

### Scripts

```
npm run lint
# Lints the project and returns a report

npm run lint:check
# Returns a report on lint issues in the project

npm run lint:fix
# Fixes lint issues in the project and returns a report on the ones which couldn't be fixed

npm test
# Runs all tests
```

### Commit Rules

* All commits should pass the lint check commands