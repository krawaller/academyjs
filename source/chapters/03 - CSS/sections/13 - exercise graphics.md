---
title: Exercise - Style the game
tagline: Hiring an illustrator
---

Time to return to your choose-your-own-adventure and make it **slightly less drab**!

![](resources/images/houseofhell.jpg)

~~~

In other words: **add some CSS to the site you made earlier**!

Since we want the same styling on all pages, and aren't using any templating system, you should **put the styles in a style sheet** which you then `link` into all pages.

~~~

How pretty must it be? Not very, but here are **some suggestions**:

* Find a style for **each different section** (header, main, footer, text, links, etc), and try to make them look clearly defined.
* Also make a good **container** for the entire app. These commonly have side margins.
* Experiment with **typography**. Try out different fonts, letter spacing and line spacing.

~~~

We encourage you to use this as an excuse to **get to know the dev tools**. You should **do the experimenting** in there, and only add the CSS code when you have a good idea of what you want.

~~~

**Challenge**:, use the `:first-child` and `:first-letter` pseudoclasses to make some nice **drop caps**. 

![](resources/images/dropcaps.png)

There are some good pointers at **CSS-Tricks**: https://css-tricks.com/snippets/css/drop-caps/

~~~

**Challenge**: Use the `@font-face` feature to bring in some more game-like font!

![](resources/images/gametext.png)

You can also cheat by using [https://fonts.google.com](https://fonts.google.com).

~~~

**Don't overwrite the old files** - copy them into a new folder.

Then to **submit the exercise**:

1. navigate to `/submissions/gamev2` in your fork of `academysubs`
1. **create a folder** with your user name there
1. copy the **styled site files** into the folder.
1. **push** and make a **pull request**