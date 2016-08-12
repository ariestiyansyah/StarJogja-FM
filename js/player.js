function toggleState(item, soundobj) {
  var thissound = document.getElementById(soundobj);
  if (item.className == "play") {
    thissound.play();
    //item.className = "";
    item.className = "pause";
  } else {
    thissound.pause();
    //item.className = "";
    item.className = "play";
  }
}
