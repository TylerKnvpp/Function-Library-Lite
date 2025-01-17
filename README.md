# Functional Library Lite Discussion Question

## Objectives
- [ ] Better understand JS iterators
- [ ] Gain a deeper understanding of callbacks

## Setup
1. Open the `index.html` file in the browser
2. Test your JS code inside the `index.js` file

Remember to refresh the page whenever you make changes and to use the console in the Chrome Dev Tools to try things on the fly.

## Discuss
### 1. forEach

Here's what a `forEach` might look like if we wrote it ourselves:

```js
function myEach(arr, callback){
  for(let i = 0; i < arr.length; i++){
    const element = arr[i]
    callback(element)
  }
}
```

Discuss every line of this code. If the objective of a `forEach` is to run some bit of code on every element of an array, how does this code allow us to do this? Discuss how you would invoke this function and where its arguments come from. 

Invoke `myEach` several times with your own array and callback.


#### Note
For the next three exercises, pay attention to return values. In particular, discuss how the return value of the callback is used. Then discuss the return value of the higher-order function (i.e. myMap, myFilter, myFind).

### 2. map

Use the above `myEach` as a template to write your own `map` called `myMap`. Remember: the purpose of `map` is to execute some bit of code on each element and collect the results (the return values) of those executions into a new array and return that array.

For example: If our callback multiplies each number by 2, if `[1,2,3,4]` goes in to `map`, `[2,4,6,8]` should be returned by `myEach`.

### 3. filter

Use the above `myEach` as a template to write your own `filter` called `myFilter`. Remember: the purpose of `filter` is to collect only the elements that match a given criteria into a new array and return that array. The callback is used to determine whether or not an element meets your given criteria.

For example: If our callback checks to see if a number is even, if `[1,2,3,4]` goes in to `filter`, `[2,4]` should be returned.

### 4. find

Use the above `myEach` as a template to write your own `find` called `myFind`, which is similar to `filter` but instead returns only the first element it finds. 

For example: If our callback checks to see if a number is greater than 5, if `[4,2,5,7,2,6,8]`, `7` should be returned.
