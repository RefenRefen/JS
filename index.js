
//*********** closure : privation of a variable


function Counter(){
    var counter = 0

    function increase(){
        counter++
        console.log(counter)
    }
    function decrease(){
        counter--
        console.log(counter)
    }

    return {
        increase,
        decrease: decrease
    }

}

var myCounter = Counter()

console.log(myCounter)
//*********** closure : second example


// var counter = 0
//
// function increase(){
//     counter++
//     console.log(counter)
// }
// function decrease(){
//     counter--
//     console.log(counter)
// }

//*********** closure : first example
// function func (a) {
//     return function(b){
//         return function (c) {
//             return a+b+c
//         }
//     }
// }
//
// var result = func(2)(5)(7)
// console.log(result)
//
// var add10 = func(10)
// console.log(add10(2)(6))

// ************* Global variable

// window.b = 'Hasan'

// Or Without any keyword

// c  = 'Qoli'

// ************** Kebab-case to camelCase
// برای پیمایش اشیائی که هیچ ایده ای در مورد طول و انتهای آن نداریم تابع بازگشتی خوب است
// var obj = {
//     'first-name': 'ali',
//     'friends-list': [null, {'last-name':'mousavi'}, 'Hasan-Qoli'],
//     'my-family':{}
// }


// // Recursive functions ****************
//
// function fuctorial(n){
//     return n===1 ? 1 : n * fuctorial(n-1)
// }
//
// console.log(fuctorial(6))
//
// // *********************


// function sum(a, b) {
//     return a + b
// }
//
// function mul(a, b) {
//     return a * b
// }
//
// function noop() {}
//
// // var noop = function () {}
//
// // const noop = () => {}
//
// function operate(a, b, operator = noop) {
//     // if(operator){
//     //     return operator(a,b)
//     // }
//
//     return operator(a, b)
// }
//
// console.log(operate(2, 3))

// function operate(operator, a, b) {
//     console.log(operator, a, b)
//
//     return operator(a, b)
// }

// var a = operate(mul, 2, 5)

// console.log(a)
// a = 2
// b = 8
//
// var z = operate(function (a, b) {
//     return a ** b
// }, a, b)
// console.log(z)

// var func = function (){
//     console.log('salam')
// }
//
// func()


//نکته : آرگیومنت هیچ کاری با متغییرهای تعریف شده در پروتوتایپ ندارد
// و فقط چیزهایی به تابع ارسال میشود را در نظر میگیرد
// function  sum(a , b, c=10, d =8){
//     var result = 0
//
//     for (var i = 0; i<arguments.length; i++){
//         result = result + arguments[i]
//     }
//
//     return result
// }
//
// console.log(sum(3, 4, 10))
//


// function  sum(a, b= 0, c){
//     c = c ? c : 0
//     c = c || 0
//     return a + b + c
//
// }
//
// console.log(sum(3, 4))

// function func(){
//     console.log('salam')
// }
// func()

// function sum(a, b){
//     var result = a + b
//     return result
// }
//
// console.log(sum(2,4))

// var person = {
//     name:'Ali',
//     family: 'Mousave',
//     age: 32
// }
// for(var key in person){
//     console.log(key, person[key])
// }
// console.log('name' in person)

// for (var ali of 'salam'){
//     console.log(ali)
// }


// var friends = ["Alie", 'Eli', 'Qoli', 'Fatemeh']
// for (var friend of friends){
//     console.log(friend)
// }


// for(var i = 0; i<10; i++){
//
//     if(i%2)
//         continue
//     console.log(i)
// }


// var i = 0
// do {
//     console.log('salam')
//     i+=1
// }while(i<10)


// var i = 0
// while(i<10){
//     console.log('salam')
//     i+=1
// }


// for (var i =0; i<10; i++) {
//     console.log(i+' salam')
// }


// var a = 10
// a===10 ? console.log('Is 10'): console.log('Is not 10')
// console.log(33)
// var variable = "a"
//
// switch (variable){
//     case 'A':
//     case 'a':
//         console.log('Is A')
//         break
//
//     case 'B':
//         console.log('Is B')
//         break
//
//     default:
//         console.log('Is not A,B')
// }
//


// if (3) console.log('salam')


// var a = 10
//
// if (a < 10){
//     console.log('hi')
// }
//
//
//
// if ('') {
//     console.log('salam')
// } else {
//     console.log('Hello')
// }


// var person = {
//     // name: "Ali Mousavi",
//     age: 30
// }
//
// console.log('welcome ' + (person.name|| 'Unknown User'))


// console.log(3**3)
// console.log(2)
// var arr = [12, 'salam', true, {name:'Ali'}, [1,3]]
// console.log(arr[arr.length-1])

// var friends = ['Ali', 'Eli', 'Qoli', 'Fatemeh']
//
// console.log(friends[2])
//
// friends[0] = 'Hasan'
//
// console.log(friends)

// var firstName = 'Alireza';
// var lastName = 'Abbasi';


// var a = 33
// var b = a
// console.log(a,b)
// b = 44
// console.log(a, b)


// var person = {
//     firstName: 'Ali',
//      lastName: 'nousavi',
//     age: 32,
//     gender: true,
//     family: {
//         father: 'Mohammad',
//         mother: 'Hajar',
//         wifi: 'Eli',
//         children: ['Mahsa']
//     },
//     friends: ['Ali', 'Qoli', 'Eli']
//
// }
//
// var person2 = person
//
// console.log(person.firstName)
// console.log(person2.firstName)
//
// person2.firstName = 'Hasan'
//
// console.log(person.firstName)
// console.log(person2.firstName)

// var setting = {
//     nichname: 'firstName'
// }
//
//
//
// console.log('Welcome ' + person[setting.nichname])

// var propertyName = 'firstName'
// console.log(person.firstName)
// console.log(person[propertyName])
