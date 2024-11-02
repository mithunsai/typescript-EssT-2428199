interface Item{
    id: number,
    title: string,
    status: CompletionStatus,
    completedOn?: Date
}

enum CompletionStatus{
    Done= "done",
    InProgress= "in progress",
    ToDo= "todo",
}

const todoItems = [
    { id: 1, title: "Learn HTML", status: CompletionStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: CompletionStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: CompletionStatus.ToDo },
]

function addTodoItem(todo:string):Item {
    const id:number = getNextId(todoItems)

    const newTodo:Item = {
        id,
        title: todo,
        status: CompletionStatus.ToDo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId(items): number {
    return items.reduce((max:number, x:Item) => x.id > max ? max : x.id, 0) + 1
}

const newTodo:Item = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))