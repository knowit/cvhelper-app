'use client'

import { FC } from "react";

import { useTheme } from "next-themes"
import { BsSun, BsMoon, BsCheck, BsUnindent } from "react-icons/bs";

import { IconButton } from "../iconButton";
import { MenuContent, MenuItem, MenuPositioner, Menu } from "../menu";
import { MenuTrigger } from "@ark-ui/react";
import { HStack } from "@styled-system/jsx";
import { useMounted } from "@/hooks/useMounted";

type ThemeMenuItemProps = {
  theme: string
  name: string
}

const ThemeMenuItem: FC<ThemeMenuItemProps> = ({ theme, name }) => {
  const { theme: activeTheme, setTheme } = useTheme();
  const mounted = useMounted();
  
  const isActive = mounted && activeTheme === theme;

  return (
    <MenuItem asChild id={theme} onClick={() => setTheme(theme)}>
      <HStack justifyContent="space-between">
        <span>{name}</span> <span style={{ opacity: isActive ? 1 : 0 }}><BsCheck/></span>
      </HStack>
    </MenuItem>
  );
}

export const SelectThemeMenu = () => {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Menu positioning={{ placement: "bottom-end", offset: { crossAxis: -20 } }}>
      <MenuTrigger asChild>
        <IconButton 
          variant="ghost" 
          size="sm"
          style={{
            opacity: mounted ? 1 : 0
          }}>
          {isDark ? <BsMoon/> : <BsSun/>}
        </IconButton>
      </MenuTrigger>
      <MenuPositioner>
        <MenuContent >
          <ThemeMenuItem name="Light" theme="light"/>
          <ThemeMenuItem name="Dark" theme="dark"/>
          <ThemeMenuItem name="System" theme="system"/>
        </MenuContent>
      </MenuPositioner>
    </Menu>
  )
}