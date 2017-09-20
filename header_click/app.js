var leftOffset = 0
var topOffset = 0
var speedUp = 1
var clicks = 0

function animateHeader() {
  $('#heading').offset({ left: leftOffset, top: topOffset})
  if (topOffset === 0 && leftOffset !== 200) {
    leftOffset++
  } else if (leftOffset === 200 && topOffset !== 200) {
    topOffset++
  } else if (topOffset === 200 && leftOffset !== 0) {
    leftOffset--
  } else if (leftOffset === 0 && topOffset !== 0) {
    topOffset--
  }
}

  var animation = setInterval(animateHeader, 10)
  $('#heading').click((event) => {
    clicks++
    clearInterval(animation)
    $('#heading').text('Click: ' + clicks)
    animation = setInterval(animateHeader, (10 - speedUp))
    speedUp++
    if (clicks > 9) {
      clearInterval(animation)
      $('#heading').text('You win!')
    }
  })
