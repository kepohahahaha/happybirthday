const scriptURL = "https://script.google.com/macros/s/AKfycby3sjz-WQ-uDQ7plt_jv6gpW9rU0o3QMN1SlaZZufLbB4XzcMovxZlHSi1DA190AoOn/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Tombol submit diklik

  //Tampilkan tombol loading hilangankan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //Tampilkan tombol kirim hilangankan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");

      //alert
      myAlert.classList.toggle("d-none");

      //reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
