let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function divByFive(num) {
  return num % 2 === 0
}
let arrNewNum = arrNum.filter(divByFive)
console.log(arrNewNum)


