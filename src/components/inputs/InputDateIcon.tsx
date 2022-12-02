import {
  FormControl,
  FormErrorMessage,
  InputGroup,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  label: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, nameInput, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup color="gray.100" _focusWithin={{ color: "blue.100" }}>
        <ChakraInput
          variant="flushed"
          type="text"
          bgImage="url(/images/calendar.svg)"
          bgPosition="right"
          bgRepeat="no-repeat"
          bgSize={20}
          name={nameInput}
          id={nameInput}
          placeholder={label}
          focusBorderColor="blue.100"
          borderColor="gray.200"
          sx={{
            "&::-webkit-calendar-picker-indicator": {
              opacity: 0,
            },
          }}
          _placeholder={{
            color: "gray.100",
            opacity: "0.5",
          }}
          onFocus={(e) => {
            e.target.type = "date";
          }}
          onBlur={(e) => {
            e.target.type = "text";
          }}
          _hover={{
            borderColor: "gray.100",
          }}
          ref={ref}
          {...rest}
        />
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const InputDateIcon = forwardRef(InputBase);
