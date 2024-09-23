//Task 1: Create an Employees Array of Employee Objects

const employees = [
    { name: 'Allison', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Bill', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'Clyde', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Don', shifts: [{ day: 'Friday', hours: 8 }] }
];


// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`);
        employee.shifts.forEach(shift => {
    console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    })};


