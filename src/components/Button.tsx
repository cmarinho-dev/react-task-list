import type { JSX } from "react";

function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element {
  return (
    <button
      {...props}
      className={`flex items-center gap-2 px-4 transition p-2 rounded-md text-white bg-sky-500 text-left whitespace-nowrap overflow-hidden text-nowrap ${
        props.className?.includes("bg-") ? props.className : " hover:bg-sky-600"
      } ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
