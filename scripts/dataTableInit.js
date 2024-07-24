define(["jquery", "datatables"], function ($) {
  function initializeDataTable() {
    const headers = [
      "CHAIN NAME",
      "SUP IN CHAIN",
      "TIN",
      "TIN NAME",
      "NPI",
      "NPI NAME",
      "NPI TYPE",
    ];
    const thead = $("#data-table thead");
    const tr = $("<tr>");

    headers.forEach(function (header) {
      const th = $("<th>").text(header);
      tr.append(th);
    });

    thead.append(tr);

    $("#data-table").DataTable({
      pageLength: 50,
      lengthMenu: [10, 25, 50, 75, 100],
    });
  }

  return {
    initializeDataTable: initializeDataTable,
  };
});
