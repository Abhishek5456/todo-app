import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import TodoItems from './components/todoItems';

function App() {
  const todoItems = [
    {name: 'Buy Milk', dueDate: '4/10/2023'},
    {name: 'Go to College', dueDate: '4/11/2023'},
    {name: 'This task', dueDate: '6/11/2023'}
  ];

  return (
    <center className ='todo-contaniner'>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
    </center>
  )
}

export default App
