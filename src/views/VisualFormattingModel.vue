<template>
    <div id="visual-formatting-model">
        <h2>How CSS Renders a Website</h2>
        <p>Do you still remember the diagram that I showed you in the beginning about how CSS works behind the scenes?</p>
        <ModalImage src="behind-the-scenes-diagram/step11.png"></ModalImage>
        <p>This one right so we've been talking a lot about the parsing phase but now it's time to move on to the website rendering phase.</p>
        <br>
        <p>
            This tutorial should give you a pretty good overview about how the visual formatting model
            works so that you can write your code in a way that makes more sense to you. What this tutorial will do is maybe not so much to give you new tools but it will summarize a lot of the CSS that you actually already know and put it in a more meaningful context.
        </p>
        <br>
        <p>So the CSS visual formatting model is an algorithm that calculates boxes and determines the layout of these boxes for each element in the render tree in order to determine the final layout of the page.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model1.png"></ModalImage>
        <p>This model is one of the fundamental concepts of CSS now in order to do this the algorithm takes into account factors like dimensions of the boxes, which are calculated by the box model, the box type which can be inline block or inline block, the positioning scheme which includes concepts like floats, and absolute, or relative positioning, stacking context, the other elements that are present in the render tree, such as siblings or parents, and finally external information such as a current viewport size, dimensions of images, or other factors. By putting all these factors together, the browser figures out how the final website will look for the user.</p>
        <br>
        <p>Let's not look at the first four of these factors in more detail and that starts with a box model.</p>
        <h2>1. The Box Model</h2>
        <p>The box model is without a doubt one of the most fundamental parts of CSS. It's something you really have to master in order to layout a web page. the box model is one of the factors that define how elements are displayed on a web page and how they are sized.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model2.png"></ModalImage>
        <p>According to the box model each and every element on a web page can be seen as a rectangle box. In each box can have a width, a height, a padding, margins, and a border. note that they are all optional so they can be boxes with no margins or nor paddings at all.</p>
        <br>
        <p>Let’s break down the box model to see how it works.</p>
        <br>
        <p>First the content of a box is where all the text images or other content that we specify go.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model3.png"></ModalImage>
        <p>We can easily define its height and width using the corresponding CSS properties.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model4.png"></ModalImage>
        <p>Next the padding is a transparent area around the content but still inside of the box we use paddings to generate white space inside of a box and we can define the padding by specifying the padding property in CSS.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model5.png"></ModalImage>
        <p>Next, we can specify a border for a box and that border goes around to padding and the content.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model6.png"></ModalImage>
        <p>Similar to the padding we have the margin but instead of being inside the box, the margin is widespread that's actually outside of the box itself. So, we can think of margin as the space between boxes. For example, if we want some space between two elements we will define their margin properties in CSS.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model7.png"></ModalImage>
        <p>
            Finally, there's something called the fill area remember how the text content in images go inside the content box the same that's actually not apply for background images or the background color of box. These properties will be applied not only to the content box but
            to the entire fill area which also includes the padding and the border but not the margin.
        </p>
        <h2>1. The Box Model: Heights and Widths</h2>
        <p>All right, so let's now talk about Heights and width in the default box model. As I mentioned we can specify the height and the width of an element. Now if we choose not to specify the height the width of a certain element the visual formatting model will just use the content of the box to determine its size. So, let's now take a look at how the default box model calculates heights and width of block level boxes.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model8.png"></ModalImage>
        <p>
            The width of a box as we will see in a final layout is defined by the right border plus the
            right padding plus the specified with plus the left padding plus the left border and the same logic of course applies for the height of the box. But let's look at a quick example to make this clearer; suppose we define the height for element of 100 pixel and the padding to the top and bottom of 20 pixels so the final height is displayed on a website would be 140 pixels. This means that whenever we define a width or a height of a box the padding and border yet added to what we defined, but that doesn't sound very practical right.
        </p>
        <br>
        <p>The solution to fix the problem is to use the box sizing property with the value of border box.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model9.png"></ModalImage>
        <p>If we set box sizing to border box the height and the width will be defined for the entire box including the padding and the border and not just for the content area. What this means at the same time is that the paddings and borders that we specify will of course we'd use the inner width of the content area instead of adding them to the total height or width of an element.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model10.png"></ModalImage>
        <p>All right, if we look at the height and width calculations now in this case the actual total width of a box is equal to the specified width the same goes for the height. If we now define some paddings or borders they will not get added to the dimensions of the box which makes our lives so much easier. If we look at our example now the final height will of course be 100 pixels just as we specified for the height of the element.</p>
        <h2>2. Box Types: Inline, Block-Level, and Inline-Block</h2>
        <p>We looked at the box model and how height and width of boxes are calculated. But this applies mainly to block level boxes which is one of the different types of boxes in CSS. Let's look at the three most common and most important box types and how different box types determine how boxes are laid out on a page. Let's start with the block level box or element - we can say both.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model11.png"></ModalImage>
        <p>First off the type of a box is always defined by the display property. In the case of the block-level element the display property is usually set to block but please note that the values flex for a flexbox layout list item and table also produce block level boxes. Now all HTML elements have a default display property and elements such as paragraphs or divs which are usually formatted visually as blocks, if they are display property set to block by default we can always of course change this property manually which can be very useful in some cases. Okay, so being a block level box this box will always occupy as much space as possible which is usually one of the percent of its parent width and create line breaks after and before it- meaning that blocks are formatted vertically one after another.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model12.png"></ModalImage>
        <p>Now about inline boxes they are basically the opposite of block level boxes because their content is distributed in lines meaning that an inline box only occupies the space that its content actually needs. Therefore, they also don't cause line breaks after or another them but instead they just sit inside their block level parent element. Now about the box model things work a bit different in inline boxes. First the height and width property do not apply which means that we cannot use these properties here and second you can only specify horizontal padding's and margins on inline elements so only on the left and on the right side. That's the way the box model works on inline elements, so of course this has some serious limitations and in order to overcome them there's another type of box and that's the inline block box.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model13.png"></ModalImage>
        <p>Now inline block boxes are technically also inline boxes but which simply work as a block level box on the inside. Since they are technically inline elements they also use up only their content space and cause no line breaks, but since they work as a block level box on the inside the box model applies to them just like in the regular block level boxes. All we need to do in order to set an element to an inline block is to set its display a property to inline-block and that's it very easy. It's really important that you understand the difference between these three type of boxes so we can use them as needed in different situations.</p>
        <h2>3. Positioning Schemes: Normal Flow, Absolute Positioning and Floats</h2>
        <p>Okay, next up we have positioning schemes there are three of them in CSS; the normal flow floats and absolute positioning.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model14.png"></ModalImage>
        <p>I'm sure you're already familiar with floats and absolute or relative positioning and so this is more to bring all of these properties together into a bigger context.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model15.png"></ModalImage>
        <p>The normal flow is what happens to an element if you don't do anything to it at all. If you don't float it and if you don't use position:absolute on it. If you use position:relative then the element is still in a normal flow and what the normal flow means is that the elements are simply laid out on the page in the natural order in the code.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model16.png"></ModalImage>
        <p>The next positioning scheme is when you use floats the flow property causes an element to be completely taken out of the normal flow and shifted to the left or right as far as possible until it touches the edge of its containing box or another floated element. When this happens texts and inline elements will wrap around the floated element, also when an element is floated its container will not adjust its height to the element which sometimes can be problematic. The usual solution to this is to use clear fixes; which I'm sure you have used when building layouts using floats right.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model17.png"></ModalImage>
        <p>Then finally there's absolute positioning and just like with floats when you set the position property to absolute or also to fixed the element is taken out of the normal flow. Now what's different here is that with absolute positioning the element has no impact on surrounding content or elements at all. In fact, it can even overlap them so if we want to position an absolutely positioned element on a page, we use the CSS properties top, bottom, left, and right to offset it to its relatively positioned container. Now as I mentioned an absolutely positioned element can overlap other elements occupying the same space and how do we solve this? Well CSS solves it for us actually using something stacking context. There's one piece left in the puzzle of the visual formatting model, stacking contexts.</p>
        <h2>4. Stacking Contexts</h2>
        <ModalImage src="visual-formatting-model/visual_formatting_model18.png"></ModalImage>
        <p>Stacking contacts are what determine in which order elements are rendered on the page. A new second context can be created by different CSS properties where the most widely known is Z and X, but there are other properties that also create new stacking contexts. now stacking contexts are like layers to form a stack. Layers on the bottom of the stack are painted first and elements higher up the stack appear on top- overlapping the elements below them.</p>
        <ModalImage src="visual-formatting-model/visual_formatting_model19.png"></ModalImage>
        <p>In this example, we have three stacking contexts because each element used the z-index property on an either relatively or absolutely positioned element and that's one way of creating a new stack in context. now between these elements the one with the higher the index appears on top and the one with the lowest index appears at the bottom. Now a common misconception is that only the z-index property creates new stacking contacts but that's not the case. An opacity value different from 1, a transform, a filter, or other properties will also create new stacking context that's why sometimes even with the Z and X set on a positioned element the stacking order doesn't work as expected.</p>
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
