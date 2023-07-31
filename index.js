/* Your Code Here */

function createEmployeeRecord(arr) {
    const employeeObject = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employeeObject
}

function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
    const dateArray = dateStamp.split(" ")
    const hour = parseInt(dateArray[1])
    
    this.timeInEvents.push({
        type: "TimeIn",
        hour: hour,
        date: dateArray[0]
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    const dateArray = dateStamp.split(" ")
    const hour = parseInt(dateArray[1])
    
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: hour,
        date: dateArray[0]
    })
    return this
}

function hoursWorkedOnDate(date) {
    const inEvent = this.timeInEvents.filter((timeInObject) => timeInObject.date === date)[0]
    const outEvent = this.timeOutEvents.filter((timeOutObject) => timeOutObject.date === date)[0]

    return (outEvent.hour - inEvent.hour) /100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
    for(const item of srcArray) {
        if (item.firstName === firstName) {
            return item
        }
    }
}

function calculatePayroll(array) {
    return array.reduce((acc, employee) => acc + allWagesFor.call(employee), 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

