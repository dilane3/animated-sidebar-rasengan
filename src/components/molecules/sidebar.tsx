import Image from "@rasenganjs/image";
import Icon from "../atoms/Icons/Icon";
import Item from "../atoms/Items/Item";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Sidebar() {
  // State
  const [open, setOpen] = useState(true);

  // Handlers
  const handleToggle = () => setOpen(!open);

  const handleOnFocus = () => setOpen(true);

  return (
    <aside
      className={twMerge(
        "relative flex flex-col justify-between h-full rounded-2xl bg-primary text-white p-4 transition-all duration-200",
        open ? "w-[230px]" : "w-[70px]"
      )}
    >
      <div>
        <div
          onClick={handleToggle}
          className="absolute -right-4 top-4  w-8 h-8 flex justify-center items-center rounded-full bg-[#3e4bff] cursor-pointer"
        >
          <Icon
            name="chevron-left"
            size={16}
            className={twMerge(
              "text-white transition-all duration-200",
              open ? "rotate-0" : "rotate-180"
            )}
          />
        </div>

        <div className="flex items-center px-2">
          <Icon name="box" size={24} className="text-white" />
          <span
            className={twMerge(
              "ml-4 text-lg font-urbanist text-nowrap",
              open ? "block" : "hidden"
            )}
          >
            Aurora Wealth
          </span>
        </div>

        <div className="relative mt-4">
          <Icon
            name="search"
            size={16}
            className="absolute left-2 top-2 text-white"
          />
          <input
            onFocus={handleOnFocus}
            className="w-full rounded-md px-2 py-[6px] pl-8 outline-none bg-secondary"
          />
        </div>

        <section className="w-full max-h-[400px] mt-4 mb-20">
          <Item icon="columns-gap" label="Dashboard" open={open} />

          <Item icon="bar-chart" label="Market Overview" open={open} />

          <Item icon="pie-chart" label="Analytics" open={open} />

          <Item icon="clipboard-data" label="Reports" open={open} />

          <Item icon="buildings" label="Industries" open={open} />

          <Item icon="gear" label="Settings" open={open} />

          <Item icon="bell" label="Notification" open={open} />
        </section>
      </div>

      <section className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={{
              uri: "https://picsum.photos/seed/picsum/200/300",
            }}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
            loading="lazy"
            mode="wave"
          />

          <div className={twMerge("ml-4", open ? "block" : "hidden")}>
            <span className="text-sm font-urbanist font-normal">John Doe</span>
            <span className="block text-[10px] font-urbanist font-normal">
              john.doe@aurora.co
            </span>
          </div>
        </div>

        <Icon
          name="box-arrow-right"
          size={24}
          className={twMerge("text-red-400", open ? "block" : "hidden")}
        />
      </section>
    </aside>
  );
}
