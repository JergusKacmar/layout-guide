import { useState } from "react";

export const ButtonRow = (props: {
  title: string;
  options: { caption: string; value: string }[];
  setter: (input: { caption: string; value: string }) => any;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <label>{props.title}:</label>
      <div className="flex flex-row flex-wrap gap-2">
        {props.options.map((iterator, index) => {
          return (
            <button
              key={index}
              className={`flex border-2 rounded-lg px-2 py-1 hover:bg-stone-300 hover:dark:bg-cyan-900 ${
                selectedIndex === index
                  ? "border-stone-800 dark:border-cyan-300"
                  : "border-stone-300 dark:border-cyan-900"
              }`}
              onClick={() => {
                setSelectedIndex(index);
                props.setter(iterator);
              }}
            >
              {iterator.caption}
            </button>
          );
        })}
      </div>
    </div>
  );
};
