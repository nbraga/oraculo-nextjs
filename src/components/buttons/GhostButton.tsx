import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

export const GhostButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      variant={"ghost"}
      size="md"
      color="blue.100"
      _hover={{
        bg: "none",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
