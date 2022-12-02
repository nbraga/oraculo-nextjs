import {
  FormControl,
  FormErrorMessage,
  IconButton,
  InputGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { VscDiffAdded, VscDiffRemoved } from "react-icons/vsc";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  label: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, nameInput, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup color="gray.100" _focusWithin={{ color: "blue.100" }}>
        <NumberInput
          display={"flex"}
          variant={"flushed"}
          min={0}
          precision={2}
          step={0.2}
        >
          <NumberInputField
            name={nameInput}
            id={nameInput}
            ref={ref}
            {...rest}
          />

          <IconButton
            as={NumberDecrementStepper}
            border="none"
            variant={"link"}
            aria-label="decrement"
            icon={<VscDiffRemoved size={25} />}
            color={"blue.100"}
          />
          <IconButton
            as={NumberIncrementStepper}
            border="none"
            variant={"link"}
            aria-label="increment"
            icon={<VscDiffAdded size={25} />}
            color={"blue.100"}
          />
        </NumberInput>
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const StepInput = forwardRef(InputBase);
