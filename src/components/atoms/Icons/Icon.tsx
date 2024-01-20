import React, { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

interface IconProps {
  name: string;
  className: React.ComponentProps<"i">["className"];
  size: number;
  active: boolean;
  style?: CSSProperties;
  onClick?: VoidFunction;
}
export default function Icon({ onClick, name, className, size, active, style }: IconProps) {
  return (
    <i
      onClick={onClick}
      className={twMerge(`bi bi-${name} opacity-${active ? "1" : "70"}`, className)}
      style={{ fontSize: size, ...style}}
    ></i>
  );
}

Icon.defaultProps = {
  classes: "",
  size: 24,
  active: false,
  style: {},
  onclick: () => {},
};
