import type { JSX } from "react";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return (
    <input
      className="border border-sky-300 outline-sky-400 px-4 py-2 rounded-md"
      {... props }
    />
  );
}

export default Input;
