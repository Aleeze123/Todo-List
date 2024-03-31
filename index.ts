#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// 1) todos Array.
// 2) Create function.
// 3) Operation.

let todos : string[]=[]

console.log(chalk.magenta.bold("\n\t  WELCOME TO TODO List \n"));
async function createTodo (todos:string[]){
    let condition =true;
while(condition){

        let answer = await inquirer.prompt([
            {
                type:"list",
                message:chalk.yellowBright("What you want to do?"),
                name:"wantToDo",
                choices:["add","update","view","delete","exit"]
            },
         ]);  
         if(answer.wantToDo === "add"){
            let addTodo = await inquirer.prompt([
                {
                    type:"input",
                    message:"add item..",
                    name:"todo",
                },
            ]);
            todos.push(addTodo.todo)
            console.log(todos)
         }
         if(answer.wantToDo === "update"){
            let updateTodo = await inquirer.prompt([
                {
                    type:"list",
                    message:"select item for update",
                    name:"todo",
                    choices:todos.map(item => item),
                }, 
            ]);   
            // updates
                let addTodo = await inquirer.prompt([
                    {
                        type:"input",
                        message:"update item..",
                        name: "todo",
                    },
                ]);
        
        let newTodos = todos.filter(val => val !== updateTodo.todo)
        todos=[...newTodos, addTodo.todo]
        console.log(todos)
         }
         
         if(answer.wantToDo === "view"){
            console.log(todos)
         }
         if(answer.wantToDo === "delete"){
            let deleteTodo = await inquirer.prompt([
                {
                    type: "list",
                    message:"select item for delete",
                    name:"todo",
                    choices:todos.map(item => item)
                },
            ]);
            let newTodos = todos.filter(val => val !== deleteTodo.todo)
            todos=[...newTodos]
            console.log(todos);
        }  
    if(answer.wantToDo === "exit"){
        console.log(chalk.magenta.bold("Goodbye!"))
        break;
    }      }

    }
   
        
    createTodo(todos)
    