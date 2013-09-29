initialize = function(){
	if(localStorage.getItem('background') !== null) 
		$('body').css('background-image', 'url('+localStorage.getItem('background')+')')
	 	$('#room-wheel').remove();
	
	API.on(API.CHAT_COMMAND, function(data){
		if(data.indexOf('/bg') === 0){
			$('body').css('background-image', 'url('+data.split(' ')[1]+')')
			$('#room-wheel').remove();
		}
		localStorage.setItem('background', data.split(' ')[1])
	});
}

initialize();