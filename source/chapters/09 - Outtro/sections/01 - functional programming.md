---
title: Functional programming
tagline: Jumping down the rabbit hole
---

So - since **functions are first class citizens**, we can **send them around just like any value**.

Which also means that **a function can take, and/or return, other functions**! Such a function is called a **higher order function**.

~~~

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

To show we can also **return new functions**, take a look at this beauty:

```
function multiplier(func,times){
  return function(){
    for(var i = 0; i < times; i = i + 1){
      func();
    }
  };
}
```

~~~

Did you see the difference? `multiplier` doesn't execute the parameter function, but **returns a new function**!

```
var tripleSpam = multiplier(spam,3);
```

If we **execute the returned function** we get the triple spam:

```
tripleSpam(); // SPAM! SPAM! SPAM!
```

~~~

Functional programming is a **really powerful tool**, and something that is likely to **get you hooked once you have learned it**. We warmly encourage you to explore the subject! 



