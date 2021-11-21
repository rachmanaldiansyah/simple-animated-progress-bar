const progressBar = document.querySelectorAll('.progress-bar');

setInterval(function(){
  setProgressWidth(progressBar[0], 60, "#97cc04");
  setProgressWidth(progressBar[1], 89, "#f45d01");
  setProgressWidth(progressBar[2], 34, "#2d7dd2");
  setProgressWidth(progressBar[3], 70, "#ea2b1f");
  setProgressWidth(progressBar[4], 90, "#45f0df");
}, 1000);

function setProgressWidth(progressItem, value, BGColor){
  progressItem.firstElementChild.style.width = `${value}%`;
  progressItem.firstElementChild.style.transition = "width 3s linear";
  progressItem.firstElementChild.style.background = `${BGColor}`;

  progressItem.lastElementChild.textContent = `${value}%`;
  progressItem.lastElementChild.style.paddingLeft = `calc(${value}% - 10px)`;
  progressItem.lastElementChild.style.transition = "padding-left 3s linear";
}
