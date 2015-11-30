getUserLanguage = function () {
  let lang = Session.get("codersun.user.lang");
  if (!lang) {
    lang = "en"; // default to English
  }

  return lang;
};

if (Meteor.isClient) {
  Meteor.startup(function () {
    $('body').attr('data-spy', 'scroll');
    $('body').attr('data-target', '#navbar-scroll');

    Session.set("codersun.user.lang", "en"); // testing
    Session.set("showLoadingIndicator", true);

    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
        Session.set("showLoadingIndicator", false);
      })
      .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });




  });
}

