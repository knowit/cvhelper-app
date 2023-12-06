import { Container, Flex } from "@styled-system/jsx";
import { flex } from "@styled-system/patterns";
import { FC } from "react";

import { Heading } from "../heading";
import { SelectThemeMenu } from "./SelectThemeMenu";
import { UserMenu } from "./UserMenu";

export const Header: FC = () => {
  return (
    <header className={flex({ flexDir: "column", backgroundColor: "bg.default", position: "sticky", borderBottomWidth: "1px", zIndex: "docked" })}>
      <Container width="full" paddingInline="6">
        <Flex alignItems="center" justifyContent="space-between" gap="8" paddingBlock="3">
          <Heading as="h1">CV Helper</Heading>
          <Flex gap="2">
            <UserMenu />
            <SelectThemeMenu />
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}