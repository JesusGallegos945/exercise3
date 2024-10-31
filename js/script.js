let firstName = 'Jesus'
let lastName = 'Gallegos'
let country = 'Mexico'
let city = 'Playa del Carmen'
let age = 19
let isMarried = false
let year = 2005

console.log("firstName:", typeof firstName)
console.log("lastName:", typeof lastName)
console.log("country:", typeof country)
console.log("city:", typeof city)
console.log("age:", typeof age)
console.log("isMarried:", typeof isMarried)
console.log("year:", typeof year)

console.log("'10' == 10:", typeof '10' === typeof 10)

console.log("parseInt('9.8') == 10:", parseInt('9.8') === 10)


console.log("4 > 3:", 4 > 3)
console.log("4 >= 3:", 4 >= 3)
console.log("4 < 3:", 4 < 3)
console.log("4 <= 3:", 4 <= 3)
console.log("4 == 4:", 4 == 4)
console.log("4 === 4:", 4 === 4)
console.log("4 != 4:", 4 != 4)
console.log("4 !== 4:", 4 !== 4)
console.log("4 != '4':", 4 != '4')
console.log("4 == '4':", 4 == '4')
console.log("4 === '4':", 4 === '4')

let now = new Date();
console.log("The year today is:", now.getFullYear())
console.log("The current month is:", now.getMonth() + 1) // 
console.log("The date today is:", now.getDate())
console.log("The day today as number is:", now.getDay())
console.log("Rhe current hour is:", now.getHours())
console.log("The current minutes are:", now.getMinutes())
console.log("The second from January 1, 1970 to the present is:", Math.floor(Date.now() / 1000))

let base = prompt("Enter the measurement of the base of the triangle:")
let height = prompt("Enter the height of the triangle:")
let area = 0.5 * base * height
console.log(`The area of the triangle is: ${area}`)

let sideA = parseFloat(prompt("Enter the measure of side A of the triangle:"))
let sideB = parseFloat(prompt("Enter the measure of side B of the triangle:"))
let sideC = parseFloat(prompt("Enter the measure of side C of the triangle:"))
let perimeter = sideA + sideB + sideC
console.log(`The perimeter of the triangle is: ${perimeter}`)