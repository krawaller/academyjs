---
title: Arrays
tagline: Ordered lists
---

A special kind of objects are **arrays**, which are an **ordered list of values**.

You could say that they are **objects where the keys are always named 0, 1, 2...**.

~~~

We can **create arrays** using the **array literal notation**:

```javascript
var list = ["tomatoes",42,false];
```

~~~

An array **has a length property** that tells us how many elements it contains:

```javascript
list.length // 3
```

~~~

We can **add a new value** by calling the `push` method:

```javascript
list.push("foobar");
list.length // 4
```

~~~

It is common to **iterate using a regular for loop**:

```javascript
for(var i=0; i < list.length; i = i+1){
  console.log("Item "+i+" is "+list[i]);
}
```

~~~

There are a **whole bunch of array methods** - see the MDN reference for a full list:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

~~~

**Question**: The `length` property was rather convenient - is there something **similar on regular objects**?

~~~

**Answer**: Not directly, but we can get an **array of all keys for an object** using the `keys` method of the global `Object` object:

```
var keys = Object.keys(myObject); // ["someProp","anotherProp"]
```