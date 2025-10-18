import { Undo2 } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-sky-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex items-center justify-center relative text-sky-100 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center p-1 hover:bg-sky-600 hover:opacity-60 rounded-xl transition absolute left-0 top-0 bottom-0"
          >
            <Undo2 />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-sky-100 text-sky-600 p-4 rounded-md shadow-2xl">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
