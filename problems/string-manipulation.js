// reverse string
function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('Hello World!'))

function reverseStringManual(str) {
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result
}

console.log(reverseStringManual('Hello World!'))

function reverseStringRecursive(str) {
  if (str.length < 1) return str

  return str.slice(-1) + reverseStringRecursive(str.slice(0, -1))
}

console.log(reverseStringRecursive('Hello World!'))

function reverseUnicodeString(str) {
  return [...str].reverse().join('')
}

console.log(reverseUnicodeString('👋🌍'))

// check palindrome
function isPalindromeBasic(str) {
  return str.split('').reverse().join('') === str
}

console.log(isPalindromeBasic('ata'))

function isPalindromeManual(str) {
  let reversedString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }

  return reversedString === str
}

console.log(isPalindromeManual('ata'))

function isPalindromeAdvanced(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  if (str.length <= 1) return true

  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }

    left++
    right--
  }

  return true
}

console.log(isPalindromeAdvanced('ata'))

// check anagram
function isAnagram(str1, str2) {
  const normalize = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  let normalizedStr1 = normalize(str1)
  let normalizedStr2 = normalize(str2)

  if (normalizedStr1.length !== normalizedStr2.length) return false

  for (let i = 0; i < normalizedStr1.length; i++) {
    if (normalizedStr2.includes(normalizedStr1[i])) {
      normalizedStr2 = normalizedStr2.replace(normalizedStr1[i], '')
    } else {
      return false
    }
  }

  return !normalizedStr2.length
}

function isAnagramFaster(str1, str2) {
  const normalize = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const normalizedStr1 = normalize(str1)
  const normalizedStr2 = normalize(str2)

  return normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('')
}

console.group()
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))
console.log(isAnagram("Dormitory", "Dirty room"))
console.log(isAnagram("aab", "abb"))
console.log(isAnagramFaster("listen", "silent"))
console.log(isAnagramFaster("hello", "world"))
console.log(isAnagramFaster("Dormitory", "Dirty room"))
console.log(isAnagramFaster("aab", "abb"))