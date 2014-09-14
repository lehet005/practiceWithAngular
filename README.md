practiceWithAngular
===================

A beginning of an exploration of Angular made by CSci 3601 at UMM.


##Notes
So, Angular mentions on their website that you can have more than one angular "app" on every page, which would be great.
They lied. When using the ng-app directive thingy, you cannot actually have more than one app per page without doing 
some messy stuff with manually loading them. 
This is explained pretty well [here](http://www.simplygoodcode.com/2014/04/angularjs-getting-around-ngapp-limitations-with-ngmodule/) .
The solution mentioned there ~~doesn't seem to be working for us so far, but might be worth looking into further.~~ 
~~doesn't seem to work in firefox, but works fine in google chrome, chromium, etc.~~ 
~~works fine in everything *most* of the time, but doesn't seem to play nice with angular bootstrap.~~
Got updated and now it works great.

The bower module for it has yet to update though, so for now the file will be linked from the latest version.
 

####What to do before a good solution is found?
For now, and possibly forever, the simplest solution seems to be just using only one angular app per page, and writing
multiple controllers if you need separate features on one page.


Peter And MARK!!!!111!!1!one!!!!!
Forked from Emma and Joe.
We add the sloth GIF and the string print and reverse string print as well as the note box.