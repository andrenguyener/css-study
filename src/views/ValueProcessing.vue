<template>
    <div id="value-processing">
        <h2>How CSS Values Are Processed</h2>
        <p>
            All right welcome back to yet another theory lecture about how CSS works behind the scenes. Remember that we were talking about parsing CSS right. First, we talked about the Cascade and so now it's time to talk about our values are processed in a CSS parsing phase. We're also going to look at the most commonly used CSS units like percentages, em, rems, vh, and more in order to learn how they are actually calculated. But first off, you may ask why this is even important to learn? It is important for a lot of reasons; first because each time you use the unit other than pixels like rem or vh or some other relative unit, you need to know that it will ultimately be converted to pixels and you also want to know how that happens. Knowing
            this stuff will help you predict and control better which property takes which value in the end. So, it's just good to know how all of these pieces fit together to render a final website in the end.
        </p>
        <ModalImage classProp="small-image" src="value-processing/value_processing1.png"></ModalImage>
        <p>So, we will analyze how these five CSS declarations built a small element here. In particular how exactly the declared values are processed in six different steps starting from the declared value all the way to the final actual value.</p>
        <ModalImage src="value-processing/value_processing2.png"></ModalImage>
        <p>We're going to analyze the width padding and font size in order to see what's going on here.</p>
        <br>
        <p>Let's start with the paragraphs with which you see has two declared values, 100 pixels, from the p selector and 66% from the amazing class selector.</p>
        <ModalImage src="value-processing/value_processing3.png"></ModalImage>
        <p>
            So, these are our declared values - they are actually conflicting. What is used to determine which one will apply? That's right it's the Cascade and in this case, it's quite simple because
            the amazing class selector is more specific than the P element selector. This means that the width of 66 will be applied and it is therefore our cascaded value.
        </p>
        <ModalImage src="value-processing/value_processing4.png"></ModalImage>
        <p>Now of course you don't need to know every single technical name I'm going to show you here but if you ignore the jargon and the more technical words then you will see how this is actually all quite simple.</p>
        <br>
        <p>All right so next up in the sequence, there's something called the specified value in the official CSS specification.</p>
        <ModalImage src="value-processing/value_processing5.png"></ModalImage>
        <p>This one is the default value of a certain CSS property in this case it's not really relevant because we have a cascaded value already but we'll come back to this later.</p>
        <ModalImage src="value-processing/value_processing6.png"></ModalImage>
        <p>
            Next there's a computed value in this step values with relative units are converted to pixels
            so that they can be inherited but more on inheritance later. Also, CSS keywords like orange, auto, bolder, and a lot more are computed and replaced here in this step.
        </p>
        <br>
        <p>Here in this case we have a percentage value which is technically not a unit and so nothing happens in this step.</p>
        <ModalImage src="value-processing/value_processing7.png"></ModalImage>
        <p>
            Next up it's a so-called used value, in this calculation step the CSS engine uses the rendered layout to figure out some of the remaining values. For example, percentage values that depend on the layout and that's actually the case here because the 66% that we specified is in relation to its parent element and so the parser needs to know that width in order to calculate the
            paragraphs width.
        </p>
        <ModalImage src="value-processing/value_processing8.png"></ModalImage>
        <p>The sections with defined is 280 pixels and so 66% of that is 184.8 pixels and this is now or used value. Now technically this step five and the next one only happened in the rendering phase of the page but that's not really relevant in order to understand this logic.</p>
        <ModalImage src="value-processing/value_processing9.png"></ModalImage>
        <p>Now browsers usually cannot really display 184.8 pixels that's just way too specific and so usually a value like this is simply rounded in this case to just 185 pixels. That is after all these calculation steps, the so-called actual value which is now ready to be used in the layout and so the actual value as we seen here is usually obtained by considering the browser and device restrictions. Cool, so now you know how this works behind the scenes of CSS. Awesome that's great progress.</p>
        <ModalImage src="value-processing/value_processing10.png"></ModalImage>
        <p>
            Let's now take a look at the padding property for the paragraph now. You're probably thinking there is no padding property there right and it's actually true that we didn't declare it but it still has to have a value. Okay, that's because in each element on the page each and every CSS property needs to have a value even if we don't even declare it at all. So for padding we have no declared value and also no cascaded value, but we do have a specified value and that's
            because each CSS property has something called an initial value which is simply the value used if there is no cascaded value.
        </p>
        <ModalImage src="value-processing/value_processing11.png"></ModalImage>
        <p>Basically, if we don't declare a value and if neither the browser nor the user define a value then the initial value will be used. Actually, inheritance also play the role here but let's leave that for later. Okay, now different properties have different initial values of course and for padding it's zero pixels which makes a ton of sense actually because if we declare no padding that should probably mean that we don't want any right and so it's zero. That's it there's no more calculations to do because it's already an absolute unit and so the computed used and actual values are all just zero pixels.</p>
        <ModalImage src="value-processing/value_processing12.png"></ModalImage>
        <p>All right now about the root font size this means the overall font size of a document we didn't define it anywhere right so again there is no declared value.</p>
        <ModalImage src="value-processing/value_processing13.png"></ModalImage>
        <p>However, this is different from the padding property that we looked at before that's because for the font size the browser usually has a default value of 16 pixels.</p>
        <ModalImage src="value-processing/value_processing14.png"></ModalImage>
        <p>
            Remember how we said earlier that CSS could come from different sources well in this case the
            font size is a user-agent declaration and therefore the result of the Cascade is these 16 pixels that the browser has declared for the font size. So, this is our cascaded value. Again there's no more calculations needed and therefore 16 pixels is also the used value.
        </p>
        <ModalImage src="value-processing/value_processing15.png"></ModalImage>
        <p>Next let's analyze the sections font size and now we actually do have a value of 1.5 rem.</p>
        <ModalImage src="value-processing/value_processing16.png"></ModalImage>
        <p>Remember that rem is a relative unit and so it needs to be converted to pixels by the engine so the cascaded and specified values are still 1.5 rem but the computed value is 24 pixels.</p>
        <ModalImage src="value-processing/value_processing17.png"></ModalImage>
        <p>Why is that you may ask? It seems a bit random right it's because the rem unit is always relative to the root font size which is 16 pixels. In this example, as we saw before and therefore 1.5 rem is 1.5 times 16 which is 24.</p>
        <ModalImage src="value-processing/value_processing18.png"></ModalImage>
        <p>All right and so 24 pixels is our final actual value as well.</p>
        <br>
        <p>
            Another, last one the font size of the paragraph. Once more, looking at the code we can't find a font size so how come the text still has a font size? Well in this case it has no
            default and it also has no initial value but it's a mechanism called inheritance.
        </p>
        <ModalImage src="value-processing/value_processing19.png"></ModalImage>
        <p>Now I'm going to talk in great detail about inheritance a bit later but what you need to know is that some properties like the ones related to text such as font size inherit the computed value of their parent elements. It works like this because it's actually extremely useful - imagine you'd had to specify the font size on each and every element. It wouldn't be really practical, right? So we just need to define it on some parent and the children will then inherit it unless we declare something else of course. Again, we talked about inheritance a bit later but this is the most important lesson about it. All right and so these 24 pixels we inherited from the section div are our specified value and of course it's all the same down to the actual value.</p>
        <ModalImage src="value-processing/value_processing20.png"></ModalImage>
        <p>Whoo, wow this was a lot to take in. it's great that you're still with me at this point.</p>
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
