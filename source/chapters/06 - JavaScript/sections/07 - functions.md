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

Now for something super cool - since **functions are first class citizens**, we can send them around just like any value. Which also means that a function can take, and return, other functions! Such a function is called a **higher order function**.

As a contrived example, say we have this function:

```
var spam = function(){
  console.log("SPAM!");
}
```

~~~

And then we have this higher order function:

```
function repeater(func,times){
  for(var i = 0; i < times; i = i + 1){
    func();
}
```

~~~

If we now do this:

```javascript
repeater(spam,3);
```

We would see this in the console:

```
"SPAM!"
"SPAM!"
"SPAM!"
```

~~~

There is nothing stopping us from **having functions on objects**:

```
myObject.beingAnnoying = spam;
myObject.beingAnnoying(); // "SPAM!"
```

When a function is a property on an object it is called a **method** of that object.