# switch.js
A toggle-like switch made with JavaScript instead of using ugly checkboxes

How to use
----------
Create a new script tag with the switch.js file as the source. Make sure to place this near the END of the body tag

You can then create a new `<switch></switch>` html element and put two `<opt></opt>` tags inside it.
The toggle font-size can be changed with the `<switch>`'s `fsize` attribute.
The `<switch>`'s `onswitch` attribute contains the code to execute once the switch has been changed.
It also has a javascript `vl` property which can be accessed through `switch` attributes with `this.vl` and via javascript with something like `switchElement.vl`.
The vl property is short for value and can contain either 0 or 1. 0 is returned when the first option is selected and 1 when the second one is selected.
When an option is not highlighted its background is gray and the color is black by default. Both `<opt>` tags need an `scolor` and `sbgcolor` attribute, which contains the colour and background colour to change to when the option is selected.

Example
-------
        <switch onswitch="console.log('Toggle clicked! new switch value is '+this.vl);" fsize="22px">
                <opt scolor="black" sbgcolor="white">Light</opt>
                <opt scolor="white" sbgcolor="black">Dark</opt>
        </switch>
        <script src="./switch.js"></script>
