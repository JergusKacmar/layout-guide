import { ButtonRow } from "./button-row";

export const FlexOptions = (props: {
  orientationOptions: { caption: string; value: string }[];
  setOrientation: (input: { caption: string; value: string }) => any;
  justifyOptions: { caption: string; value: string }[];
  setJustify: (input: { caption: string; value: string }) => any;
  alignOptions: { caption: string; value: string }[];
  setAlign: (input: { caption: string; value: string }) => any;
}) => {

  return (
    <div className="flex flex-col gap-4">
      <ButtonRow
        title={"Orientation"}
        options={props.orientationOptions}
        setter={props.setOrientation}
      />
      <ButtonRow
        title={"Justify content"}
        options={props.justifyOptions}
        setter={props.setJustify}
      />
      <ButtonRow
        title={"Align items"}
        options={props.alignOptions}
        setter={props.setAlign}
      />
    </div>
  );
};
