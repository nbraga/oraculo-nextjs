import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import { AiOutlineMenu } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface Props {
  openDrawerSideBar: boolean;
  setOpenDrawerSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBarBanners = ({
  openDrawerSideBar,
  setOpenDrawerSideBar,
}: Props) => {
  const router = useRouter();
  const controlRouter = router.asPath;

  const {
    isOpen: isOpenPopoverBanner,
    onToggle: onTogglePopoverBanner,
    onClose: onClosePopoverBanner,
  } = useDisclosure();

  return (
    <Stack
      minH="100vh"
      w={openDrawerSideBar ? "200px" : "75px"}
      bgColor={"blue.200"}
      color="white"
      transition="width 0.5s"
    >
      <Flex
        pt={2}
        pl={openDrawerSideBar ? 2 : 5}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {openDrawerSideBar ? (
          <>
            <Image src="/images/logo_name_white.svg" />
            <IconButton
              aria-label="Open"
              background="none"
              _hover={{ background: "none" }}
              icon={<AiOutlineMenu size={25} />}
              onClick={() => {
                if (openDrawerSideBar) setOpenDrawerSideBar(false);
                else setOpenDrawerSideBar(true);
              }}
            />
          </>
        ) : (
          <Image src="/images/logo_solo_white.svg" />
        )}
      </Flex>
      <Divider w={"full"} orientation="horizontal" />
      {openDrawerSideBar ? (
        <Stack>
          <Accordion defaultIndex={[0]} allowMultiple>
            {/* Banners */}
            <AccordionItem border={"none"}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    display={"flex"}
                    justifyContent={"space-between"}
                    _expanded={{
                      borderLeft: "5px solid",
                      borderColor: "green.100",
                      bg: "blue.300",
                    }}
                  >
                    <Flex gap={"2"}>
                      <Image src="/images/banner_icon.svg" />
                      <Text>Banners</Text>
                    </Flex>
                    {isExpanded ? (
                      <TiArrowSortedUp fontSize="12px" />
                    ) : (
                      <TiArrowSortedDown fontSize="12px" />
                    )}
                  </AccordionButton>

                  <AccordionPanel bg={"blue.100"} pb={4}>
                    <Box>
                      <Button
                        color={
                          controlRouter.match("/admin/banner-security")
                            ? "green.100"
                            : "white"
                        }
                        variant="ghost"
                        p={0}
                        fontWeight={"normal"}
                        _hover={{
                          bg: "none",
                        }}
                        _active={{
                          bg: "none",
                        }}
                        onClick={() => router.replace("/admin/banner-security")}
                      >
                        Banner de Segurança
                      </Button>
                      <Button
                        variant="ghost"
                        color={
                          controlRouter.match("banner-dinamic")
                            ? "green.100"
                            : "white"
                        }
                        p={0}
                        fontWeight={"normal"}
                        _hover={{
                          bg: "none",
                        }}
                        _active={{
                          bg: "none",
                        }}
                        onClick={() => router.push("/admin/banner-dinamic")}
                      >
                        Banner Dinâmico
                      </Button>
                    </Box>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Stack>
      ) : (
        <Stack>
          {/* Banner */}
          <Popover
            gutter={0}
            isOpen={isOpenPopoverBanner}
            onClose={onClosePopoverBanner}
            placement="right-start"
          >
            <PopoverTrigger>
              <Button
                _expanded={{
                  borderLeft: "5px solid",
                  borderColor: "green.100",
                  bg: "blue.300",
                }}
                bg={"none"}
                _hover={{
                  bg: "none",
                }}
                _active={{
                  bg: "none",
                }}
                onClick={onTogglePopoverBanner}
              >
                <Image src="/images/banner_icon.svg" />
              </Button>
            </PopoverTrigger>
            <PopoverContent px={2} bg={"blue.100"} border={"none"} w={"auto"}>
              <PopoverBody display={"flex"} flexDir={"column"}>
                <Button
                  variant="ghost"
                  color={
                    router.pathname === "/admin/banner-security"
                      ? "green.100"
                      : "white"
                  }
                  justifyContent={"start"}
                  p={0}
                  fontWeight={"normal"}
                  _hover={{
                    bg: "none",
                  }}
                  _active={{
                    bg: "none",
                  }}
                  onClick={() => router.push("/admin/banner-security")}
                >
                  Banner de Segurança
                </Button>
                <Button
                  variant="ghost"
                  color={
                    router.pathname === "/admin/banner-dinamic"
                      ? "green.100"
                      : "white"
                  }
                  justifyContent={"start"}
                  p={0}
                  fontWeight={"normal"}
                  _hover={{
                    bg: "none",
                  }}
                  _active={{
                    bg: "none",
                  }}
                  onClick={() => router.push("/admin/banner-dinamic")}
                >
                  Banner Dinâmico
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      )}
    </Stack>
  );
};
