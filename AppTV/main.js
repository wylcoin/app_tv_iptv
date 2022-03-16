// window.addEventListener("keydown", handleKeyCode);
function goBack() {
  window.history.back()
}

// handle keycode remote
var handleKeyCode = function (event) {
  console.log(event.keyCode);
  switch (event.keyCode) {
    case 10009:
      window.history.back();
      // alert("return click");
      break;
    case 10252:  //node next: switch
    console.log("node next clicked");
    break;
    default:
      break;
  }
};
// module.exports.handleKeyCode = handleKeyCode;
