Template.registerHelper('langActive', function(lang) {
		let current = Session.get('codersun.user.lang');
		if (current === lang) {
			return "active";
		} else {
			return "inactive";
		}
});

Template.home.events({
	'click a.lang': function(e) {
		let lang = undefined;
		$this = $(e.target);
		lang = $this.data("lang");
		Session.set("codersun.user.lang", lang);
		$("a.lang").removeClass("active");
		$this.addClass("active");
		TAPi18n.setLanguage(lang);
	},

	'click span.lang': function(e) {
		let lang = undefined;
		$this = $(e.target);
		lang = $this.data("lang");
		Session.set("codersun.user.lang", lang);
		$("a.lang").removeClass("active");
		$("span.lang").removeClass("active");
		$this.addClass("active");
		TAPi18n.setLanguage(lang);
	}
});

Template.signup.events({
	'submit #signupForm': function(e) {
		var SUBJECT = "Signup";
		e.preventDefault();
		var name = e.target.name.value,
			email = e.target.email.value,
			phone = e.target.phone.value,
			background = e.target.background.value;

		//if (isFilled(name) && isFilled(email) && isFilled(background)) {
		if (name && email && phone && background) {
			var text = "Name: " + name + "\r"
					 + "Email: " + email + "\r"
					 + "Phone: " + phone + "\r"
					 + "Background: " + background;
			Meteor.call('sendEmail', SUBJECT, text);
			e.target.name.value = "";
			e.target.email.value = "";
			e.target.phone.value = "";
			e.target.background.value = "";
			throwAlert("Email sent.", 'success');

		} else {
			console.log("An error occured, failed to send email.");
			return false;
		}
	}
});


Template.contactForm.events({
	'submit #contact-form': function(e) {
		const SUBJECT = "Contact";
		e.preventDefault();
		var name = e.target.name.value,
			email = e.target.email.value,
			message = e.target.message.value;

		//if (isFilled(name) && isFilled(email) && isFilled(background)) {
		if (name && email && message) {
			var text = "Name: " + name + "\r"
					 + "Email: " + email + "\r"
					 + "Message: " + message;
			Meteor.call('sendEmail', SUBJECT, text);
			e.target.name.value = "";
			e.target.email.value = "";
			e.target.message.value = "";
			throwAlert("Email sent.", 'success');

		} else {
			console.log("An error occured, failed to send email.");
			return false;
		}
	}
})
