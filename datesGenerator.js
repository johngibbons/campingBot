module.exports = () => {
  const fridayNum = 5
  const date = new Date()
  const diff = date.getDay() - fridayNum
  const fridaysArray = []
  let first = true
  while (date < new Date().setMonth(new Date().getMonth() + 6)) {
    let friday
    if (first) {
      friday = diff > 0
        ? date.setDate(date.getDate() + 6)
        : date.setDate(date.getDate() + ((-1) * diff))
    } else {
      friday = date.setDate(date.getDate() + 7)
    }
    first = false
    fridaysArray.push(new Date(friday).toDateString())
  }
  return fridaysArray
}
