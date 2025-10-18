import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { Task } from "./models/Task";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // const fetchTasks = async () => {
    //   const response: Response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //     {
    //       method: "GET",
    //     }
    //   );
    //   const data = await response.json();
    //   setTasks(data);
    // };
    // // Call this function to fetch tasks from JsonPlaceholder API.
    // // fetchTasks();
  }, []);

  return (
    <div className="w-screen h-screen bg-sky-500 flex justify-center p-6">
      <div className="w-[500px] text-center space-y-4">
        <Title>Gerenciador de Tarefas</Title>

        <AddTask onAddTaskClick={onAddTaskSubmit} />

        <TaskList
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );

  function onAddTaskSubmit(title: string, description: string) {
    const newTask: Task = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId: string) {
    const newTasks = tasks.map((task: Task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId: string) {
    const newTasks = tasks.filter((task: Task) => task.id != taskId);
    setTasks(newTasks);
  }
}

export default App;
