// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const driversArray = ["Driver1", "Driver2", "Driver3", "Driver4"];
const firstTwoDrivers = returnFirstTwoDrivers(driversArray);

console.log(firstTwoDrivers);

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const driversArray1 = ["Driver1", "Driver2", "Driver3", "Driver4"];
const lastTwoDrivers = returnLastTwoDrivers(driversArray1);
console.log(lastTwoDrivers);


const selectingDrivers = [firstTwoDrivers, lastTwoDrivers];
console.log(selectingDrivers);
//question 4 
function createFareMultiplier(integer){
    return function(fare) {
        return fare * integer;
      };
    };
    
    const doubleFare = createFareMultiplier(2);
    const tripleFare = createFareMultiplier(3);
    
    const initialFare = 10;
    const fareAfterDoubling = doubleFare(initialFare);
    const fareAfterTripling = tripleFare(initialFare);
    
    console.log(fareAfterDoubling); 
    console.log(fareAfterTripling); 

//question 5
   const fareDoubler = createFareMultiplier(2);

const doubledFare = fareDoubler(initialFare);

console.log(doubledFare);
   
//question 6 
const faretriple = createFareMultiplier(3)
const tripleFare1 = faretriple(initialFare)
console.log(tripleFare1)

//question 7 
const selectFunction = [lastTwoDrivers , firstTwoDrivers]
function selectDiffrentDrivers(drivers,selectFunction ){
    return selectFunction(drivers)
}

console.log(selectFunction)