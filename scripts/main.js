require.config({
  baseUrl: "scripts",
  paths: {
    jquery: "https://code.jquery.com/jquery-3.6.0.min",
    domReady: "domReady",
    app: "app",
    display: "display",
  },
});

require(["domReady", "app", "display"], function (domReady, app, display) {
  domReady(function () {
    console.log("dom is fully loaded");
    app.populateDatalist();
    app.clearExistingValues();
    display.displayNPIsbyTIN();
    display.displayTINbyNPI();
    display.setupInputClearListeners();
  });
});
