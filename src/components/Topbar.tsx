import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
      <NavbarMenu>
        <Listbox aria-label="Actions">
          <ListboxItem
            textValue="Change Theme"
            key="new"
            startContent={<ColorLensOutlinedIcon />}
          >
            {" "}
            Change Theme
          </ListboxItem>
          <ListboxItem
            key="bug"
            textValue="Report Bug"
            startContent={<BugReportOutlinedIcon />}
          >
            Report Bug
          </ListboxItem>
          <ListboxItem
            key="feature"
            textValue="Request Feature"
            startContent={<AutoGraphIcon />}
          >
            Request Feature
          </ListboxItem>
          <ListboxItem
            key="source"
            textValue="View Source"
            startContent={<CodeIcon />}
          >
            View Source
          </ListboxItem>
          <ListboxItem
            key="sponsor"
            textValue="Sponsor"
            startContent={<FavoriteBorderIcon />}
          >
            Sponsor
          </ListboxItem>
        </Listbox>
        <Chip>
          Made with 🍫 by{" "}
          <Link href="https://bento.me/amkhrjee">@amkhrjee</Link>
        </Chip>
      </NavbarMenu>
    </Navbar>
  );
}
