//make scroll position top:
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

$(window).on('load', function(){
	$(window).scrollTop(2);
	$('.siteInfo').css('display','block');
	$.getJSON('scripts/typeContentTwo.json');
})



// define variables

let $gallery = $(".gallery");
$slideshow = $(".slideshow");
$shuffle = $('.shuffle');
$mobileShuffle = $('.mobileShuffle');
$overview = $('.overviewContainer');
$body = $('body');
$typeName = $('.typeName');
$year = $('.year');
$classification = $('.classification');
$inspiration = $('.inspiration');
$designer = $('.designer');
$intro = $('.introduction');
$alphabetImage = $('.alphabetImage');
$historyPar = $('.historyPar');
$vibesImage = $('.vibesImage');
$tonePar = $('.tonePar');
$navInfo = $('.navInfo');
$siteInfo = $('.siteInfo');
$close = $('.close');
$overlay = $('.darkOverlay');


$gallery.addClass("show");
let timesRun = 0;
let lastRandom;

$('.shuffle').add('.mobileShuffle').on('click', function myFunction(){
		$overview.css('display','none');
		$gallery.css('opacity',0);
		let cycles = setInterval( function imageCycle(){
		let random = Math.floor((Math.random() * 6));
		if(lastRandom == random){
			random +=1;
		}
		lastRandom = random;
		timesRun +=1;
		// Desktop Width Counter:
		if(timesRun >= 4 && $(window).width() >= 800){
			clearInterval(cycles);
			timesRun = 0;
			setTimeout(function(){
			$overview.css('display','block');
			$gallery.css('opacity',1);
		},200)
		}
		// Mobile Width Counter:
		else if(timesRun >= 1 && $(window).width() < 800){
			clearInterval(cycles);
			$overview.css('display','block');
			timesRun = 0;
		}
		// get the json	
		$.getJSON('scripts/typeContentTwo.json', function(response){
		// do something with the data
		// could hard code elements in HTML and have them populated through javascript		
		$year.html(response[random].year);
		$classification.html(response[random].classification);
		$inspiration.html(response[random].inspiration);
		$designer.html(response[random].designer);
		$intro.html(response[random].introduction);
		$historyPar.html(response[random].historyPar);
		$tonePar.html(response[random].tonePar);
		$shuffle.css('backgroundColor',`${response[random].buttonColor}`);
		$mobileShuffle.css('backgroundColor',`${response[random].buttonColor}`);






		// cycle through random images
		$gallery.removeClass("show");
		setTimeout(function(){
		// grab a random element
		$gallery.attr("src",`${response[random]["gallerySrc"]}`).addClass("show");
		$typeName.attr("src",`${response[random]["typenameSrc"]}`);
		$alphabetImage.attr("src",`${response[random]["alphabetSrc"]}`);
		$vibesImage.attr("src",`${response[random]["vibesImage"]}`);

	},20);
	});	
	},100);
});

// create a function that loops through each image in the array
// as you reveal the next image, hide the previous one


$navInfo.on('click', function(){
	$body.addClass('noScroll');
	$siteInfo.addClass('reveal');
	$overlay.addClass('reveal');
	$shuffle.css('display','none');
});

$('.close').add('.darkOverlay').on('click', function(){
	$body.removeClass('noScroll');
	$siteInfo.removeClass('reveal');
	$overlay.removeClass('reveal');
	$shuffle.css('display','block');
});


let curPos = 0;

// $(window).on('scroll', function(){
// 	curPos = $(window).scrollTop();
// 	$year.html(curPos);
// });


