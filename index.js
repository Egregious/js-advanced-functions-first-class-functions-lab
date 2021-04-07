// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function fareQuad(fareMultiplier) {
        return fare * fareMultiplier
    }
}

/* function fareDoubler(fare) {
    return fare * 2
} */

/* function fareDoubler(fare) {
    const multiplier = createFareMultplier()
        return multiplier(fare)
} */

const fareDoubler = (fare, createFareMultiplier) => {
    return createFareMultiplier(fare)
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
}



