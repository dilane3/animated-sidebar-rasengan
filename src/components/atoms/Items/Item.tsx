import { twMerge } from "tailwind-merge";
import Icon from "../Icons/Icon";

type Props = {
  icon: string;
  label: string;
  open: boolean;
};

export default function Item({ icon, label, open }: Props) {
  return (
    <div className="flex items-center px-2 mt-2 hover:bg-secondary hover:cursor-pointer transition-all duration-200 rounded-lg p-2">
      <Icon name={icon} size={16} className="text-white" />
      <span
        className={twMerge(
          "ml-4 text-md font-urbanist font-normal text-nowrap",
          open ? "block" : "hidden"
        )}
      >
        {label}
      </span>
    </div>
  );
}
