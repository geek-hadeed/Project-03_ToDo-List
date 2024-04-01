import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "What do you want to do?",
            choices: ["Add Task", "Show Tasks", "Mark As Completed", "Delete Task", "Exit"],
        },
    ]);
    switch (action) {
        case "Add Task":
            await addTask();
            break;
        case "Show Tasks":
            showTasks();
            break;
        case "Delete Task":
            await deleteTask();
            break;
        case "Mark As Completed":
            await markAsCompleted();
            break;
        case "Exit":
            console.log("Goodbye!");
            return;
    }
}
mainMenu();
let addTask = async () => {
    let { task } = await inquirer.prompt({
        name: "task",
        type: "input",
        message: "Enter the task:",
    });
    todoList.push({ task, completed: false });
    console.log(chalk.green("Task Added Successfully"));
};
let showTasks = () => {
    console.log("Todo List");
    todoList.forEach((item, index) => {
        console.log(`${index + 1}.[${item.completed ? 'x' : ''}] ${item.task}`);
    });
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
};
let deleteTask = async () => {
};
let markAsCompleted = async () => {
};
