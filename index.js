// Write your solution in this file!
// declare global variable customerName = "bob"
var customerName = "bob"

// write a function upperCaseCustomerName that accesses global variable customerName and uppercases it. should return "BOB"
function upperCaseCustomerName() {
    let upperCaseName = customerName.toUpperCase()
    return upperCaseName
}
// write a function setBestCustomer that when called, declares a global variable and assigns it to be 'not bob'

// see the consequences of declaring a variable in global scope, by writing a new function overwriteBestCustomer that changes that bestCustomer variable

// now declare a constant in global scope called leastFavoriteCustomer, be sure to assign it some initial value.

// now write a function called changeLeastFavoriteCustomer that attempts to change that constant - notice what Js does when you try to change the constant.