if (Messages.find().count() ===0) {
	Messages.insert({
		name: "Admin", 
		message: "Welcome to the chat box!", 
		time: Date.now()
	});
}