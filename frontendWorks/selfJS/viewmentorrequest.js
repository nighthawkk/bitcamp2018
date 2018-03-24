$(function () {
  let url = encodeURI(window.location.href);
  $('#facebookBTN').click(function () {
    window.location.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  });
  $('#twitterBTN').click(function () {
    window.location.href = `https://twitter.com/home?status=${url}`;
  });
  $.post('/mentor/getMentor',{
    username: JSON.parse(localStorage.getItem('userData')).data.username
  },(data)=>{
    makeBlog(data);
  });
  function makeBlog(data) {
    console.log(data);
    data = data.data;
    console.log(data);
    let d = new Date();
    $('#blogName').text(data.username)
    $('#name').text(data.username)
    
    $('#lastDate').text(d)
    $('#details').text(data.skills)
    $('#purpose').text(data.mentor)
    $('#dateFiled').text(d)
    
  }
});
