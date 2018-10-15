<template>
	<div id="behind-the-scenes">
		<h2>What happens to CSS when we load up a webpage?</h2>
		<p>Now a bunch of stuff happen behind the scene of the internet until the browser can start loading up the web page we requested. Things like HTTP requests, figuring right domain name servers and what not. I won’t be focusing on all that though but instead what happens in the browser on a computer when the user opens up a page.</p>
		<br>
		<p>So, a good starting point is when the browser starts to load the initial HTML file.</p>
		<img class="page-image" src="@/assets/behind-the-scenes-diagram/step1.png" alt="">
		<p>It then takes the loaded HTML code and parses it, which basically means it decodes the code line by line.</p>
		<img class="page-image" src="@/assets/behind-the-scenes-diagram/step2.png" alt="">
		<p>From this process, the browser builds the so-called direct object model or DOM which basically describe the entire web document like a family tree with parents, children, and sibling elements.</p>
		<img class="page-image" src="@/assets/behind-the-scenes-diagram/step3.png" alt="">
		<p>This DOM is where the entire decoded HML code is stored. Now as the browser parses the HTML, it also finds the style sheets included in the HTML head and it starts loading them as well and just like the HTML.</p>
		<img class="page-image" src="@/assets/behind-the-scenes-diagram/step4.png" alt="">
		<p>CSS also is parsed but parsing of CSS is a bit more complex. I will talk about this in greater details later.</p>
		<img class="page-image" src="@/assets/behind-the-scenes-diagram/step5.png" alt="">
		<p>For now, let me tell you that during the CSS parsing phase there are 2 main steps. First off conflicting CSS declarations are resolved through a process known as cascade, the second step in the CSS parsing is to process final CSS values.
			<br>
			<br>Like for instance, converting a margin defined in percentage units to pixels. Imagine that we define a left margin as 50% but that 50% on a smart phone is completely different than the 50% on a large screen right. That’s why these percentages and other relative units can only be calculated on the user’s device in the parsing phase. I will talk more about this later.
			<br>
			<br>Now after all of this is done, the final CSS is also stored in a tree like structure called the CSS object model, similar to the DOM.
		</p>
		<img class="page-image" src="@/assets/behind-the-scenes-diagram/step8.png" alt="">
		<p>These together form the so-called render tree and with that we finally have everything we need to render the page.</p>
		<img class="page-image" src="@/assets/behind-the-scenes-diagram/step9.png" alt="">
		<p>Now to actually render the page, the browser uses something called the visual formatting model. This algorithm calculates and uses a bunch of stuff that you already know about like box models, floats, positioning, etc. I’ll talk about a little how this visual formatting model works later.</p>
		<img class="page-image" src="@/assets/behind-the-scenes-diagram/step10.png" alt="">
		<p>So finally, after the visual formatting model has done its work the website is finally rendered or painted to the screen and the process is finished.</p>
		<img class="page-image" src="@/assets/behind-the-scenes-diagram/step11.png" alt="">
		<p>Great! Now you know what happens behind the scenes of a page load in a browser.</p>
	</div>
</template>
