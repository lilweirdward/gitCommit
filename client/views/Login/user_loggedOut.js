Template.user_loggedOut.events({
	"click #login": function(e,tmpl) {
		Meteor.loginWithGithub({
			requestPermissions: ['user', 'public_repo']
		},
			function(err) {
				if(err) {
					console.log(err);
				}
				else {
					console.log("Connection to GitHub successfull");
				}
		
					Session.set("loggedInUser_uID", this.profile.uID);
					
		});
	}

	
});


