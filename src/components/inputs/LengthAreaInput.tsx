import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  Text,
  Textarea,
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
    <>
      <FormControl position={"relative"} borderBottom={"1px #D4DAD9  solid"}>
        <FormLabel
          position={"absolute"}
          pointerEvents={"none"}
          left={0}
          transform={
            !!!controlLabel ? "translateY(0.5rem)" : "translateY(-50%)"
          }
          _focus={{
            transform: "translateY(-50%)",
          }}
          fontSize={"xs"}
        >
          {label}
        </FormLabel>
        <InputGroup>
          <ChakraInput
            as={Textarea}
            variant="flushed"
            resize="none"
            size="md"
            height={150}
            border={"none"}
            focusBorderColor="blue.100"
            maxLength={240}
            name={nameInput}
            id={nameInput}
            ref={ref}
            {...rest}
          />
          {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </InputGroup>
      </FormControl>
      <Text textAlign={"end"} fontSize={"xs"}>
        {controlLabel ? controlLabel.length : "0"}/240
      </Text>
    </>
  );
};

export const LengthAreaInput = forwardRef(InputBase);
