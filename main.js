function onclicK() {
  document.getElementById('bulb2').style.display = "block";
document.getElementById('on-circle').style.transform = 'translateX(140px)';
document.getElementById('off-circle').style.transform = 'translateX(5px)';
}

function offclicK() {
  document.getElementById('bulb2').style.display = "none";
  document.getElementById('off-circle').style.transform = 'translateX(140px)';
  document.getElementById('on-circle').style.transform = 'translateX(5px)';

}
