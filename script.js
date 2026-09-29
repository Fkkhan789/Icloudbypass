let selectedModel = "";

function selectModel(model) {
  selectedModel = model;

  document.getElementById("selectedModel").textContent = model;

  document.querySelectorAll(".series button").forEach(btn => {
    btn.classList.remove("active");

    if (btn.textContent === model) {
      btn.classList.add("active");
    }
  });
}

function goToDetails() {

  if (!selectedModel) {
    alert("Please select an iPhone model first.");
    return;
  }

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");

  document.getElementById("modelOutput").textContent = selectedModel;
}

function backToModels() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step1").classList.remove("hidden");
}

function goToPayment() {

  const serial = document.getElementById("serial").value.trim();
  const imei = document.getElementById("imei").value.trim();

  if (!serial) {
    alert("Please enter the iPhone Serial Number.");
    return;
  }

  if (!imei) {
    alert("Please enter the iPhone IMEI.");
    return;
  }

  if (!/^\d{15}$/.test(imei)) {
    alert("IMEI should contain 15 digits.");
    return;
  }

  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function submitRequest() {

  const button = document.querySelector(".pay-btn");

  button.disabled = true;
  button.textContent = "Submitting...";

  setTimeout(() => {

    button.classList.add("hidden");

    document.getElementById("pending").classList.remove("hidden");

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });

  }, 1200);
}
