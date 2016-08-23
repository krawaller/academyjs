---
title: Objects
tagline: bags of data
---

The types we've seen so far have been **atomic primitives**. But JavaScript also has two **composite data types**, namely **objects** and **arrays**!

Althought technically **arrays are a special kind of objects**, but, never mind.

~~~

An object in JavaScript is a **collection of key-value pairs**, often called a **dictionary** in other languages. 

The **property names (keys) are always strings**, and the **property values can be anything**.

~~~

We can **create an object literal** like this:

```javascript
var myObject = {
  someProp: 42,
  anotherProp: "hello!"
};
```

~~~

There are **two different ways to access a value**.

We can use **dot notation**:

```javascript
var x = myObject.someProp; // 42
```

~~~

Or we can use **bracket notation**:

```javascript
var y = myObject["someProp"]; // "hello!"
```

~~~

**Question**: The **dot notation seems much smoother**, so **why would we ever want bracket notation**?

~~~

**Answer**: That allows us to do **dynamic lookups**:

```
var propName = "someProp";
var z = myObject[propName]; // 42
```

~~~

We **add a property simply by assigning to it**:

```javaScript
var myObject.newProp = 777;
```

~~~

And we **delete a property** using the `delete` keyword:

```javascript
delete myObject.newProp;
```

~~~

Contrary to primitives, **objects are references**, which means that this is false since it is **two different objects**:

```javascript
var test = {a:1} === {a:1}; // false
```

~~~

While this is true, since they **point to the same object**:

```javascript
var x = {a:1};
var y = x;
var test = x === y; // true
```

~~~

Since **objects are references** they are **always truthy**:

```javascript
if ({}){
  console.log("An empty object is truthy!"); // will be shown!
}
```

~~~

We can **iterate over objects** using a **`for..in`loop**:

```javascript
for (var key in myObject){
  console.log(key+" has value "+myObject[key]);
}
```

