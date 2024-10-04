import {
  ContextualMenu,
  IconButton,
  Image,
  mergeStyles,
  Stack,
  Text,
} from "@fluentui/react";
import React, { useCallback, useState } from "react";
import { NASA_LOGO } from "../../assets/assest.const";
import { MENU_ITEMS } from "./Header.const";
import { styles } from "./Header.styles";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const handleMenuItemClick = (item: string, index: number) => {
    setSelectedMenuItem(index);
    const element = document.getElementById(item);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const MenuButton = useCallback(() => {
    return (
      <>
        {MENU_ITEMS.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === selectedMenuItem
                  ? mergeStyles(styles.menuButton, styles.menuButtonSelected)
                  : styles.menuButton
              }
              onClick={() => handleMenuItemClick(item, index)}
            >
              <Text variant="mediumPlus" className={styles.menuButtonText}>
                {item}
              </Text>
            </div>
          );
        })}
      </>
    );
  }, [selectedMenuItem]);

  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"
      tokens={{ padding: 10 }}
      className={styles.root}
    >
      <Image src={NASA_LOGO} alt="Logo" width={100} className={styles.logo} />
      <Stack
        horizontal
        tokens={{ childrenGap: 10 }}
        className={styles.menuButtons}
      >
        {MenuButton()}
      </Stack>
      <IconButton
        id="GlobalNavButton"
        iconProps={{ iconName: "GlobalNavButton" }}
        onClick={toggleMenu}
        className={styles.navButton}
      />
      {menuOpen && (
        <ContextualMenu
          items={MENU_ITEMS.map((item, index) => {
            return {
              key: item,
              text: item,
              onClick: () => handleMenuItemClick(item, index),
              className: styles.menuButtonText,
            };
          })}
          hidden={!menuOpen}
          target="#GlobalNavButton"
          onDismiss={toggleMenu}
          isBeakVisible={false}
          styles={{ root: { backgroundColor: "black" } }}
        />
      )}
    </Stack>
  );
};

export { Header };
