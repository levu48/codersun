Meteor.methods({
	'sendEmail': function(subject, text) {
		//check([text], [String]);
		if (!text) {
			console.log("email message is empty");
			return;
		}

		this.unblock();

		Email.send({
			to: 'codersun12@gmail.com',
			from: 'codersun12@gmail.com',
			subject: 'CODERSUN: ' + subject,
			text: text
		});
	}
});