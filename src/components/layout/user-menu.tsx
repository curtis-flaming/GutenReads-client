import {
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSettings,
  IconShield,
} from "@intentui/icons";
import { Avatar } from "@/components/ui/avatar";
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";

export function UserMenu() {
  return (
    <Menu>
      <MenuTrigger aria-label="Open Menu">
        <Avatar initials="UN" size="md" isSquare />
      </MenuTrigger>
      <MenuContent placement="bottom right" className="min-w-60 sm:min-w-56">
        <MenuSection>
          <MenuHeader separator>
            <span className="block">User Name</span>
            <span className="font-normal text-muted-fg">@user</span>
          </MenuHeader>
        </MenuSection>

        <MenuItem href="#dashboard">
          <IconDashboard />
          Dashboard
        </MenuItem>
        <MenuItem href="#settings">
          <IconSettings />
          Settings
        </MenuItem>
        <MenuItem href="#security">
          <IconShield />
          Security
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <IconCommandRegular />
          Command Menu
        </MenuItem>

        <MenuItem href="#contact">
          <IconHeadphones />
          Customer Support
        </MenuItem>
        <MenuSeparator />
        <MenuItem href="#logout">
          <IconLogout />
          Log out
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}
