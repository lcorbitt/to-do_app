$(document).ready(function() {
	// $('div, input, ul, span').css('border', '3px solid red');

	$('ul').on('click', 'li', function() {
		$(this).toggleClass('completed');
	});

	$('ul').on('click', 'span', function(event) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
		event.stopPropagation();
	});

	$('#input').keypress(function(e) {
		if (e.which === 13) {
			var newText = $(this).val();
			var newSpan = '<span>X </span>';
			$('ul').append('<li>' + newSpan + newText + '</li>');
			$('#input').val('');
		}
	});
});
