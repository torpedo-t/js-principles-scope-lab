// Write your solution in this file!
// declare global variable customerName = "bob"
var customerName = "bob"

// write a function upperCaseCustomerName that accesses global variable customerName and uppercases it. modifies customerName variable to "BOB"
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}
// write a function setBestCustomer that when called, declares a global variable and assigns it to be 'not bob'
function setBestCustomer() {
    window.bestCustomer = 'not bob'
}
// see the consequences of declaring a variable in global scope, by writing a new function overwriteBestCustomer that changes that bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
// now declare a constant in global scope called leastFavoriteCustomer, be sure to assign it some initial value.
const leastFavoriteCustomer = 'tom'
// now write a function called changeLeastFavoriteCustomer that attempts to change that constant - notice what Js does when you try to change the constant.
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'tim'
}