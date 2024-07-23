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
}

document.addEventListener("DOMContentLoaded", function () {
  populateDatalist();
  document.getElementById("tin").value = "";
  document.getElementById("npi").value = "";
  document.getElementById("result-tin").textContent = "";
  document.getElementById("result-npi").textContent = "";
});

// Display corresponding NPIs when TIN is input
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

// Display corresponding TIN when NPI is input
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

// Show data button functionality
document.getElementById("showData").addEventListener("click", function () {
  const tinInput = document.getElementById("tin").value;
  const npiInput = document.getElementById("npi").value;
  const outputDiv = document.getElementById("output");

  const filteredData = tinNpiData.filter(
    (item) => item.TIN === tinInput && item.NPI === npiInput
  );
  if (filteredData.length > 0) {
    outputDiv.textContent = `Found: TIN: ${filteredData[0].TIN}, NPI: ${filteredData[0].NPI}`;
  } else {
    outputDiv.textContent = "No matching data found";
  }
});
