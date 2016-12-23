// main  page login modals

$('#userLogin')
	.click(function(){
		$('.ui.modal.js-userModal')
		  .modal('show');
})

$('#corpLogin')
	.click(function(){
		$('.ui.modal.corp-modal')
			.modal('show');
})



// sidebar

$('.ui.sidebar').sidebar('hide');

$('.js-toggle-sidebar').click(function(e){
    e.preventDefault();
    $('.ui.sidebar').sidebar('show');   
})
$('body').click(function () {
	// $('.ui.sidebar').sidebar('hide');
})

// success message on contactUs

$('#successMessage-js')
	.click(function(){
		$('.ui.success.message')
			.message('show');
});


$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;

// corp dashboard cards

$('.special.cards .image').dimmer({
  on: 'hover'
});





// $('#add-list-button')
// 	.click(function(){
// 		$('.raised.card'){
// 			.transition('browse right');
// 		}
// 	})



// $('#decline-button')
// 	.click(function(){
// 		$('.ui.inverted.button')
// 		.transition('browse left');
// 	})




// success message HELP
// const successmessage = $('.js-submit-button');

// successmessage.click();

$('.ui.accordion')
  .accordion()
;

$('.ui.dropdown').dropdown();



