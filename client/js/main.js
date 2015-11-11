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

Template.home.helpers({
	langActive: function(lang) {
		let current = Session.get('codersun.user.lang');
		if (current === lang) {
			return "active";
		} else {
			return "inactive";
		}
	}
});