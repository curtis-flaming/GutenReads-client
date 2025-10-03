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
import { client } from "@/api/fetchClient";
import { useQuery } from "@tanstack/react-query";
import { currentUserOptions } from "@/api/endpoints/users/options";

export function UserMenu() {
  const { data: currentUser } = useQuery(currentUserOptions);

  return (
    <Menu>
      <MenuTrigger aria-label="Open Menu">
        <Avatar initials={currentUser?.userName[0]} size="md" isSquare />
      </MenuTrigger>
      <MenuContent placement="bottom right" className="min-w-60 sm:min-w-56">
        <MenuSection>
          <MenuHeader separator>
            <span className="block">{currentUser?.userName}</span>
            <span className="font-normal text-muted-fg">@{currentUser?.userName}</span>
          </MenuHeader>
        </MenuSection>

        <MenuItem
          onClick={() => {
            client.POST("/api/auth/logout");
          }}
        >
          <IconLogout />
          Log out
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}
