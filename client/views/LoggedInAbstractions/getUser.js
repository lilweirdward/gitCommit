Template.getUser.helpers({
	
	user: function() {
		
		var anID = Math.floor(Math.random() * Meteor.users.find().count()) + 1;
		
		if (anID === Meteor.user().profile.uID){
			
			while(anID === Meteor.user().profile.uID) {
		
					anID = Math.floor(Math.random() * Meteor.users.find().count()) + 1;
				}
			} 
			return Meteor.users.find({'profile.uID':anID});
		
	}
})

