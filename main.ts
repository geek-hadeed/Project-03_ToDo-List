import chalk from "chalk";
import inquirer from "inquirer";

// inquirer
// array
// function
//operators

const todos: string[] = [];

async function createtodo(todos: string[]) {
  do{  let ans = await inquirer.prompt({
    message: "",
    name: "operation",
    type: "list",
    choices: ["Add", "Update", "View", "Delete", "Exit"],
  });

  if (ans.operation === "Add") 
  {
    let add = await inquirer.prompt({
      message: "Add Todos",
      name: "addtodo",
      type: "input",
    });
    todos.push(add.addtodo);
    todos.forEach((todo) => console.log(todo));
  }
  else if (ans.operation === "Update") 
  {
    let update = await inquirer.prompt({
      message: "Update Todos",
      name: "updatetodo",
      type: "list",
      choices: todos.map((item) => item),
    });

    let add = await inquirer.prompt({
      message: "Add Todos",
      name: "addtodo",
      type: "input",
    });

    let newtodo = todos.filter(val => val !== update.addtodo);
    todos = [... newtodo,add.addtodo]
    todos.forEach((todo) => console.log(todo));
  } 

  else if (ans.operation === "View") 
  {
    console.log(chalk.bgGray.yellowBright("`````````Viewing Todos````````````````"));

    if (todos.length === 0) 
    {
    console.log("No Todos to show");
    }
    else
    {
      todos.forEach((todo) => console.log(todo));
    }
  }

  else if (ans.operation === "Delete")
  {
    let deleted = await inquirer.prompt({
      message: "Update Todos",
      name: "deletetodo",
      type: "list",
      choices: todos.map((item) => item),
    });

  let newtodo = todos.filter(val => val !== deleted.deletetodo);
  todos = [... newtodo]
  todos.forEach((todo) => console.log(todo));
  }

  else if (ans.operation === "Exit") 
  {
    console.log("Exiting...");
    process.exit(0);
  }

  else 
  {
    console.log("Invalid Choice");
  }

}
while(true)
}

createtodo(todos);
