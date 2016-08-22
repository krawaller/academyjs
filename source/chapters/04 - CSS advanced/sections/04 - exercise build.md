---
title: Exercise - Build step
tagline: LESS is more
---

No surprise - we'll now **integrate LESS** into our game!

~~~

As we saw, this means that we now need a **build step** which **compiles the LESS code into CSS**.And the first step to install LESS is, perhaps surprisingly, to **install Node**!

![](resources/images/node.jpg)

More on Node, and installation instructions, here: [https://nodejs.org/](https://nodejs.org/)

~~~

We'll talk more about Node, which is a JavaScript runtime, later. Now we just need it to use **npm**, which is a **package manager** that runs in Node. LESS is distributed as such a package.

![](resources/images/npm.png)

You can read more about npm here: [https://www.npmjs.com/](https://www.npmjs.com/)

~~~

LESS is installed as a global command. Once you have installed Node, open a **terminal** - it doesn't matter in which folder you are - and type:

```
npm install -g less
```

~~~

After that you now have access to the **`lessc` command**. You use it like this:

```
less path/to/styles.less wanted/output/path/styles.css
```

~~~

To integrate this in your project:

1. **Rename** your `.css` file to `.less`. CSS is valid LESS! 
1. Read up on LESS and **use some features in your file**.
1. **Use `lessc`** to compile your code into `.css`!

~~~

Submit by **adding, committing, pushing and make a PR** as usual!

~~~

**Challenge**: Of course, having to remember to compile the `.less` file is tiresome. It is therefore common to **set up an automagic compiler**. Try your hand at this! There are many solutions, one suggestion is to use this: [https://github.com/jonycheung/deadsimple-less-watch-compiler](https://github.com/jonycheung/deadsimple-less-watch-compiler).