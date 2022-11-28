import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Text,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

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
        size={"sm"}
        w={"full"}
        focusBorderColor="gray.100"
        variant="flushed"
        maxLength={40}
        name={nameInput}
        id={nameInput}
        ref={ref}
        {...rest}
      />
      <Text textAlign={"end"} fontSize={"xs"}>
        {controlLabel ? controlLabel.length : "0"}/40
      </Text>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const LengthInput = forwardRef(InputBase);
