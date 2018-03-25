$(document).ready(function () {

	$('#login').click(function () {
	if(localStorage.getItem('userData')==null || localStorage.getItem('userData')==undefined ||localStorage.getItem('userData')=='' ){
	window.location.href = "/login";
	}else{
	window.location.href = "../HTMLfiles/dashboard.html";
	}
		
	})
});
