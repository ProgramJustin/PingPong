

											Jquery 


//jQuery is a library, or set of helpful add-ons, to the JavaScript programming language. 

//An HTML document is structured according to the Document Object Model, or DOM. It's by interacting with the DOM that jQuery is able to access and modify HTML.The DOM consists of every element on the page, laid out in a hierarchical way that reflects the way the HTML document is ordered. Remember how we could think of the HTML document as a tree? You can think of the DOM the same way. Just as with an HTML document, elements in the DOM can have parents, children, and siblings.

//Just like the CSS div refers to the HTML element <div>, the jQuery 'div' refers to the same HTML element <div>. You can think of the element name passed to jQuery as identical to the CSS element, only wrapped in quotes. So, for instance, you could target anything of class button with...


$(document).ready(function() {

//the id 'green' is selected and fades out as soon as the page loads.

    $('#green').fadeOut(1000);
});




								Linking Your HTML and JavaScript Files

//Great! Now we need to link our HTML page to our jQuery script so our jQuery magic will affect our HTML.

	//Just like we need a <link> tag to connect our HTML and CSS, we need a <script> tag to connect our HTML and jQuery. The tag looks like this:

<script type="text/javascript" src="script.js"></script>







								Functions, Part I: $(Document).Ready

//Functions are the basic unit of action in jQuery. The main entry point of most jQuery applications is a block of code that looks like this:

$(document).ready(function() {
    Do something
});



$(document) //is a jQuery object. The $() is actually a function in disguise; it turns the document into a jQuery object.
    
.ready() //is a type of function; you can think of it as sort of a helper that runs the code inside its parentheses as soon as the HTML document is ready.
 function(){} //is the action that .ready() will perform as soon as the HTML document is loaded. (In the above example, the Do something placeholder is where those actions would go.)








									mouseenter()

//it produces a change when your mouse enters a given HTML element. For example,

$(document).ready(function() {
    $('div').mouseenter(function() {
         $('div').hide();
    });
});	

//would hide every <div> on the page as soon as you mouse over one. (We'll find out how to affect just one <div> among many in the next lesson.) For now, we only have one <div>, so this setup is okay.

//Instead of hide(), however, we'll place fadeTo() inside mouseenter(). fadeTo() takes two arguments, or inputs, between its parentheses, separated by a comma: the speed at which to fade, and the opacity (or transparency) to fade to. For example,

fadeTo('fast', 0.25); //would quickly fade the target element to 25% of its original opacity, making it very light-colored.

					

									mouseleave()


//You might have guessed that jQuery includes a mouseleave() action.


$(document).ready(function(){

    $('div').mouseenter(function() {
    $('div').fadeTo('fast', 1);
    });
 $('div').mouseleave(function(){
 $('div').fadeTo('fast', 0.5); //fades the element back to 50% opacity

 });
});





									Functions, Part II: Functions Explained



//A function is made up of three parts: the function keyword, any inputs that function takes (they go between the ()s and are separated by commas if there are more than one), and whatever actions the function should perform (these go between the {}s). The general form is:

function(input1, input2, etc) {
    Do a thing
    Do another thing
    Do yet another thing!
}

//One of the nice things about jQuery is that you can give a function just about anything as an input—even another function! That's why .ready() can take function between its parentheses; it's taking a function as input.





										$p vs $('p')



var $p = $('p');

//There's a subtle difference between the two.

//$p is just a variable name. There is no magic associated with the $ in $p; it's just a convention for saying, "hey, this variable contains a jQuery object." We could call $p anything we want: $paragraph, paragraph, space_cows, whatever! It's just helpful for people reading our code to see $p, since this is a concise way of saying "hey, there's a 'p' jQuery object in here."

//$(), on the other hand, is magic. This is the function in disguise that creates jQuery objects. If you're making a jQuery object, you gotta use it!


										Compound Selectors

//To support more sophisticated selectors, CSS supports combining simple selectors in a chain, separated by blank spaces. This allows you to filter out HTML tags based on their ancestors. In other words, compound selectors can filter out tags based on their context in the HTML structure. Some examples are provided below.

	Example 1: Compound selector using two classes

//This example shows a compound selector constructed from two simple selectors by tag class:

 

.myClassName1 .myClassName2 { … }

 





										Selecting by Class


//We don't have to limit ourselves to selecting HTML elements like <p> and <div>; essentially, we can put any CSS selector in quotes and pass it into $(). This means we can select classes, too!

$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow')
    });
});
// this selects the html element <button> and says when the button is clicked make the class .vanish fadout.



										Selecting by ID

//If we can select by class, it follows that we can also select by ID. We do this by putting the ID name (in quotes) inside $().

$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});


										Flexible Selections

//Anything you can target with CSS, you can modify with jQuery. For example, we can apply a fadeTo() to a p selector like this:

$('p').fadeTo('slow', 0);

//We can apply a fadeTo() to an li selector like this:

$('li').fadeTo('slow', 0);

//We can apply a fadeTo() to both the p and li selectors like this:

$('p, li').fadeTo('slow', 0);

//This is called a compound selector.




									'this' is Important!



//The this keyword refers to the jQuery object you're currently doing something with. Its complete rules are a little tricky, but the important thing to understand is if you use an event handler on an element—that's the fancy name for actions like .click() and .mouseenter(), since they handle jQuery events—you can call the actual event that occurs (such as fadeOut()) on $(this), and the event will only affect the element you're currently doing something with (for example, clicking on or mousing over).

$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});



//The second line is good: this tells us that when we mouse into a div, we should take a certain action. However, $('div').hide(); won't just hide the div you mouse into; it will hide all the divs on the page. How can we tell jQuery we only want to affect this particular div?

									with this of course


$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').hide();
    });
});




									A sliding panel that moves up and down when clicked.

//We want to trigger an event when the "Slide Up/Down" tab is clicked (that tab's class is .pull-me).


$(document).ready(function() {
$('.pull-me').click();
});



										Toggling Our Panel

//Perfect! Just one more step: we need to tell .click() what to do. In this case, when our pull tab is clicked, we want our sliding panel (with the class .panel) to open or close.The jQuery event we need to toggle our sliding panel is (you guessed it): .slideToggle()! We'll pass it one input, which is the speed of our slide animation.

$(document).ready(function() {
$('.pull-me').click(function() {
    $('.panel').slideToggle('slow')
});
});










