import {
  FormControl,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { MdCalendarToday } from "react-icons/md";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  label: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, nameInput, ...rest },
  ref
) => {
  const [controlVisible, setControlVisible] = useState(false);
  return (
    <FormControl>
      <InputGroup color="gray.100" _focusWithin={{ color: "blue.100" }}>
        <ChakraInput
          name={nameInput}
          id={nameInput}
          type="text"
          placeholder={label}
          _placeholder={{
            color: "gray.100",
            opacity: "0.5",
          }}
          onFocus={(e) => {
            e.target.type = "date";
            setControlVisible(true);
          }}
          onBlur={(e) => {
            e.target.type = "text";
            setControlVisible(false);
          }}
          focusBorderColor="blue.100"
          borderColor="gray.200"
          variant="flushed"
          _hover={{
            borderColor: "gray.100",
          }}
          ref={ref}
          {...rest}
        />
        {!controlVisible && (
          <InputRightElement
            right={-2}
            children={<MdCalendarToday color="green.500" />}
          />
        )}
      </InputGroup>
    </FormControl>
  );
};

export const InputDateIcon = forwardRef(InputBase);
