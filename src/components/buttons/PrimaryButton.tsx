import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface Props extends ChakraButtonProps {
  children: React.ReactNode;
}

export const PrimaryButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      bg="green.100"
      size="md"
      color="white.100"
      borderRadius={"3xl"}
      w={"full"}
      _hover={{
        bg: "green.100",
        color: "white.100",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
