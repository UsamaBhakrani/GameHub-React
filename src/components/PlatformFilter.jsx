import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import usePlatforms from "../hooks/usePlatforms";
import { useState } from "react";

const PlatformFilter = () => {
  const [menuItem, setMenuItem] = useState(null);
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronDown />}>
        {menuItem ? menuItem : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => {
          return (
            <MenuItem
              onClick={() => setMenuItem(platform.name)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformFilter;
