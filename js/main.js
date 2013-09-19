$(function() {
	var $supportButton = $('.support-button'),
		$supportWindow = $('.support-window');

	$supportButton.on('click', function() {
		$supportButton.addClass('support-button-hidden');
		$supportWindow.fadeIn();
	});

	$('.button-close').on('click', function() {
		$supportButton.removeClass('support-button-hidden');
		$supportWindow.fadeOut();
	});
});
