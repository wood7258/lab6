//signup.js 
// add your JavaScript code to this file

$(function() {
	populateStates();
	
	$('.signup-form').submit(function(){
		var signupForm = $(this);
		var addr1Input = signupForm.find('input[name="addr-1"]');
		var addr1Value = addr1Input.val();
		if(addr1Value.length == 0) {
			alert('INPUT REQUIRED: ADDRESS\nPLEASE ADVISE.');
			return false;
		}
		var zipInput = signupForm.find('input[name="zip"]');
		var zipValue = zipInput.val();
		if(zipValue.length == 0) {
			alert('INPUT REQUIRED: ZIP CODE\nPLEASE ADVISE.');
			return false;
		}
	});
	$('.cancel-signup').click(function(){
		alert('Y U GOTTA B LIEK DIS?!?!?!');
		window.location = 'http://www.google.com';
	});
});

function populateStates() {
	var stateSelect = $('.us-states');
	var option;
	$.each(usStates, function(i, state) {
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	});
}