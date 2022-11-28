import { Button } from "@chakra-ui/react";

interface PaginationItem {
  number: number;
  isCurrent?: boolean;
  onChangeNumber: (value: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onChangeNumber,
}: PaginationItem) {
  if (isCurrent) {
    return (
      <Button
        onClick={() => onChangeNumber(number)}
        bg="gray.200"
        size={"xs"}
        color="black.100"
        _hover={{
          bg: "blue.100",
          color: "white",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      onClick={() => onChangeNumber(number)}
      bg="white.100"
      size={"xs"}
      color="blue.100"
      _hover={{
        bg: "white.100",
        color: "blue.100",
      }}
    >
      {number}
    </Button>
  );
}
