// Code your solution here
function findMatching(drivers, name){
    const driverList = drivers.filter(driverName => driverName === name || driverName.toLowerCase() === name.toLowerCase())
    return driverList;
}

function fuzzyMatch(drivers, letters){
    const driverList = drivers.filter(driverName => driverName.startsWith(letters))
    //const driverList = drivers.filter(driverName => driverName.slice(0, letters.length) === letters)
    return driverList;
}

function matchName(drivers, name){
    //const driverList = drivers.filter(driverName => driverName.matchName(name))
    const driverList = drivers.filter(driver => driver.name === name)
    return driverList;
}

