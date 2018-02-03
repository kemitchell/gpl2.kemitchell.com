document.addEventListener('DOMContentLoaded', function () {
  // Remove class "hidden" from <nav>.
  document
    .getElementsByTagName('nav')[0]
    .className = ''
  // Add click handler.
  document
    .getElementById('toggle')
    .addEventListener('click', toggle)
})

var showingCommentary = true

function toggle (event) {
  // Flip the global state flag.
  showingCommentary = !showingCommentary
  // Toggle elements.
  toggleCommentary(showingCommentary)
  // Update button text.
  event.target.innerText = showingCommentary
    ? 'Hide Commentary'
    : 'Show Commentary'
}

function toggleCommentary (visible) {
  // Toggle <aside> elements.
  var asides = document.getElementsByTagName('aside')
  var className = visible ? '' : 'hidden'
  var length = asides.length
  var index
  for (index = 0; index < length; index++) {
    asides[index].className = className
  }

  // Toggle elements with "commentary" class.
  var other = document.getElementsByClassName('commentary')
  length = other.length
  for (index = 0; index < length; index++) {
    other[index].className = 'commentary ' + className
  }
}
