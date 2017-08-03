$(document).ready(function() {
	$('.fix').on('click', function() {
		$('.before').hide('slow');
		$('.after').slideDown('slow');
		return false;
})
});