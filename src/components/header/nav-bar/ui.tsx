import { NavBarItem } from './nav-bar-item';

type TNavBarProps = {
  navBarConfig: TNavBarItem[];
};

export const NavBar = ({ navBarConfig }: TNavBarProps) =>
  navBarConfig.map(navItem => (
    <NavBarItem text={navItem.text} link={navItem.link} imgSrc={navItem.imgSrc} key={navItem.id} />
  ));
