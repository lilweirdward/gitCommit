Template.user_loggedIn.events({
	"click #logout": function(e,tmpl) {
		Meteor.logout(function(err){
			if (err) {
				console.log(err);
			}
			else
			{
				console.log("successfull logout!");
			}
		});
	}
});