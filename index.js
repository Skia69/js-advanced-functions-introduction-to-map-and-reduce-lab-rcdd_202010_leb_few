// Your code here
const mapToNegativize = (src) => {
  let result = []
  for (let item of src) {
    result.push(-1 * item)
  }
  return result
}

const mapToNoChange = (src) => {
  let result = []
  for (let item of src) {
    result.push(item)
  }
  return result
}

const mapToDouble = (src) => {
  let result = []
  for (let item of src) {
    result.push(2 * item)
  }
  return result
}

const mapToSquare = (src) => { 
  let result = []
  for (let item of src) {
    result.push(item * item)
  }
  return result
}

const reduceToTotal = (src, startingPoint = 0) => {
  let total = startingPoint
  for (let item of src) {
    total += item
  }
  return total
}

const reduceToAllTrue = (src) => {
  for (let item of src) {
    if (!item) return false
  }
  return true
}

const reduceToAnyTrue = (src) => {
  for (let item of src) {
    if (item) return true
  }
  return false
}