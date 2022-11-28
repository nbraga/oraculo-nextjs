import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

import InputMask from "react-input-mask";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  label: string;
  error?: FieldError;
  controlLabel: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error = null, nameInput, controlLabel, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error} position={"relative"}>
      <FormLabel
        position={"absolute"}
        pointerEvents={"none"}
        left={0}
        transform={!!!controlLabel ? "translateY(0.5rem)" : "translateY(-50%)"}
        _focus={{
          transform: "translateY(-50%)",
        }}
        fontSize={"xs"}
      >
        {label}
      </FormLabel>

      <ChakraInput
        as={InputMask}
        mask="999.999.999-99"
        maskChar={null}
        size={"sm"}
        w={"full"}
        focusBorderColor="gray.100"
        variant="flushed"
        name={nameInput}
        id={nameInput}
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const CpfInput = forwardRef(InputBase);
