---
title: Exercise - testing the waters
tagline: Getting our feet wet
---

Best way to learn to swim - **jump into the deep end**! You will now try your hand at JavaScript by creating a simple **guess the number** game.

~~~

Create a **super-simple html file** that only contains the necessary structure, as well as a **script element where you will put your code**.

~~~

We **won't use the html** as an interface. Instead we'll communicate using two otherwise useless methods:

~~~

First we have **`prompt`**. By executing this code:

```javascript
var answer = prompt("What is your name?");
```

~~~

Then **execution of the program is paused** until the user has replied using the **popup** that the browser opened:

![](resources/images/prompt.png)

~~~

The other otherwise useless method is **`alert`**, which is the **same thing but without the input field**.

```javascript
alert("WRONG!");
```

![](resources/images/alert.png)

~~~

We can **generate a random value** using the `random` and `floor` methods of the built-in `Math` object:

```javascript
var randomNumber = Math.floor(Math.random()*3); // an integer from 1-10
```

~~~

Note that **all values from `prompt` are strings**, so you might need to **cast it to a number**:

```
var guess = parseInt(prompt("Enter your guess"));
```

~~~

Now - ***use all these pieces** to create a **guess-the-number game**! You should...

* **generate a number** between 1-10
* allow the user **up to 3 guesses**.

~~~

This exercise should be **submitted to the `academysubs/guessthenumber` folder** in the same repo as before!

~~~

**Challenge**: Make it so that the user can play again if he wants to after the game is over!

~~~

**Challenge**: Check the input from the user and **give error message** if the input is faulty!

