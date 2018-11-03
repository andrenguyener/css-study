<template>
  <div id="three-pillars-good-html-css">
    <h2>Three Pillars of Writing Good HTML and CSS</h2>
    <p>Let's talk about three important and fundamental principles that we need to constantly keep in mind if you want to build good modern websites or web apps with HTML and CSS. They call them the three pillars of writing good HTML and CSS.</p>
    <br>
    <p>All right, so the three pillars are responsive design, writing maintainable and scalable code, and carrying about web performance</p>
    <ModalImage src="3-pillars-good-html-css/pillars_good_html_css1.png"></ModalImage>
    <p>but let's look at them one by one.</p>
    <h2>Responsive Design</h2>
    <p>So the first principle is responsive design or responsive web design which simply means that we built one website that works beautifully across all screen sizes on all devices. Responsive design is absolutely a standard today and so there is no way you're going to build a non-responsive web site in 2018 or even later. Modern responsive design also includes stuff like responsive images, which is a huge topic itself, using correct units for things like font sizes or element dimensions, and it also includes having either a desktop first or a mobile first strategy.</p>
    <ModalImage src="3-pillars-good-html-css/pillars_good_html_css2.png"></ModalImage>
    <h2>Maintainable and Scalable Code</h2>
    <p>Next up we need to talk about writing maintainable and scalable code. Now this is actually more important for you to developer than for the final user of the website but it's still something we need to follow if we want to build a good website. Writing maintainable and scalable code means to write code that is clean, easy to understand, that supports future growth, and above all that is reusable for you as well as for other developers who might take on your project in the future. If we want to write maintainable and scalable code we need to care and think about our CSS architecture which is the way we organize our files, how we name our classes, and how we structure or markup in HTML. Now don't worry if all of this sounds weird or complicated to you because it's really not. What I want you to understand for now is that this stuff is really important if you want to step up your game and become a more professional CSS or front-end web developer in general writing maintainable code is something that all professional web developers care about a lot.</p>
    <ModalImage src="3-pillars-good-html-css/pillars_good_html_css3.png"></ModalImage>
    <h2>Web Performance</h2>
    <p>
      Alright and last but not least let's talk web performance. Making a website or app more performant means to make it faster and to make it smaller in size so that the user has to download less data. Now there are many things that affect performance and some factors don't have much to do with our code, but some of the things that we can do is to make as little HTTP requests as possible meaning that we should include as little as possible files in our HTML document, write as little code as possible, compress our code, and use a preprocessor. Now this is all great but maybe the biggest impact we can have on performance is to
      actually, reduce the use of images because images are usually what makes up by far the biggest part of the size of a website. We can do so by using only images that are really necessary for a website or app and also by compressing these images so that I use less bandwidth for the final user.
    </p>
    <ModalImage src="3-pillars-good-html-css/pillars_good_html_css4.png"></ModalImage>
    <p>Ok so these are the three pillars that we will have in mind, all the time while building projects. We have to always ask ourselves if the code we’re writing is responsive, if it's maintainable and scalable, and if it effects web performance.</p>
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
