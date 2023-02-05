import { TextInput, Label, TextInputProps } from "flowbite-react";
import { useInputField } from "form-atoms";
import { useFieldError } from "../hooks";
import { TextFieldProps } from "@react-last-field/field";
import { InputColors } from "../hooks";
import { Field } from "../field";

type FlowbiteTextFieldProps = TextFieldProps &
  TextInputProps & { colors?: InputColors };

export const TextField = ({
  label,
  field,
  helperText,
  colors,
  ...uiProps
}: FlowbiteTextFieldProps) => {
  const { props } = useInputField(field);
  const { color, error } = useFieldError(field, colors);

  return (
    <Field>
      <Label color={color} htmlFor={props.name}>
        {label}
      </Label>
      <div>
        <TextInput
          color={color}
          id={props.name}
          {...props}
          helperText={error ?? helperText}
          {...uiProps}
        />
      </div>
    </Field>
  );
};
