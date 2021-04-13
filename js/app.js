"use strict";

// if ("serviceWorker" in navigator) {
// 	if (navigator.serviceWorker.controller) {
// 		console.log("Active service worker found, no need to register");
// 	} else {
// 		// Register the service worker
// 		navigator.serviceWorker
// 		.register("service-worker.js", {
// 			scope: "./"
// 		})
// 		.then(function (reg) {
// 			console.log("Service worker has been registered for scope: " + reg.scope);
// 		});
// 	}
// }


document.addEventListener("DOMContentLoaded", function() {

	var App = {
    Func1: function(){
      // SomeLogicCode_1
    },
    appScripts: function(){
      App.Func1();
    }
  };
  App.appScripts();

});
