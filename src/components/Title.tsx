import type React from "react";
import type { JSX } from "react";

function Title(props: React.PropsWithChildren): JSX.Element {
  return (
    <h1 className="text-3xl text-sky-100 font-bold text-center">
      {props.children}
    </h1>
  );
}
export default Title;
