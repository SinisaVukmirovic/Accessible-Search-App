### Accessibility Search App

#### Accessibility Notes
___

###### The more we use semantic elements, the better, because it is good for accessibility

###### Follow header hierarhy as we go to different spots within out page

###### Even if we are not showing the header on the page, we should create it, so that screen readers can follow them, cause it is very common to navigate the header using a screen reader

###### We can user aria-hidden="true" atribute on elements we don't need to be visible to a screen readers

###### For button elements that we don't want to take place of an actual button, and being pressed on ENTER press before the actual submit/search buttons, we create them with DIV element, giving it a role="button" and a tabindex="0" since it will not have it by default, like an actual button element

###### Making focused element key press work both with ENTER key and SPACE key

###### We give aria-live="assertive" attribute to element we want the screen readers to anounce
___

#### JS features used in this project

###### JS Modules - export/import

###### Fetch() with async/await

###### The ".hasOwnProperty()" method - returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

###### The "encodeURI()" method - we use encodeURI method to replace invalid characters within a string, such as spaces and other invalid characters in URL addresses...

###### window.innerWidth and document.body.clientWidth for finding out the current viewport width of the display/screen