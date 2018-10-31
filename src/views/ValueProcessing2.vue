<template>
    <div id="value-processing2">
        <h2>How Units Are Converted From Relative to Absolute (PX)</h2>
        <p>I want to show you in great detail how the CSS engine converts relative units to pixels in order to calculate computed and used values.</p>
        <ModalImage classProp="small-image" src="value-processing/part2/value_processing1.png"></ModalImage>
        <p>This is crucial to know when you write your own code. This has actually a very practical application in the real world. As relative units are fundamental to build modern responsive layouts.</p>
        <br>
        <p>Again, I have a small code example here for you.</p>
        <ModalImage src="value-processing/part2/value_processing2.png"></ModalImage>
        <p>I can show you how different units work in different situations so we have some global CSS code for the HTML, then a header, and then an element inside the header called header child - that's the basic structure. All right, so we start with percentages</p>
        <ModalImage src="value-processing/part2/value_processing3.png"></ModalImage>
        <p>and there's a distinction between using percentages for fonts or full length or distance measurements. Now again the percentage is technically not a unit but to make things easier we'll simply treat it as one, okay. So, in the header we have a declaration that says font size 150% and what that means is that the element will have a font size 150% larger than its parent element.</p>
        <ModalImage src="value-processing/part2/value_processing4.png"></ModalImage>
        <p>In this case the parent element is simply the HTML or the body with a font size of 16 and so the header will have 150 percent of that which gives us 24 pixels and that's how it works. Quite simple right.</p>
        <br>
        <p>
            Now for length expressed in percentages it works a bit different when we express a length
            measurements in percentages like a height a padding a margin or something else. The reference is always the parent elements with like in our example where the padding of 10% results in a used value of 100 pixels because a parent element has 1000 pixels of width and 10%
            of a thousand is of course 100.
        </p>
        <ModalImage src="value-processing/part2/value_processing5.png"></ModalImage>
        <p>So never forget that the parent’s width is the reference for percentage based calculations. Believe me that I learned this the hard way through a lot of confusion and experimentation.</p>
        <br>
        <p>Next up we have some font base relative units ems and rems.</p>
        <ModalImage src="value-processing/part2/value_processing6.png"></ModalImage>
        <p>Again, it's different to use ems for fonts or for lengths. So, both ems and rems are font based but the difference between them said ems use the parent or the current element as a reference while rams use the root font size as the reference.</p>
        <br>
        <p>Let's see how it works if we want to use ems for font sizes then the reference is simply the parents computed font size similar to what happens with percentages.</p>
        <ModalImage src="value-processing/part2/value_processing7.png"></ModalImage>
        <p>In our example, a 3em font size on the header child element results in 72 pixels simply because that's three times the parent’s font size which is 24 - so 3 times 24 makes 72.</p>
        <br>
        <p>Now for length it's just a bit different, the 2em padding on the header, since it's a length measurement it uses the font size of the current element as a reference.</p>
        <ModalImage src="value-processing/part2/value_processing8.png"></ModalImage>
        <p>We already know that's 24 pixels and so 2em will result in a 48-pixel padding.</p>
        <p>It's a subtle difference but an important one.</p>
        <br>
        <p>So, for fonts the reference is the parent, for length the reference is the current element. Now rem actually works the same way for both font sizes and lengths. It always just uses the root font size as a reference.</p>
        <ModalImage src="value-processing/part2/value_processing9.png"></ModalImage>
        <p>
            This means that the 10rem padding we have here will result in 160 pixels because the root font size is 16 and 10 times 16 is of course 160 pixels. So that's a big difference between ems
            and rems.
        </p>
        <br>
        <p>You may ask why should we actually size stuff with ems and rems if they are based on font size, it seems a bit strange right? The answer is that by doing so we can build more robust responsive layouts because just by changing font sizes we will automatically change length since they depend on a font size. That gives us a lot of flexibility and it's just a great technique.</p>
        <br>
        <p>Now finally we have two more relative units but they are really simple these two are based on the browser's viewport in are called vh and vw.</p>
        <ModalImage src="value-processing/part2/value_processing10.png"></ModalImage>
        <p>Basically 1 vh is just 1% of the viewport height and 1 vw is just 1% of the viewport width.</p>
        <ModalImage src="value-processing/part2/value_processing11.png"></ModalImage>
        <p>
            So when we specify a height of 90 vh this will simply translate to 90 percent of the current viewport height. Of course, in a specific example we know what the viewport height is but the
            browser who is painting the page knows about it and so it does these calculations when it's calculating the used values in pixels.
        </p>
        <ModalImage src="value-processing/part2/value_processing12.png"></ModalImage>
        <p>The same applies of course to vw so a width of 80 vw for example is just a percent of the viewports width. You probably already use the vh unit before right that one is really useful to build these nice hero sections with 100% of the viewports height - so that's where we use them a lot.</p>
        <h2>CSS Value Processing: What You Need To Know</h2>
        <p>All right let's not quickly summarize what we learned. So each CSS property has an initial value which is used if nothing else is declared in if there is no inheritance but we're going to talk more about inheritance in the next lecture.</p>
        <h3
            class="list-item"
        >Each property has an initial value, used if nothing is declared (and if there is no inheritance)</h3>
        <p>Browsers specify default font size for each page and that's usually 16 pixels and this is a user agent definition so it's not an initial value coming from the CSS specification.</p>
        <h3 class="list-item">Browsers specify a root font-size for each page (usually 16px)</h3>
        <p>Percentages and relative values are always converted to pixels in order for the CSS engine to be able to render the page on a screen.</p>
        <h3 class="list-item">Percentages and relative value are always converted to pixels</h3>
        <p>About percentages they are measured relative to their parents font size if you used to specify font sizes.</p>
        <h3
            class="list-item"
        >Percentages are measured relative to their parent’s font-size, if used to specify font-size</h3>
        <p>They are measured relative to their parents width if they're used to specify a length.</p>
        <h3
            class="list-item"
        >Percentages are measured relative to their parent’s width, if used to specify lengths</h3>
        <p>
            Now ems are measured relative to their parents font size if used to specify
            font sizes.
        </p>
        <h3
            class="list-item"
        >em are measured relative to their parent font-size, if used to specify font-size</h3>
        <p>They're measured relative to the current font size if they're used to specify length.</p>
        <h3
            class="list-item"
        >em are measured relative to the current font-size, if used to specify lengths</h3>
        <p>Next rems are always measured relative to the documents root font size.</p>
        <h3 class="list-item">rem are always measured relative to the document’s root font-size</h3>
        <p>And finally, vh and vw are simply percentage measurements of the viewports height and width respectively</p>
        <h3
            class="list-item"
        >vh and vw are simply percentage measurements of the viewport’s height and width</h3>
        <p>Okay and so this wraps up this lecture which was rather intense I know but still super important in my opinion.</p>
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
