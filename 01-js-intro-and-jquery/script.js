
var highlight = function() {
  var name = $('#alias').val();
  $('.container-msg').hover(function() {
    //$('.container-msg').toggle('highlight'); 
    $('#name').html(name);
    $('#name').toggle('highlight');
  });
  return name;
};

$(document).ready(function() {
  $('section').fadeIn(3500, function() {
  	$('#alias').focus();
  });
   
  var $msg = $('#msg');

  $('#btn').click(function() {
  	$.ajax( {
  	  url: 'http://bootcamp.aws.af.cm/welcome/' + $('#alias').val(),
  	  type: 'get',
  	}).success(function(data) {
  	  $msg.html(data['response']);
  	  highlight();
  	}).fail(function() {
  	  $('.container-msg').css('color', 'red');
  	  $msg.html('Error!');
  	});	
  });

  $.ajax({
  url: 'http://localhost:3000/search?q=html5',
  type: 'get'
  }).success(function(data){
    console.log(data);
    $.each(data.statuses,function(i,val){
      $('.twit-bar').append('<article>' +
      '<img id="user-profile-img" src="' + val.user.profile_image_url + '" />' +
      '<span id="created-at">' + val.created_at + '</span><br>' +
      '<span id="user">' + val.user.name + '</span>' +
      '<p id="cont-twit">' + val.text + '</p>' + '</article>');
    });
  }).fail(function() {
  	alert('Failure to get request');
  });
});

    /*$.each(data.statuses,function(i,val){
      $('.twit-bar').append('<article>' +
      '<img id="user-profile-img" src="' + this.user.profile_image_url + '" />' +
      '<span id="created-at">' + this.created_at + '</span><br>' +
      '<span id="user">' + this.user.name + '</span>' +
      '<p id="cont-twit">' + this.text + '</p>' + '</article>');
    });*/














