const form = document.getElementById("CompanyDetailsForm");
const status = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", (a) => {

 
  a.preventDefault();

  let companyName = form.name.value.trim();
  let companyMoto = form.Moto.value.trim();

  if (!companyName || !companyMoto) {
    showStatus("Please fill out all fields.", false);
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";

    showStatus(`Thank you! your company "${companyName}" added successfully.`, true);
    form.reset();
  }, 900);
});

function showStatus(message, ok = true) {
  status.style.display = "block";
  status.className = ok ? "msg" : "error";
  status.textContent = message;

  setTimeout(() => {
    status.style.display = "none";
  }, 3000);
}
