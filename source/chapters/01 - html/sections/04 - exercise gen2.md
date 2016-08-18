---
title: Exercise - Back to the past
tagline: First blood 2
---

You all saw this one coming - your mission, should you choose to accept it, is to **redo the geneaology in XML**!

The translation might mean that you have to make choices, as noted earlier. Bonus points if you reason around these!

~~~

Before you submit your work you should **validate your xml**. A nice service for that can be found at [https://validator.w3.org/#validate_by_input](https://validator.w3.org/#validate_by_input).

~~

Note that you have to put this line:

```
<?xml version="1.0"?>
```

...at the top of your xml, otherwise the validator will balk because *reasons*.

~~~

You can **ignore warnings** - as long as you see the green banner, all is well:

![](resources/images/validation.png)

~~~

To submit;

* navigate to `/submissions/backtothepast` in your fork of `academysubs`
* **create a folder** with your user name there
* put the **definition of your rules** and the **encoded family tree** in the folder. One file or two, your choice.
* **push** and make a **pull request**