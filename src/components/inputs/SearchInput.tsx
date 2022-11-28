import {
  FormControl,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

interface Props {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const SearchInput = ({ label, value, onChange, onClick }: Props) => {
  return (
    <FormControl>
      <InputGroup>
        <ChakraInput
          value={value}
          onChange={onChange}
          w={"full"}
          bg={"gray.400"}
          borderRadius={"2xl"}
          focusBorderColor={"none"}
          variant="filled"
          placeholder={label}
          _placeholder={{
            color: "gray.100",
          }}
          _hover={{
            bg: "gray.400",
          }}
          _focus={{
            bg: "gray.400",
          }}
        />
        <InputRightElement>
          <IconButton
            onClick={onClick}
            bg={"none"}
            aria-label="search-banner"
            icon={<FiSearch size={25} />}
            _hover={{
              bg: "none",
            }}
            _active={{
              bg: "none",
            }}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
