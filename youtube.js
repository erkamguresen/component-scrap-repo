// function(){
//     var regexp %3D new RegExp(
//         %2FplayerCaptionsTracklistRenderer.*%3F(
//             youtube.com%5C%2Fapi%5C%2Ftimedtext.*%3F
//             )
//     "%2F
//     )
//     %3B%0Avar match %3D regexp.exec
//     (document.body.innerHTML)%3B%0Aif (!match) %7B%0A
//     alert ("No captions found")%3B%0A
//     return%3B%0A%7D%0Avar url %3D regexp.exec(document.body.innerHTML)
//     %5B1%5D%3B%0Aopen("http%3A%2F%2Ftechleadpro.com%2Fytcaption%2Fcaption.php%3Furl%3D" %2B encodeURIComponent(url))%3B }

function getSubTitle() {
  var regexp = new RegExp(
    /playerCaptionsTracklistRenderer.*?(youtube.com\/api\/timedtext.*?)"/
  );
  var match = regexp.exec(document.body.innerHTML);
  if (!match) {
    alert("No captions found");
    return;
  }
  var url = regexp.exec(document.body.innerHTML)[1];
  open(
    "http://techleadpro.com/ytcaption/caption.php?url=" +
      encodeURIComponent(url)
  );
}
