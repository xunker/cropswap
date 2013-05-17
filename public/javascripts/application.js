// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//# require jquery-ui
//# require autocomplete-rails
//= require underscore
//= require backbone
//= require handlebars
//= require_tree ./lib
//= require cropswap
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require ./helpers/application_helper

// $(document).ready(function(){
//   // Polyfills
//   Modernizr.load([
//     {
//       test: Modernizr.input.placeholder,
//       nope: ["/assets/polyfills/placeholder.js"]
//     },
//     {
//       test: window.matchMedia,
//       nope: "/assets/polyfills/matchmedia.js"
//     },
//     "/assets/helpers/enquire.js",
//     "/assets/helpers/media_queries.js"
//   ]);

//   $('.btn-navbar').click(function () {
//     if ($(".sort-menu").hasClass('show')) {
//       setTimeout("$('.nav-collapse').toggleClass('show');", 350);
//       $('body').toggleClass('nav-open');
//       $(".sort-menu").removeClass('show');
//     } else {
//       $('.nav-collapse').toggleClass('show');
//       $('body').toggleClass('nav-open');
//     }
//   });

//   // REMOVE once search is functional
//   $('html').click(function(){
//     $('a.search-link').popover('hide');
//   });

//     // app banner for < iOS 6 and Android
//     $.smartbanner({
//       title: "Deseret Bookshelf (LDS e-reader)", // What the title of the app should be in the banner (defaults to <title>)
//       author: "Deseret Book Company", // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
//       price: 'FREE', // Price of the app
//       appStoreLanguage: 'us', // Language code for App Store
//       inAppStore: 'On the App Store', // Text of price for iOS
//       inGooglePlay: 'In Google Play', // Text of price for Android
//       icon: "http://deseretbook.com/images/app_icon.png", // The URL of the icon (defaults to <meta name="apple-touch-icon">)
//       iconGloss: null, // Force gloss effect for iOS even for precomposed
//       button: 'VIEW', // Text for the install button
//       scale: 'auto', // Scale based on viewport size (set to 1 to disable)
//       speedIn: 300, // Show animation speed of the banner
//       speedOut: 400, // Close animation speed of the banner
//       daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
//       daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
//       force: null // Choose 'ios' or 'android'. Don't do a browser check, just always show this banner
//     });

//   // IE 10 detection
//   if(Function('/*@cc_on return document.documentMode===10@*/')()){
//     document.documentElement.className+=' ie10';
//   }
// });
