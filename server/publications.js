//Meteor.publish('userCount', function() {
//	return Meteor.users.find().count();
//})

Meteor.publish('allMessages',function() {
	return Messages.find();
})

//Meteor.publish('specificUser', function(uID){
	
//	var requestedUserID = uID;
	
//	return Meteor.users.find({'uID':requestedUserID});
//})


Meteor.publish('allUsers', function() {
	return Meteor.users.find();
})