import { ArrowRightToLine, CheckIcon, Trash } from "lucide-react";
import { Task } from "../models/Task";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function TaskList({
  tasks,
  onTaskClick,
  onDeleteTaskClick,
}: {
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
  onDeleteTaskClick: (taskId: string) => void;
}) {
  const navigate = useNavigate();
  let onSeeDetailsClick = (task: Task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  };

  return (
    <>
      {tasks.length > 0 && (
        <ul className="flex flex-col p-4 bg-sky-100 rounded-md shadow-2xl gap-3">
          {tasks.map((task) => (
            <li className="flex gap-2 text-white">
              <Button
                onClick={() => onTaskClick(task.id)}
                className={`w-full ${task.isCompleted && "line-through"}`}
              >
                {task.isCompleted && <CheckIcon />}
                {task.title.substring(0, 35)}
                {task.title.length > 35 && " ..."}
              </Button>
              <Button onClick={() => onSeeDetailsClick(task)}>
                <ArrowRightToLine />
              </Button>
              <Button
                onClick={() => onDeleteTaskClick(task.id)}
                className="hover:bg-red-400"
              >
                <Trash />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TaskList;
