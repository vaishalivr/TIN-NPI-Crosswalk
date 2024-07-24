require.config({
  baseUrl: "scripts",
  paths: {
    jquery: "https://code.jquery.com/jquery-3.6.0.min",
    datatables: "https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min",
    datatables_dt:
      "https://cdn.datatables.net/1.10.25/js/dataTables.dataTables.min",
    domReady: "domReady",
    app: "app",
    tinNpiManager: "tinNpiManager",
    dataTableInit: "dataTableInit",
  },
  shim: {
    datatables: {
      deps: ["jquery"],
      exports: "$.fn.dataTable",
    },
    datatables_dt: {
      deps: ["datatables"],
      exports: "$.fn.dataTable",
    },
  },
});

require([
  "domReady",
  "jquery",
  "datatables",
  "dataTableInit",
  "app",
  "tinNpiManager",
], function (domReady, $, dataTables, dataTableInit, app, tinNpiManager) {
  domReady(function () {
    console.log("dom is fully loaded");
    //$("#data-table").DataTable();
    dataTableInit.initializeDataTable();
    app.populateDatalist();
    app.clearExistingValues();
    tinNpiManager.displayNPIsbyTIN();
    tinNpiManager.displayTINbyNPI();
    tinNpiManager.setupInputClearListeners();
  });
});
