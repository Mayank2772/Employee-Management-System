
const employees = [
    {
        id: 1,
        firstname: "Mayank",
        email: "Mayank@gmail.com",
        password: "Mayank123",
        taskStats: {
            active: 0,
            newTask: 0,
            completed: 0,
            failed: 0
        },
        tasks: [
        ]
    },
    {
        id: 2,
        firstname: "Priya",
        email: "Priya@gmail.com",
        password: "Priya123",
        taskStats: {
            active: 0,
            newTask: 0,
            completed: 0,
            failed: 0
        },
        tasks: [
        ]
    },
    {
        id: 3,
        firstname: "Karan",
        email: "Karan@gmail.com",
        password: "Karan123",
        taskStats: {
            active: 0,
            newTask: 0,
            completed: 0,
            failed: 0
        },
        tasks: [
        ]
    },
    {
        id: 4,
        firstname: "Sneha",
        email: "Sneha@gmail.com",
        password: "Sneha123",
        taskStats: {
            active: 0,
            newTask: 0,
            completed: 0,
            failed: 0
        },
        tasks: [
        ]
    },
    {
        id: 5,
        firstname: "Rohan",
        email: "Rohan@gmail.com",
        password: "Rohan123",
        taskStats: {
            active: 0,
            newTask: 0,
            completed: 0,
            failed: 0
        },
        tasks: [
        ]
    }
];


const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}