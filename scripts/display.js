define([], function () {
  function displayNPIsbyTIN() {
    document.getElementById("tin").addEventListener("input", function () {
      const tinInput = this.value;
      const resultNpiDiv = document.getElementById("result-npi");

      const matchedData = tinNpiData.filter((item) => item.TIN === tinInput);
      if (matchedData.length > 0) {
        resultNpiDiv.innerHTML = `Corresponding NPIs: <ul>${matchedData
          .map((item) => `<li>${item.NPI}</li>`)
          .join("")}</ul>`;
      } else {
        resultNpiDiv.textContent = "No corresponding NPIs found";
      }
    });
    console.log("display npis by tin");
  }

  function displayTINbyNPI() {
    document.getElementById("npi").addEventListener("input", function () {
      const npiInput = this.value;
      const resultTinDiv = document.getElementById("result-tin");

      const matchedData = tinNpiData.find((item) => item.NPI === npiInput);
      if (matchedData) {
        resultTinDiv.textContent = `Corresponding TIN: ${matchedData.TIN}`;
      } else {
        resultTinDiv.textContent = "No corresponding TIN found";
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
