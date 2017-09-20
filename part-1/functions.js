let date = new Date()

function weekday(date) {
  if (!date instanceof Date) {
    throw new Error("not an object")
  } else {
    let day = date.getDay()
    let days = ["sun", "mon", "tues", "weds", "thu", "fri", "sat"]

    return days[day]
  }
}

function snippet(string, maxlength) {
  if (!(typeof string === "string")) {
    throw new Error("first argument must be a string ")
  }
  if (!(typeof maxlength === 'number')) {
    throw new Error("second argument must be a number")
  }
  if (string.length > maxlength) {
    return string.substring(0, maxlength) + "..."
  } else {
    return string
  }
}
snippet("i am kind", 5)

function numProps(obj) {
  let key = Object.keys(obj).length
  return key
}

function filterBetween(arr, min, max) {
  if (!Array.isArray(arr)) {
    throw new Error("first input field must be an array")
  } else {
    var number = [1, 7, 5, 8, 9, 10, 100, 200, 150]
    var result = arr.filter(number => (number >= min && number <= max))
    return result
  }
}
var number = [1, 7, 5, 8, 9, 10, 100, 200, 150]
console.log(filterBetween(number, 7, 100))

module.exports = {
  weekday,
  snippet,
  numProps
}










module.exports = {
  weekday,
  snippet,
  numProps,
  filterBetween

}