import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddTask({
  onAddTaskClick: onAddTaskSubmit,
}: {
  onAddTaskClick: (title: string, description: string) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let isSubmitAllowed = false;

  useEffect(() => {
    if (!title.trim() || !description.trim()) {
      isSubmitAllowed = false;
      return;
    }
    isSubmitAllowed = true;
  }, [title, description]);

  return (
    <div className="flex flex-col gap-4 p-6 bg-sky-100 rounded-md shadow-2xl">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <Button
        onClick={() => {
          if (!isSubmitAllowed)
            return alert(
              "Preencha todos os campos antes de adicionar a tarefa."
            );
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </Button>
    </div>
  );
}

export default AddTask;
