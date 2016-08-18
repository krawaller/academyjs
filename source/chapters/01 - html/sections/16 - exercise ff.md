---
title: Exercise - Fighting Fantasy
tagline: left or right, block or strike?
---

<div style="float:right;margin-left:2em;">
![](resources/images/ff.jpg)
</div>

Apologies, but yes - now you get to **make a website**.

Not only that, you are going to make a classic **gamebook** adventure! Anyone recognizes this?

~~~

They work something like this:

> A dark hallway extends into the unknown. You can just make out the outline of a door to your left.
>
> *   to try the door, go to page 43
> *   to fumble down the hallway, go to page 231

~~~

We are now going to **emulate the same thing** but using a **website with links** instead of a **book with page-turning instructions**.

~~~

<div style="float:right;margin-left:2em;">
![](resources/images/files.png)
</div>

Create a **folder for your game**. It should contain an **image folder** and **a `.html` file per page**. The first page should be called `index.html`.

Use a **maximum of 5 pages**, we're just testing the waters here.

~~~

To start off, create a **basic html content structure** for your pages. It should...

* have a **header section** with the name of the game
* a **main section** where the text and image of the current page is visible
* a **navigation section**, perhaps a list, with the current possible options

~~~

A good tip is to check out the [MDN element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), particularly the **Content sectioning** part.

~~~

As you're working, you can try the game out simply by **opening the file in the browser**.

If you're using IntelliJ or Webstorm you can do that from inside the IDE.

~~~


When you're done you know what to do;

* navigate to `/submissions/fightingfantasy` in your fork of `academysubs`
* **copy in your game folder** there, but **rename it to your username**
* **commit**, **push** and create a **pull request**!

~~~

Now we get to see **why we're using the `gh-pages` branch**; if we have a repo named

```
http://www.github.com/<myusername>/<myreponame>
```

...then the `gh-pages` branch of that is published on a web server at

```
http://<myusername>.github.io/<myreponame>
```
