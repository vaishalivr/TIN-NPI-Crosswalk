define([], function () {
  function displayNPIsbyTIN() {
    document.getElementById("tin").addEventListener("input", function () {
      const tinInput = this.value;
      const dataTable = $("#data-table").DataTable();
      dataTable.clear();

      const matchedData = tinNpiData.filter((item) => item.TIN === tinInput);
      if (matchedData.length > 0) {
        matchedData.forEach((item) => {
          dataTable.row
            .add([
              item["CHAIN NAME"],
              item["SUP IN CHAIN"],
              item.TIN,
              item["TIN NAME"],
              item.NPI,
              item["NPI NAME"],
              item["NPI TYPE"],
            ])
            .draw();
        });
      }
    });
    console.log("display npis by tin");
  }

  function displayTINbyNPI() {
    document.getElementById("npi").addEventListener("input", function () {
      const npiInput = this.value;
      const dataTable = $("#data-table").DataTable();
      dataTable.clear(); // Clear existing data in the table

      const matchedData = tinNpiData.filter((item) => item.NPI === npiInput);
      if (matchedData.length > 0) {
        matchedData.forEach((item) => {
          dataTable.row
            .add([
              item["CHAIN NAME"],
              item["SUP IN CHAIN"],
              item.TIN,
              item["TIN NAME"],
              item.NPI,
              item["NPI NAME"],
              item["NPI TYPE"],
            ])
            .draw();
        });
      }
    });
    console.log("display tin by npi");
  }

  function setupInputClearListeners() {
    const tinInput = document.getElementById("tin");
    const npiInput = document.getElementById("npi");

    tinInput.addEventListener("input", function () {
      if (tinInput.value.length > 0) {
        npiInput.value = "";
        document.getElementById("result-tin").textContent = "";
      }
    });

    npiInput.addEventListener("input", function () {
      if (npiInput.value.length > 0) {
        tinInput.value = "";
        document.getElementById("result-npi").textContent = "";
      }
    });
    console.log("Input clear listeners set up");
  }
  return {
    displayNPIsbyTIN: displayNPIsbyTIN,
    displayTINbyNPI: displayTINbyNPI,
    setupInputClearListeners: setupInputClearListeners,
  };
});
