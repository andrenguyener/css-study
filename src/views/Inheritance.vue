<template>
    <div id="inheritance">
        <p>So, inheritance is a way of propagating property values from parent elements to their children.</p>
        <p>Once more we have a very simple example here, this time we're going to determine what the line height of the child element will be.</p>
        <ModalImage src="inheritance/inheritance0.png"></ModalImage>
        <p>So, start by remembering from our previous lecture that each and every CSS property must have a value; even if neither we the developer nor the browser do specify.</p>
        <ModalImage src="inheritance/inheritance1.png"></ModalImage>
        <p>In that case there's no cascaded value, right? So when processing a certain property for a certain element such as the line height, the first question that the CSS engine asks is if there is a cascaded value and if so then of course that's the value that's used.</p>
        <ModalImage src="inheritance/inheritance3.png"></ModalImage>
        <p>Now if there's no cascaded value then the next question is if that property can be inherited and that depends on each property.</p>
        <ModalImage src="inheritance/inheritance4.png"></ModalImage>
        <p>There are some properties that are inherited and others are not in the case of line height that property gets inherited as we can see from the property specification.</p>
        <ModalImage src="inheritance/inheritance5.png"></ModalImage>
        <p>So, if a property is inherited then the value of that property becomes the computed value of its parent element.</p>
        <ModalImage src="inheritance/inheritance6.png"></ModalImage>
        <p>Now it's very important to note that the value that gets inherited is not simply the 150% but the computed value. In this case that's 150% of 20 pixels which is 30 pixels, and so the line height neutral element will also be 30 pixels not 150% of the 25-pixel font size, got it?</p>
        <ModalImage src="inheritance/inheritance7.png"></ModalImage>
        <p>
            So again, it's not simply the declared value that's passed but a computed value. Now if it's a property that's not inherited, like for example padding then the
            specified value will become the initial value which is also specific to each property. In the case of padding that's just zero pixels.
        </p>
        <ModalImage src="inheritance/inheritance8.png"></ModalImage>
        <p>Again, you don't need to memorize these initial values because they are all just rather intuitive.</p>
        <h2>Inheritance: What You Need To Know</h2>
        <p>
            So just like before here's a quick summary of what you need to know. I guess the most
            important thing to know about inheritance is that it's there and then it passes the values for some specific properties from parents to children. Again, if you just ignore the jargon,
            inheritance is actually pretty straightforward. Inheritance allows the developers to write less code and code that will be more maintainable.
        </p>
        <h3
            class="list-item"
        >Inheritance passes the value for some specific properties from parents to children – more maintainable code</h3>
        <p>Now in a specification for each and every CSS property you will find if the property is automatically inherited or not. As a rule of thumb properties related to text are inherited. So, properties like font family, font size, color, etc. Other properties like margins or paddings are, of course, not inherited because that would just be extremely impractical. Just imagine setting a margin on some section or something and then suddenly all of the children would automatically get the same margin. That doesn't make any sense, right?</p>
        <h3
            class="list-item"
        >Properties related to text are inherited: font-family, font-size, color, etc.</h3>
        <p>Now it's also important to remember that what gets inherited is the computed value of a property and not the declared value.</p>
        <h3
            class="list-item"
        >The computed value of a property is what gets inherited, not the declared value</h3>
        <p>Also, inheritance of a property, of course, only works if no one neither the developer nor the browser declares a value for their property.</p>
        <h3
            class="list-item"
        >Inheritance of a property only works if no one declares a value for that property</h3>
        <p>Okay, now something else I didn't mention yet is that we can use the inherit keyword to force inheritance of a certain property.</p>
        <h3 class="list-item">- The inherit keyword forces inheritance on a certain property</h3>
        <p>Also in the same way, the initial keyword can be used to reset a property to the initial value.</p>
        <h3 class="list-item">The initial keyword resets a property to its initial value</h3>
        <p>That's actually it about inheritance, not hard at all right? Let's move on now.</p>
    </div>
</template>

<script>
import ModalImage from "@/components/ModalImage.vue";
export default {
  components: {
    ModalImage
  }
};
</script>
