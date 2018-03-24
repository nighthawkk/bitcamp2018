$(document).ready(function () {
	
	document.getElementById('displayName').innerText = `${JSON.parse(localStorage.getItem('userData')).data.name}`;

  $('#viewFund').click(function (e) {
    e.preventDefault();
    window.location.href = '/HTMLfiles/viewmentorrequest.html'
  });

	$('#submit').click(function () {
		let region = $('#region').val();
		let mentor = $('#mentor').val();
		let skills = $('#skills').val();
	
		
		$.post('/mentor', {
			username: JSON.parse(localStorage.getItem('userData')).data.username,
			region: region,
			skills: skills,
			mentor: mentor,
			
			//contactDetails: contactDetails,
			
		}, (data) => {
			console.log(data);
		})
		
		$.post('/mentor/getMentor',{
			username: JSON.parse(localStorage.getItem('userData')).data.username
		}, (data) => {
			generateFinal(data)
		})
	})
	
	function generateFinal(data) {
		console.log(data)
	}
})
