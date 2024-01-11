/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  todoList=[]
  add(data){
try {
  this.todoList.push(data)
  
} catch (error) {
  console.log( error.message )
}


  }
  remove(index){
    if(this.todoList.length>0){
    this.todoList.splice(index, 1)
  }
    else{
    throw new Error("Couldn't remove")
    }
  }
  update(index,data){
    this.todoList[index] = data
  }
  getall(){
    for(var i=0;i<this.todoList.length;i++){
      console.log(`the ${i} todo is `,this.todoList[i])
    }
  }
  get(index){
    console.log(`the value at ${index} is ${this.todoList[index]}`)
  }
  clear(){
    this.todoList.splice(0,this.todoList.length)
    
  }
}
module.exports = Todo;
todo=new Todo();
todo.add("wake up")
todo.add("brush teeth")
todo.add("bath and come")
todo.add("have break fast")
todo.add("watch youtube")
todo.add("pack your things ")
todo.update(0,"wake up and brush teeth")
todo.getall()
todo.clear()
todo.getall()
// let arr =[34,5,5,45,34,54,5]
//  function clear(arr){
//     arr.splice(0,arr.length)
//   }
// clear(arr)
// console.log(arr)