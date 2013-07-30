$(document).ready(function(){

	$('#new_comment_button').on('click', function(e){
		e.preventDefault();
		$(this).hide();
		$('#comment_area').append(form)
	})

	$('#comment_area').on('click', '.create', function(e){
		e.preventDefault();
		var input = $('textarea').last().val()
		console.log(input)
		$('ul').append('<li>'+input+'</li>')
		$('form').hide();
		$('#new_comment_button').show()
		$('textarea').last().val('')
	}) 


})

var form = ("<div class='form_field'><form style='background-color:gray' > \
			<textarea rows='2' cols='20' name='comment'/> \
			</textarea><input type='text' name='user'/> \
			<button type = 'submit' class='create'>Create Comment</button></form></div>");



