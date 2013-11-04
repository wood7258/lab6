//signup.js 
// add your JavaScript code to this file

$(function() {
	populateStates();
	
	$('.signup-form').submit(function(){
		var signupForm = $(this);
		}
		var reqFields = ["first-name", "last-name", "addr-1", "zip", "email"];
		var reqField;
		var reqValue;
		for (var i = 0; i < reqFields.length; i++) {
			var fieldName = reqFields[i];
			reqField = signupForm.find('input[name="' + fieldName + '"]');
			reqValue = reqField.val().trim();
			if (0 === reqValue.length) {
				alert('You must enter your ' + reqField.attr('placeholder') + '!');
				return false;
			}
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