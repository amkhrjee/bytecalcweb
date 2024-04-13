import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import Mode from "./Mode";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Listbox,
  ListboxItem,
  Chip,
  Link,
} from "@nextui-org/react";
import { useState } from "react";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Mode />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="dark text-foreground bg-background">
        <Listbox aria-label="Actions">
          <ListboxItem
            title="Truth Table Generator"
            key="truth"
            startContent={<TableRowsOutlinedIcon />}
          />
          <ListboxItem
            title="Change Theme"
            key="theme"
            startContent={<ColorLensOutlinedIcon />}
          />
          <ListboxItem
            title="Report Bug"
            key="bug"
            startContent={<BugReportOutlinedIcon />}
          />
          <ListboxItem
            title="Request Feature"
            key="feature"
            startContent={<AutoGraphIcon />}
          />
          <ListboxItem
            title="View Source"
            key="source"
            startContent={<CodeIcon />}
          />
          <ListboxItem
            title="Sponsor"
            key="sponsor"
            startContent={<FavoriteBorderIcon />}
          />
        </Listbox>
        <Chip>
          Made by <Link href="https://bento.me/amkhrjee">@amkhrjee</Link>
        </Chip>
      </NavbarMenu>
    </Navbar>
  );
}
