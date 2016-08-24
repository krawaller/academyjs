---
title: Functions
tagline: code in a can
---

There are **two different ways to define a function** in JavaScript. First as a **named function**:

```javascript
function echoer(word,times){
  var echo = "";
  for(var i = 0; i < times; i = i + 1){
    echo = echo + word;
  }
  return echo;
}
```

~~~

Or as an **anonymous function** which we can assign to a variable:

```javascript
var echoer = function(word,times){
  var echo = "";
  for(var i = 0; i < times; i = i + 1){
    echo = echo + word + " ";
  }
  return echo;
}
```

Mostly it **doesn't really matter** which way you choose.

~~~

As the example showed, we use **`return something`** to return a value. If you just do `return;`, the returned value is `undefined`, which it also is if you don't use `return` at all.

~~~

We **execute a method by using parens**, and **listing eventual parameters** within those:

```
var withEcho = echoer("hello",3); // "hello hello hello "
```

~~~

**Question**: What is the **difference** between this:

```
var x = func;
```

and **this**:

```
var x = func();
```

~~~

**Answer**: Well:

* In the **first example**, **`x` has a reference to `func`**. Which means that after that, **doing `x()` and `func()` would yield the same thing**.

* In the **second example**, **`x` is whatever `func` returned**.

~~~

A final observation - There is nothing stopping us from **having functions on objects**:

```
myObject.beingAnnoying = function(){
  console.log("SPAM!");
};
myObject.beingAnnoying(); // "SPAM!"
```

When a function is a property on an object it is called a **method** of that object.