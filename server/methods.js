Meteor.methods({
	'sendEmail': function(subject, text) {
		//check([text], [String]);
		if (!text) {
			console.log("email message is empty");
			return;
		}

		this.unblock();

		Email.send({
			to: 'danberke100@gmail.com',
			from: 'danberke100@gmail.com',
			subject: 'APPFLUENT: ' + subject,
			text: text
		});
	}
});