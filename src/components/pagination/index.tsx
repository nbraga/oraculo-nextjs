import { IconButton, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronBarRight } from "react-icons/bs";
import { MdArrowForwardIos, MdSkipNext } from "react-icons/md";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const [numberPage, setNumberPage] = useState(1);

  const onChangeNumber = (number: number) => {
    setNumberPage(number);
  };

  const decrementNumber = () => {
    if (numberPage > 1) {
      setNumberPage(numberPage - 1);
    }
  };

  const incrementNumber = () => {
    if (numberPage < 6) {
      setNumberPage(numberPage + 1);
    }
  };

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Stack alignItems={"center"} direction="row" spacing="2">
        {/*  <IconButton
          variant={"link"}
          aria-label="decrement"
          icon={<AiOutlineArrowLeft />}
          onClick={decrementNumber}
        /> */}
        <PaginationItem
          number={1}
          isCurrent={numberPage === 1}
          onChangeNumber={onChangeNumber}
        />
        <PaginationItem
          number={2}
          isCurrent={numberPage === 2}
          onChangeNumber={onChangeNumber}
        />
        <PaginationItem
          number={3}
          isCurrent={numberPage === 3}
          onChangeNumber={onChangeNumber}
        />
        <PaginationItem
          number={4}
          isCurrent={numberPage === 4}
          onChangeNumber={onChangeNumber}
        />
        <PaginationItem
          number={5}
          isCurrent={numberPage === 5}
          onChangeNumber={onChangeNumber}
        />
        <PaginationItem
          number={6}
          isCurrent={numberPage === 6}
          onChangeNumber={onChangeNumber}
        />
        <IconButton
          variant={"link"}
          aria-label="increment"
          color={"black.100"}
          icon={<MdArrowForwardIos />}
          onClick={incrementNumber}
        />
        <IconButton
          variant={"link"}
          aria-label="increment"
          color={"black.100"}
          icon={<BsChevronBarRight size={25} />}
          onClick={incrementNumber}
        />
      </Stack>
    </Stack>
  );
}
