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

// let testobj = {
//   "pg": "curry",
//   "sg": "thompson",
//   "sf": "durant"
// }


module.exports = {
  weekday,
  snippet,
  numProps
}










module.exports = {
  weekday,
  snippet

}