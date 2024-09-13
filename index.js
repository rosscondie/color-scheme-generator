const baseUrl = "https://www.thecolorapi.com";
const colorPicker = document.getElementById("color-picker");
const getColorBtn = document.getElementById("get-color-btn");
const selectMode = document.getElementById("modes");
const imageContainer = document.getElementById("image-container");
const hexValueContainer = document.getElementById("hex-value-container");

getColorBtn.addEventListener("click", function () {
  let hexValueWithoutHash = colorPicker.value.slice(1);
  let mode = selectMode.value;

  let url = `${baseUrl}/scheme?hex=${hexValueWithoutHash}&mode=${mode}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let colorsArr = data.colors;

      console.log(colorsArr);

      let html = "";

      for (let i = 0; i < colorsArr.length; i++) {
        html += `
        <img width="110px" height="550px" src="${colorsArr[i].image.bare}" />
        `;
      }

      imageContainer.innerHTML = html;
    });
});
