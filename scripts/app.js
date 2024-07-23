define([], function () {
  function populateDatalist() {
    const tinDatalist = document.getElementById("tin-options");
    const npiDatalist = document.getElementById("npi-options");

    const uniqueTins = [...new Set(tinNpiData.map((item) => item.TIN))];
    const uniqueNpis = [...new Set(tinNpiData.map((item) => item.NPI))];

    uniqueTins.forEach((tin) => {
      const option = document.createElement("option");
      option.value = tin;
      tinDatalist.appendChild(option);
    });

    uniqueNpis.forEach((npi) => {
      const option = document.createElement("option");
      option.value = npi;
      npiDatalist.appendChild(option);
    });
    console.log("here");
  }

  function clearExistingValues() {
    console.log("clear existing values");
    document.getElementById("tin").value = "";
    document.getElementById("npi").value = "";
    document.getElementById("result-tin").textContent = "";
    document.getElementById("result-npi").textContent = "";
    console.log("existing values cleared");
  }
  return {
    populateDatalist: populateDatalist,
    clearExistingValues: clearExistingValues,
  };
});
