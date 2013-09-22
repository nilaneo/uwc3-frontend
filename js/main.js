$(function() {
	var $supportButton = $('.support-button'),
		$supportWindow = $('.support-window'),
		$chat = $('.support-window__content__chat'),
		$email = $('.support-window__content__sending-email'),
		$title = $('.title-text');


	$supportButton.on('click', function() {
		$email.hide();
		$chat.show();
		$title.text('Технічна підтримка слухає...');
		$supportButton.addClass('support-button-hidden');
		$supportWindow.fadeIn();
	});

	$('.button-close').on('click', function() {
		if ($email.is(':visible')) {
			$supportButton.removeClass('support-button-hidden');
			$supportWindow.fadeOut();			
		} else {
			$chat.slideUp(400, function() {
				$title.text('Чат завершено!');
				$email.slideDown();
			});			
		}
	});	

	$('.nested-file').on('click', function(e) {
		e.preventDefault();
		$(this).remove();
	})
});
