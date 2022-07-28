function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
// declaring variable types
// enum - symbolic name for set of values
// treated as data types
// make for clearer, more readable code when meaningful names are used
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus); // returns 2
console.log(ContractStatus[employeeStatus]); // returns Temp
