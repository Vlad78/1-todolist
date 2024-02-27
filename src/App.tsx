import "./App.css";
import TodoList, { TaskType } from "./TodoList";

function App() {
  const title1 = "What To Learn";
  const title2 = "What To Buy";

  const tasks_1: TaskType[] = [
    { id: 1, title: "HTML & CSS", isDone: true },
    { id: 2, title: "JS & TS", isDone: true },
    { id: 3, title: "React & Redux", isDone: false },
  ];

  const tasks_2: TaskType[] = [
    { id: 4, title: "Water", isDone: false },
    { id: 5, title: "Milk", isDone: true },
    { id: 6, title: "Bread", isDone: true },
  ];

  const tasks_3: TaskType[] = [];

  return (
    <div className="App">
      <TodoList title={title1} tasks={tasks_1} />
      <TodoList title={title2} tasks={tasks_2} />
      <TodoList title={title2} tasks={tasks_3} />
    </div>
  );
}

export default App;
