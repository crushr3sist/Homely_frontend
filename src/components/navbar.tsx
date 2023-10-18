import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Switch,
} from "@nextui-org/react";

import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Homely</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Switch
            size="lg"
            color="success"
            isSelected={isSelected}
            onValueChange={setIsSelected}
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          ></Switch>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
