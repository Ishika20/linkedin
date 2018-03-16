function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display","none");
  $(".data").css("visibility","visible");
  $("#pic").attr('src',profile.getImageUrl());
	$("#email").text(profile.getEmail());
}
  function signOut(){
		var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function(){
			alert("You have been Logged Out ");
			$(".g-signin2").css("display","block");
			$(".data").css("display","none");
	       console.log('User signed out.');
});
}
