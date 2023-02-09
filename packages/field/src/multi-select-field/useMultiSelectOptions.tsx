import { useFieldState } from "form-atoms";
import { useMemo } from "react";
import { LastFieldProps } from "../last-field";
import { MultiSelectFieldAtom } from "./multiSelectField";
import { SelectProps } from "../select-field";

export type MultiSelectFieldProps<Option, Value = string> = LastFieldProps<
  MultiSelectFieldAtom<Value>
> &
  SelectProps<Option, Value>;

export function useMultiSelectOptions<Option, Value = string>(
  field: MultiSelectFieldAtom<Value>,
  {
    getValue,
    getLabel,
    options,
    placeholder = "Please select an option",
  }: SelectProps<Option, Value>
) {
  const { value } = useFieldState(field);

  const renderOptions = useMemo(
    () =>
      options.map((option) => {
        return {
          option,
          isActive: value.includes(getValue(option)),
          value: getValue(option),
          label: getLabel(option),
        };
      }),
    [options, value, getValue, getLabel]
  );

  return useMemo(
    () => ({
      renderOptions,
      // TODO: probably drop
      placeholderOption: (
        <option value="" disabled selected>
          {placeholder}
        </option>
      ),
    }),
    [renderOptions, placeholder]
  );
}
