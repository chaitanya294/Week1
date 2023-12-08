/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
	constructor(){
		this.index = -1;
		this.list = new Map();
	}
	add(todo){
		this.index++;
		this.list.set(this.index, todo);
	}
	remove(indexOfTodo){
		this.list.delete(indexOfTodo);
	}
	update(index, updatedTodo){
		this.list.set(index, updatedTodo);
	}
	getAll(){
		let arr = [];
		for (const [key,value] of this.list) {
			arr.push(value);
		}
		return arr;
	}
	get(index){
		return this.list.get(index);
	}
	clear(){
		this.list.clear();
	}
}
todoList = new Todo();
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');

todoList.remove(1);
todoList.remove(0);
todoList.remove
console.log(todoList.getAll());
module.exports = Todo;
