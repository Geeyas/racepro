$(function(){

 $('#go').click(function(){

 	//build a function to check car is comppleted or not..
 	function checkIfComplete(){
 		if(isComplete = false){
 			isComplete = true;
 		} else{
 			place = 'second';
 		}
 	}
 	var carWidth = $('#car1').width();
 	var raceTrackWidth = $(window).width() - carWidth;

 	//generates random number from 1 to 5000
 	var raceTime1 = Math.floor( (Math.random()* 5000) + 1);
 	var raceTime2 = Math.floor( (Math.random()* 5000) + 1);
 	

// set a flag variable to FALSE by default
	var isComplete = false;

	// set a flad variable to First by default
	var place = 'first';

// animate car1

$('#car1').animate({
	// move the car width of racetrack
	left: raceTrackWidth

}, raceTime1, function(){
	checkIfComplete();

	$('#Info1').text('finished in ' + place + ' place and clocked in time' + raceTime1 + 'milliseconds');

});



$('#car2').animate({
	// move the car width of racetrack
	left: raceTrackWidth

}, raceTime2, function(){
	checkIfComplete();

	$('#Info2').text('finished in ' + place + ' place and clocked in time' + raceTime2 + 'milliseconds');

});
});


$('#reset').click(function(){
	$('.car').css('left','0');
	$('#Info1').text('');
	$('#Info2').text('');
});


});