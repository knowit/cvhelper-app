"use client"

import { FC } from "react";
import { head, isNil, words } from "lodash-es";

import { Menu, MenuContent, MenuItem, MenuPositioner } from "../menu";
import { Avatar, AvatarFallback, AvatarImage, AvatarRoot } from "../avatar";
import { MenuTrigger } from "@ark-ui/react";
import { signOut, useSession } from "next-auth/react";
import { css } from "@styled-system/css";

const getInitials = (name?: string | null) => 
  words(name ?? undefined).map(head).join("").toUpperCase();

export const UserMenu: FC = () => {
  const { data } = useSession();
  const user = data?.user;

  const hasImage = !isNil(user?.image);

  const signOutUser = () => signOut();
  
  return (
    <Menu positioning={{ placement: "bottom", offset: { crossAxis: -20 } }}>
      <MenuTrigger asChild>
        <div className={css({ _hover: { cursor: "pointer" } })}>
          <Avatar.Root>
            <Avatar.Fallback>{getInitials(user?.name)}</Avatar.Fallback>
            <Avatar.Image src={user?.image ?? ""} alt="avatar" style={{ display: hasImage ? "block" : "none"}}/>
          </Avatar.Root>
        </div>
      </MenuTrigger>
      <MenuPositioner>
        <MenuContent >
          <MenuItem id="signout" onClick={signOutUser}>
            Sign Out
          </MenuItem>
        </MenuContent>
      </MenuPositioner>
    </Menu>
  );
}