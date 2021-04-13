const file = document.querySelector(".uploadFile");
file.addEventListener("change", (e) => {
  let fileName = document.querySelector(".fileName");
  if (fileName.textContent === "") fileName.textContent = "파일 선택";
  fileName.textContent = e.target.files[0].name;
});
