import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

export const LinkButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      variant={"link"}
      bg="white.100"
      size="sm"
      color="blue.100"
      w={"full"}
      {...rest}
    >
      {children}
    </Button>
  );
};
