const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generatorBtn = wrapper.querySelector(".form button"),
  qrImage = wrapper.querySelector(".qr-code img");

generatorBtn.addEventListener("click", () => {
  const qrValue = qrInput.value;
  if (!qrValue) return;
  generatorBtn.innerText = "Generating QR Code...";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImage.addEventListener("load", () => {
    wrapper.classList.add("active");
    generatorBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  wrapper.classList.remove("active");
});
