var currentUserCount = Meteor.users.find().count();

Accounts.onCreateUser(function(options, user){
	var accessToken = user.services.github.accessToken,
		result,
		profile;
		
	    result = Meteor.http.get("https://api.github.com/user", {
	  		headers: {"User-Agent": "Meteor/1.0"},

	      params: {
	        access_token: accessToken
	      }
	    });
		
		if (result.error)
			throw result.error;
			
		profile = _.pick(result.data,
			"login",
			"name",
			"avatar_url",
			"url",
			"company",
			"blog",
			"location",
			"email",
			"bio",
			"html_url",
			"followers_url",
			"following_url",
			"repos_url",
			"public_repos", //count
			"followers", //count
			"following"); //count
			
			profile.uID = currentUserCount; //Manually add a specified unique sequential ID
			

			
			user.profile= profile;
			
			return user;
			
});