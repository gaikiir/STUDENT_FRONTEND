import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavbarCompo = () => {
    const navigate = useHistory();
    const handledashboard = () => {
        navigate.push('/dashboard');
    }
  return (
    <>
      <Navbar className="bg-slate-900 fixed z-20 right-0 left-0">
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            IST Online Exam
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown arrowIcon={false} inline label={<Avatar rounded />}>
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem onClick={handledashboard}>Dashboard</DropdownItem>
            <DropdownItem>Edit profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/newlink">News</NavbarLink>
          <NavbarLink href="/news">About us</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
};

export default NavbarCompo;
