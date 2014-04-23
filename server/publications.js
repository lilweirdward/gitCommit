Meteor.publish('allUsers', function() {
	return Meteor.users.find();
})

Meteor.publish('allMessages',function() {
	return Messages.find();
})