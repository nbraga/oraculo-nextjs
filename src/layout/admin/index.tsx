import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { AppBar } from "../../components/appBar";
import { SideBar } from "../../components/sideBar";
import { SideBarBanners } from "../../components/sideBar/banners";
import { SideBarOperators } from "../../components/sideBar/operators";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface Props {
  children: React.ReactNode;
}

export const LayoutAdmin = ({ children }: Props) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const { permission } = useContext(AuthContext);

  return (
    <Box display={"flex"}>
      {permission?.NOME_MENU === "Banners" ? (
        <SideBarBanners
          openDrawerSideBar={openDrawer}
          setOpenDrawerSideBar={setOpenDrawer}
        />
      ) : permission?.NOME_MENU === "Operadores" ? (
        <SideBarOperators
          openDrawerSideBar={openDrawer}
          setOpenDrawerSideBar={setOpenDrawer}
        />
      ) : (
        <SideBar
          openDrawerSideBar={openDrawer}
          setOpenDrawerSideBar={setOpenDrawer}
        />
      )}

      <Box w={"full"}>
        <AppBar
          openDrawerAppBar={openDrawer}
          setOpenDrawerAppBar={setOpenDrawer}
        />
        <Box bgColor={"gray.500"} minH={"100vh"} p={5}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
