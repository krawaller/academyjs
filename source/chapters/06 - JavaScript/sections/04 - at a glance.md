---
title: JS at a glance
tagline: a whirlwind tour!
---

Hold on tight, for now we'll **run through some JS basics**!

To try the snippets, **paste them into the Console tab of the Chrome developer tools**.

~~~

There **is no `main` function** - JS code is simply **run from top to bottom**.

~~~

We **declare variables using the `var` keyword**, and **assign using `=`**. No type specification needed, since JS is loosely typed.

```
var x = "Hello world!";
```

We **end statements with `;`**. These are actually optional, but **leaving them out can cause problems**!

~~~

Since **a variable can contain any type**, the language offers a **way to check**:

```
console.log(typeof x); // "string"
```

The output from `console.log` is visible in the Developer tools console tab.

~~~

You saw **string literals** earlier. There are also...

* **numbers**: `3`, `2.04` (all numbers are floating points)
* **booleans**: `true`, `false`

~~~

And **two single-value voidish types**:

* **null**: `null`
* **undefined**: `undefined`

~~~

**Equality testing** is done in two ways:

* `==` (which does type coercion, so `3 == "3"` is `true`)
* `===` (also comparing type, so `3 === "3"` is `false`)

There are also `!=` and `!==` negative variants.

~~~

You will **recognize `if` statement syntax**:

```javascript
if (guess === correctAnswer){
  console.log("Correct!");
} else {
  console.log("Not quite...");
}
```

The `else` part is of course optional.

~~~

Also the **for loop** is rather classical:

```
for(var i=0; i<1000; i=i+1){
  console.log(i+" bottles of beer on the wall");
}
```

~~~

As is the **while**:

```
while(x > 0){
  x = x-1;
  console.log(x+" bottles left");
}
```

~~~

This was a **very superficial tour** to give you what you need to test the waters. There is sooo much more to say!