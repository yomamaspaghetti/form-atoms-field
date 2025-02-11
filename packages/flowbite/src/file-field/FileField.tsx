import { Label, FileInput, FileInputProps } from "flowbite-react";
import { useFieldError } from "../hooks";
import { FileFieldProps, useFileFieldProps } from "@form-atoms/field";
import { InputColors } from "../hooks";
import { Field } from "../field";

type FlowbiteFileFieldProps = FileFieldProps &
  FileInputProps & { colors?: InputColors };

export const FileField = ({
  label,
  field,
  helperText,
  colors,
  ...uiProps
}: FlowbiteFileFieldProps) => {
  const { value, ...props } = useFileFieldProps(field);
  const { color, error } = useFieldError(field, colors);

  return (
    <Field>
      <Label color={color} htmlFor={props.id}>
        {label}
      </Label>
      <FileInput
        role="dialog"
        color={color}
        {...props}
        helperText={error ?? helperText}
        {...uiProps}
      />
    </Field>
  );
};
