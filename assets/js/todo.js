$(document).ready(function() {
	$('ul').on('click', 'li', function() {
		$(this).toggleClass('completed');
	});

	$('ul').on('click', 'span', function(e) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
		e.stopPropagation();
	});

	$('#input').keypress(function(e) {
		if (e.which === 13) {
			var newText = $(this).val();
			var newSpan = '<span><i class="fa fa-trash"></i></span> ';
			$('ul').append('<li>' + newSpan + newText + '</li>');
			$('#input').val('');
		}
	});

	$('#deleteAll').on('click', function() {
		deleteAll();
	});

	function deleteAll() {
		$('li').fadeOut(500, function() {
			$(this).remove();
		});
	}

	$('.fa-minus').click(function() {
		$(this).toggleClass('fa-minus');
		$(this).toggleClass('fa-plus');
		$('ul').fadeToggle();
	});
});
