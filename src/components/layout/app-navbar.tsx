import {
  IconChevronLgDown,
  IconSearch,
  IconShoppingBag,
  IconBookOpenText,
} from "@intentui/icons";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu";
import {
  Navbar,
  NavbarGap,
  NavbarItem,
  NavbarMobile,
  type NavbarProps,
  NavbarProvider,
  NavbarSection,
  NavbarSeparator,
  NavbarSpacer,
  NavbarStart,
  NavbarTrigger,
} from "@/components/ui/navbar";
import { Separator } from "@/components/ui/separator";
import { UserMenu } from "./user-menu";

export default function AppNavbar(props: NavbarProps) {
  return (
    <NavbarProvider>
      <Navbar {...props}>
        <NavbarStart>
          <Link
            className="flex items-center gap-x-2 font-medium"
            aria-label="Goto documentation of Navbar"
            href="/docs/components/layouts/navbar"
          >
            <IconBookOpenText className="size-6 sm:size-5" />
            <span>GutenReads</span>
          </Link>
        </NavbarStart>
        <NavbarGap />
        <NavbarSection>
          <NavbarItem href="#" isCurrent>
            Home
          </NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection className="max-md:hidden">
          <Button intent="plain" size="sq-sm" aria-label="Search for products">
            <IconSearch />
          </Button>
          <Separator orientation="vertical" className="mr-3 ml-1 h-5" />
          <UserMenu />
        </NavbarSection>
      </Navbar>
      <NavbarMobile>
        <NavbarTrigger />
        <NavbarSpacer />
        <Button intent="plain" size="sq-sm" aria-label="Search for products">
          <IconSearch />
        </Button>
        <Button intent="plain" size="sq-sm" aria-label="Your Bag">
          <IconShoppingBag />
        </Button>
        <NavbarSeparator className="mr-2.5" />
        <UserMenu />
      </NavbarMobile>
    </NavbarProvider>
  );
}
