import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import usePlatforms from "../hooks/usePlatforms";

const PlatformFilter = ({ onSelectPlatform, selectedPlatform }) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronDown />}>
        {selectedPlatform ? selectedPlatform : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => {
          return (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
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
