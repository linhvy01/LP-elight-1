$(document).ready(function() {
	$('#class1,#_1').click(function(event) {
		/* Act on the event */
		$('#fast1').toggleClass('change');
		$('#panel1').slideToggle('slow');
		$('#panel2').slideUp('slow');
	});
});

$(document).ready(function() {
	$('#class2,#_2').click(function(event) {
		/* Act on the event */
		$('#fast1').removeClass('change');
		$('#panel1').slideUp('slow');
		$('#fast2').toggleClass('change');
		$('#panel2').slideToggle('slow');
	});
});

$(document).ready(function() {
	$('#class1,#_1').click(function(event) {
		/* Act on the event */
		$('#fast2').removeClass('change');
		$('#panel2').slideUp('slow');
	});
});
