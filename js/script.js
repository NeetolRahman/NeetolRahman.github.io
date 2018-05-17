$(document).ready(function(){

	// alert('hello world');

// E-MAIL ALERT //

	$('.gmail').click(function(event){
		event.preventDefault();
		alert('neetolrahman@gmail.com');

	});

// QUOTE ARRAY // 

	var quotes = [
		" Mr. Stark? I don't feel so good... ",
		" Success is contigent upon saying things like 'contigent upon.' ",
		" Need help naming your improv show? Put a 'prov' on it. ",
		" Due to recent events, I am now retired from doing Aziz impressions. ",
		" Red flags are green if you're colorblind. ",
		" Great! Another casting call for Halal Cart Guy #2. ",
		" Cool? Cool. ",
		" var quotes = ['meta jokes suck'] $('blockquote').lame(quotes); ",
		" Thanks, Obama (said earnestly & unironically). ",
		" Men are dogs, but chicks are baby chickens. ",
		" ATLANTAAA! ....... UUUNITED! ",
		" I <3 NY, but New York never loved me back... ",
		" My brother, Tutul Rahman, is kind of a big deal. ",
		" With beard: 29 years old. Without: 19. ",
		" Compare headshots like the business card scene in American Psycho. ",
		" Yoko Kanno = God... Don't know her music? We can't be friends. ",
		" Landon Mothafuckin' Donovan. ",
	];

// QUOTE CHANGER //

	$('.sayings').click(function(event){
		
		console.log('clicked');
		
		event.preventDefault();
		
		var randomSaying = quotes[Math.floor(Math.random()*quotes.length)];

		$('.quote').html(randomSaying);

	});

// DESIGN TAB //

	$('.design-blur').click(function(){

		// console.log("clicked");

		$('.design-blur').fadeOut(800);
		$('.design-overview').slideDown();

	});

	$('.design-clear').click(function(){

		// console.log("clicked");

		$('.design-blur').fadeIn(800);
		$('.design-overview').slideUp();

	});

// ACTING TAB //

	$('.acting-blur').click(function(){

		// console.log("clicked");

		$('.acting-blur').fadeOut(800);
		$('.acting-overview').slideDown();

	});

	$('.acting-clear').click(function(){

		// console.log("clicked");

		$('.acting-blur').fadeIn(800);
		$('.acting-overview').slideUp();

	});

// MUSIC TAB //

	$('.music-blur').click(function(){

		// console.log("clicked");

		$('.music-blur').fadeOut(800);
		$('.music-overview').slideDown();

	});

	$('.music-clear').click(function(){

		// console.log("clicked");

		$('.music-blur').fadeIn(800);
		$('.music-overview').slideUp();

	});

});