module.exports = truncateToMultiple

// Determine how many times a multiple can go into an array,
// round down then multiply and splice by that amount
function truncateToMultiple(array, multiple) {
  return array.splice(0, Math.floor(array.length / multiple) * multiple)
}
