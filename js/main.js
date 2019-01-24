
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
function sp(){
  let speed = connection.downlink;
  document.getElementById('dspeed').innerHTML = "Down Speed :"+connection.downlink+"Mb/s</>";
}
setInterval(sp(),500);
