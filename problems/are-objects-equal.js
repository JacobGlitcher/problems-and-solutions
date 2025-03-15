function areObjectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true

  if (obj1 === null || obj2 === null) return false
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

  for (const item in obj1) {
    if (!areObjectsEqual(obj1[item], obj2[item])) return false
  }

  return true
}

// const obj1 = {a: 1, b: [1, {a: 1}, [5, 2], {a: 1, b: null, c: [4, [1]]}], c: {d: 3}}
// const obj2 = {a: 1, b: [1, {a: 1}, [5, 2], {a: 1, b: null, c: [4, [1]]}], c: {d: 3}}
// const obj3 = {a: 1}
//
// const obj4 = { date: new Date("2023-01-01") }
// const obj5 = { date: new Date("2023-01-01") }
//
// console.log(areObjectsEqual(obj1, obj2))