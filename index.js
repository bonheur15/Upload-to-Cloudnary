
window.ajaxSuccess = function () {
  let response = JSON.parse(this.responseText);
  console.log("ajaxSuccess", typeof this.responseText);
  document
    .getElementById("uploaded")
    .setAttribute("src", response["secure_url"]);
  document.getElementById("results").innerText = this.responseText;
};
window.AJAXSubmit = function (formElement) {
  console.log("starting AJAXSubmit");
  if (!formElement.action) {
    console.log("fail");
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = ajaxSuccess;
  xhr.open(
    "post",
    "https://api.cloudinary.com/v1_1/cyj6d8xe/image/upload"
  );
  xhr.send(new FormData(formElement));
};
