<template>
  <div id="cascade-and-specificity">
    <Page title="The Cascade and Specificity">
      <p>
        So, I gave you a high-level overview about how HTML and CSS are processed in the browser.
        Now we're going to start to look at the CSS parsing phase because a lot of important stuff happens in this phase. Just before I start let's do a quick review of the official terms that we can find in a CSS rule just so that we're all on the same page.
      </p>
      <h2>Quick Review: CSS Terminology</h2>
      <img class="page-image" src="@/assets/cascade-specificity/css-terminology.png" alt="">
      <p>
        So, a rule consists of a selector and a declaration block, as you know, we use a selector to select one or more HTML elements that we
        want to style. Then in a declaration block is where we write the actual styles in order to style elements on our page. To do so we can write one or more CSS declarations in each declaration
        block. Each declaration consists of a CSS property and its corresponding value which is the value that we assign to a property. This value we assigned to a property is called the declared value.
        All right and that's it. Very simple so let's now talk about the first step of the CSS parsing phase.
      </p>
      <br>
      <p>
        First off, remember that in the parsing phase the first step is to resolve conflicting CSS declarations and the second step is to process the final CSS values. So let's start with step 1
        which is the Cascade and let's define exactly what it is.
      </p>
      <h2>The Cascade (The C in CSS)</h2>
      <p>So, the Cascade is the process of combining different style sheets and resolving conflicts between different CSS rules and declarations when more than one rule applies to a certain element. As you probably already know a declaration for a certain style property like font size can appear in several style sheets and also several times inside one single style sheet.</p>
      <img class="page-image" src="@/assets/cascade-specificity/what-is-cascade.png" alt="">
      <p>
        Now CSS can also come from different sources. The most common one is the CSS that we the developers write. These declarations that we put in our style sheets are called the author declarations. Another source can be the user declarations which is CSS coming from the user for instance when the user changes the default font size in the browse and that is user CSS. Last but not
        least there are the default browser declarations, for instance if we put an anchor tag in our HTML for a link and then don't style it at all, it will usually be rendered with blue text and underlined. Right that's called the user agent CSS because it's set by the browser.
      </p>
      <br>
      <p>
        So, the Cascade combines the CSS declarations coming from all these different sources, but how does the Cascade actually resolve conflicts when more than one rule applies? Well what it does is look at the importance at the selector specificity and the source order of conflicting declarations in order to determine which one takes precedence.
        Here's how that works.
      </p>
      <img class="page-image" src="@/assets/cascade-specificity/css-order1.png" alt="">
      <p>
        First off, the Cascade starts by giving the conflicting declarations different importances based
        on where they are declared, so based on their source. The most important declarations are user declarations marked with the important keyword. You already know the important keywords in
        CSS, right? If not I'm going to give you an example in a second. Next the second most important declarations are the author declarations marked with important. Third the normal author declarations, then the normal user declarations, and finally the least important ones are the default browser declarations (which actually makes a lot of sense so that we can easily overwrite these declarations coming by default from the browser).
      </p>
      <img class="page-image" src="@/assets/cascade-specificity/css-order2.png" alt="">
      <p>But we should better look at an example, here right?</p>
      <img class="page-image" src="@/assets/cascade-specificity/button-ex1.png" alt="">
      <p>
        But we should better look at an example, here right? Here we have two rules in which both apply to the button class and we have two conflicting declarations about the background color.
        These are both author declarations but if you look closely in the first rule, the declaration with the red background color contains the important keyword and therefore this declaration is more important as we can see from the table.
      </p>
      <img class="page-image" src="@/assets/cascade-specificity/button-ex2.png" alt="">
      <p>
        This means that this is a declaration
        that gets proceedings and so we see that our button is indeed red. Great!
      </p>
      <br>
      <p>
        Now a lot of times we will just have a bunch of conflicting rules in our author style sheets without any important keyword. That is actually the most common scenario and in this case
        all the declarations have the exact same importance. Now what happens in this case?
        What the Cascade does if this is the case is to calculate and compare the specificities of the Declaration selectors and this is how it works.
      </p>
      <h2>Specificity</h2>
      <img class="page-image" src="@/assets/cascade-specificity/css-order3.png" alt="">
      <p>
        Inline Styles have the highest specificity followed by IDs then classes, pseudo classes and attribute selectors, and finally the least specific element and pseudo element selector. So, when we have conflicting declarations with the same importance, we calculate their selector specificity based on the priorities. Let's see how we actually calculate specificities with a
        small example.
      </p>
      <img class="page-image" src="@/assets/cascade-specificity/button-ex3.png" alt="">
      <p>
        First of all these declarations have the same importance because they're all author declarations. So let's calculate their selectors specificities in order to find out if the background color will be either red, purple, blue, or green and this is how we do it. The specificity
        is actually not just one number but one number for each of the four categories: Inline styles, IDs, classes, pseudo elements and attributes, and finally elements. For each of these we count the number of occurrences in the selector. Simple as that.
      </p>
      <img class="page-image" src="@/assets/cascade-specificity/button1.png" alt="">
      <p>So here in selector one we don't have any inline styles of course because an inline style has to be written in the HTML, which is not the case here. So, it's a 0, we also have no ID here so it's again a 0 but we do have one class, the button class, and so for the classes category we have a 1 and finally there's no element selector here so 0 for that one as well.</p>
      <img class="page-image" src="@/assets/cascade-specificity/button2.png" alt="">
      <p>That's it, this selector specificity is 0, 0, 1, 0. Great, let's now compare it to the others.</p>
      <br>
      <p>
        The next one is also not an inline style. So, 0 for the first one. Now here we actually have an ID selector for the #nav ID right. So it's a 1 for the ID. We also have two classes .container and
        .button, so it's a 2 for the classes category. Finally, there are also two element selectors here; the nav element and the div element which means that it's also 2 for the elements category.
      </p>
      <img class="page-image" src="@/assets/cascade-specificity/button3.png" alt="">
      <p>So finally, the specificity to this selector is 0, 1, 2, 2 which is actually a highly specific selector.</p>
      <br>
      <p>Selector number three is very simple; it's just an element selector and so the specificity is 0, 0, 0, 1.</p>
      <img class="page-image" src="@/assets/cascade-specificity/button4.png" alt="">
      <p>
        Now the last one, selector number four. First again we have the #nav ID, so it's 1 for the ID. Next we have a class, the button class and also a pseudo class, which is hover which makes it 2 for the classes category in total. Since there's also one element selector the
        final specificity is 0, 1, 2, 1. Make sense?
      </p>
      <img class="page-image" src="@/assets/cascade-specificity/button5.png" alt="">
      <p>You're probably wondering well this is all great but how do we actually use these numbers to find out which of the selectors applies?</p>
      <br>
      <p>We start to look at the numbers from left to right starting with the most specific category, the inline styles. If there is the selector with one it wins against all the other selectors because this is the most specific category. Well this is not the case here, so let's move on to the IDS. We see that selector two and four have a 1 here while the others have 0 so the ones with 0 are out of the game because they are less specific than selectors two and four, the ones with the IDS.</p>
      <img class="page-image" src="@/assets/cascade-specificity/button6.png" alt="">
      <p>Okay, now since both selectors have a one in this category we have to move on and check the classes. They both have a 2 in this category so it's still a tie between them. Finally, in the elements category the selector two as a 2 while the selector for has only 1. We have a winner!</p>
      <img class="page-image" src="@/assets/cascade-specificity/button7.png" alt="">
      <p>
        Here the selector number two is the most specific selector of all and so it will
        give our button a purple background. The value of the winning declaration is called the cascaded value because as a result from the Cascade. So, we start with a bunch of declared values in this case red, purple, blue, and green and one of them wins and becomes the cascaded value which is in our example purple.
      </p>
      <br>
      <p>
        Now imagine selector four also add two elements then both selectors two and four will have the exact same specificity, right? So, what happens in this case, well if they're still a tie at this
        point then the last CSS declaration written in the code is the one that will apply.
      </p>
      <img class="page-image" src="@/assets/cascade-specificity/css-order4.png" alt="">
      <p>
        So again, if everything is equal; if all the declaration selectors have the same specificity then it's simply the
        last declaration that will be used to style the selected element. That’s it.
      </p>
      <h2>Cascade and Specificity: Important Takeaways</h2>
      <p>Let me give you a quick summary and overview of the most important things we just learned, this is essentially what you should really retain. First off, we learned that CSS declarations marked with !important keyword have the highest priority when multiple declarations are in conflict.</p>
      <h3>CSS declarations marked with !important have the highest priority</h3>
      <p>
        But, you should only ever use important as a last resource. If something doesn't work the way you think it should then look at your selector specificities and figure out what's going on. That's always better than just adding !important which may solve the problem in an easier way but will cause you problems in the long run.
        Remember to think about maintainable code; well, thinking about specificities and using !important only as the last resource is one of the things that will make your code more maintainable for the future.
      </p>
      <h3>But, only use !important as a last resource. It's better to use correct specificities -- more maintanable code</h3>
      <p>
        The next thing to remember is that inline styles that you
        write in your HTML will always have priority over styles you write in an external stylesheet.
        But, since using inline styles isn't such a good practice anyway this one isn't all too important.
      </p>
      <h3>Inline styles will always have priority over styles in external stylesheets</h3>
      <p>Next a selector that contains even only one ID is more specific than one with a thousand classes. So, if you want to be really specific, use an ID.</p>
      <h3>A selector that contains 1 ID is more specific than one with 1000 classes</h3>
      <p>In the same way, a selector with one class is more specific than one with a thousand elements of course.</p>
      <h3>A selector that contains 1 class is more specific than one with 1000 elements</h3>
      <p>
        One thing that is really important to note is that the universal selector * has no specificity value and so at 0, 0, 0, 0.
        Which means that all selectors have a precedence over it.
      </p>
      <h3>The universal selector has * has no specificity value (0, 0, 0, 0)</h3>
      <p>
        Another thing that you should note is that it's best to always rely more on specificity than on
        the order of selectors. This way if you someday rearrange all your CSS code you won't have any surprises which could mess up your entire code. This again makes your code a lot easier to maintain which is hugely important.
      </p>
      <h3>Rely more on specificity than on the order of the selectors</h3>
      <p>
        Now there's actually one case where you do need to
        worry about the order of selectors. That's when you're using external third-party style sheets. Imagine for instance that you include something like a reset style sheet which defines a couple of styles for common elements. In this case of course you want your stylesheet to be able to overwrite the third-party styles, so your own style sheet should be the last one to be included in the HTML. In this case the order is actually hugely important.
      </p>
      <h3>But, rely on order when using 3rd party stylesheets - always put your author stylesheets last</h3>
      <p>All right that's actually all there is to know about the Cascade and specificity in CSS so if you ever wondered what the cascading word in cascading style sheets actually means now you know it. Great right and the best part is that understanding all of this will now allow you to write better cleaner and more maintainable CSS code.</p>
    </Page>
  </div>
</template>

<script>
import Page from "@/components/Page.vue";
export default {
  components: {
    Page
  }
};
</script>
