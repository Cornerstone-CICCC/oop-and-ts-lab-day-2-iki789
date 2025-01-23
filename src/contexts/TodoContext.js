export class TodoContext {
  constructor() {
    this.todos = [];
    this.listeners = [];
  }

  addTodo(todo) {
    this.todos.push({
      id: self.crypto.randomUUID(),
      desc: todo,
      completed: false,
    });
    this.notifyListeners();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.notifyListeners();
  }

  markCompleted(id) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.todos));
  }
}
