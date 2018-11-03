<template>
    <div id="css-architecture">
        <p>This is once again an extremely important tutorial because we're going to talk about CSS architecture, how we should think about layouts, and how we should markup or code in a professional way.</p>
        <h2>The Think – Build – Architect Mindset</h2>
        <p>Remember that we want code that is clean, modular, and reusable that makes it easy to add more and more features to our web page or app if it needs to grow.</p>
        <ModalImage src="css-architecture/css_architecture1.png"></ModalImage>
        <p>Because of all of these reasons we cannot just dive into a new project and leave architecture behind just as a second thought. Instead we need to take important decisions concerning or HTML and CSS code right from the beginning of the project. We need a good strategy here, a good mindset, and from my experience the best strategy is something I like to call the think built architect mindset.</p>
        <ModalImage src="css-architecture/css_architecture2.png"></ModalImage>
        <p>We need to think about the layout of our web page or web app before we actually write the code. After having the layout figured out we should build it in HTML and CSS with a consistent structure for naming your classes. Also at the same time we should create a logical CSS architecture by using multiple files and folders.</p>
        <h2>Thinking About the Layout</h2>
        <ModalImage src="css-architecture/css_architecture3.png"></ModalImage>
        <p>
            Starting with the think part, I like to use something called component driven design which is actually a principle that is used across all software development. In CSS with component driven design we try to divide our page into modular components. So what are these components?
            <strong>Components are the building blocks that we use to construct our interfaces</strong>so we can basically think of our interface as a collection of components
            <strong>held together by the over a layout of the page.</strong>Probably the most important thing about components is that they should be
            <strong>reusable across a project and also between different projects</strong>that's really important. So, you can build a library of your components and then reuse them across project which will speed up your development. Plus, components should be
            <strong>independent so that we can use them completely on their own</strong>no matter where on the page. What this means is the components should not depend on their parent elements. Once again all of this will make your CSS code easier to maintain and to scale if necessary.
        </p>
        <ModalImage src="css-architecture/css_architecture4.png"></ModalImage>
        <p>Now of course these are rather general rules and it can be broken if it's directly necessary as long as you have a good reason.</p>
        <br>
        <p>All right and just as a side note this whole thinking component strategy is actually a bit similar to Brad Frost's super popular atomic design philosophy.</p>
        <ModalImage src="css-architecture/css_architecture5.png"></ModalImage>
        <p>According to atomic design the smallest units on a page or atoms which together form molecules which combine together from organisms. These organisms can be seen as our components in some situations.</p>
        <h2>Building with Meaningful Class Names</h2>
        <p>Alright so after thinking about our design we need to code that design using HTML and CSS and in this step, it's important to have a consistent strategy - a structure for naming our classes.</p>
        <ModalImage src="css-architecture/css_architecture6.png"></ModalImage>
        <p>
            There are many approaches for naming classes things like object-oriented CSS or SMACSS but the one I like the most is BEM, which is becoming more and more popular by developers around the world. It's a nice clean system for marking up our layouts. So BEM stands for
            <strong>block element modifier</strong>and this is how class names usually look like using the BEM methodology
        </p>
        <ModalImage src="css-architecture/css_architecture7.png"></ModalImage>
        <p>
            So if you've ever seen in code that looks like this example here now you know that it uses the BEM system. So first in BEM a
            <strong>block is a standalone component that is meaningful on its own.</strong>What this means is that the components we defined in the last slide are the blocks in BEM. In this example the recipe is a block and also the button because both of them are standalone components that can be reused anywhere in the project.
        </p>
        <ModalImage src="css-architecture/css_architecture8.png"></ModalImage>
        <p>
            Note how these two blocks are actually nested so the bottom block is inside the recipe block and that's perfectly normal and acceptable. Next an
            <strong>element is a part of a block it has no meaning on its own.</strong>
        </p>
        <ModalImage src="css-architecture/css_architecture9.png"></ModalImage>
        <p>
            In our example that could be the info panel or the stats box, but there are lots of other elements there. But again if we take one of these elements out of the block then they wouldn't be useful at all. They wouldn't have any meaning. Now what's important to note here is how the recipe block still appears in all the class names within the block. Do you see that? That's why we have the word recipe all over the place in this HTML code. Also notice how this create selectors with really low specificities because we always use classes and they are never nested and so they always have a pretty low specificity. This is one of the big reasons why BEM is so widely used for easy to maintain and reusable code. Alright and last we have the modifier. The modifier is a flag that we can put on a block or an element in order to make it
            <strong>different from the regular blocks or elements to make a different version.</strong>
        </p>
        <ModalImage src="css-architecture/css_architecture10.png"></ModalImage>
        <p>Let's say in our example we have a modifier to make the button round. For instance there may be some rules for all buttons and then we use a modifier to make a more specific, a different button, and in this case a round one. Now try to read that entire HTML markup I just showed you okay because just by reading the mark up with these class names in it, you can instantly see how all the elements are related and what each of them does. Now imagine this with a whole page and effect would become even better.</p>
        <br>
        <p>All right and just to finish this part I know that many people really hate BEM because they say it looks ugly and it's hard to write. Yeah, I agree that might look a bit funny actually and that you might have to type a bit more code but believe me that is really worth it and you should absolutely try it.</p>
        <h2>Architecting with Files and Folders</h2>
        <p>Now the last part of our strategy which is architecting CSS and remember that by that I mean to create a logical folder and file structure for our CSS to live in.</p>
        <ModalImage src="css-architecture/css_architecture11.png"></ModalImage>
        <p>Once again there are different options here like the ITCSS method or SMACSS, but I like to use something called the 7-1 pattern introduced by Hugo Giraudel. Okay so the 7-1 pattern is extremely simple all it means is that we have seven different folders where we put partial SASS files and then one main SASS file in which we import all of our partial files into one final compiled CSS stylesheet.</p>
        <ModalImage src="css-architecture/css_architecture12.png"></ModalImage>
        <p>
            Of course, when I say SASS here I could mean any other CSS preprocessor because all of them allow to implement pattern. So, the seven folders I mentioned that are used in this method are the base folder (where we put the basic project definitions), the components folder (where we have one file for each component), the layout folder (where we defined over a layout of the project), the pages folder (where we have styles for specific pages of the project), the themes
            folder (if you want to implement different visual themes), the abstracts folder (where we put code that doesn't output any CSS such as variables or mix-ins), and finally the vendors folder (where all third-party CSS goes)
        </p>
        <ModalImage src="css-architecture/css_architecture13.png"></ModalImage>
        <p>That's just a big overview. Now we don't always need to use all of these folders and that's going to depend on the size and the scope of the project.</p>
        <br>
        <p>Alright and that's it about CSS architecture BEM and component based design. I hope this made sense to you and that you can see and appreciate the huge value that these techniques can add to our workflow I'm sure that putting this into practice will help with that.</p>
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
