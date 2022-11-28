import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { FieldError } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  icon?: React.ComponentType;
  label: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { icon, label, error = null, nameInput, ...rest },
  ref
) => {
  const [show, setShow] = useState(false);

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup
        size="md"
        color="gray.100"
        _focusWithin={{ color: "blue.100" }}
      >
        {icon && (
          <InputLeftElement pointerEvents="none" mt="1.5">
            <Icon as={icon} fontSize="20" />
          </InputLeftElement>
        )}
        <ChakraInput
          name={nameInput}
          id={nameInput}
          placeholder={label}
          focusBorderColor="blue.100"
          borderColor="gray.200"
          bgColor="transparent"
          variant="flushed"
          p={2}
          type={show ? "text" : "password"}
          _placeholder={{
            color: "gray.100",
          }}
          ref={ref}
          {...rest}
        />

        <InputRightElement>
          <Icon
            onClick={() => setShow(!show)}
            as={!show ? AiFillEyeInvisible : AiFillEye}
            fontSize="20"
          />
        </InputRightElement>
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const PasswordInput = forwardRef(InputBase);
