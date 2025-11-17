import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';

export default function Navbar() {
  return (
    <div className='fixed z-2'>
      <NavigationMenu className=''>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>MyApp</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href='/'>Dashboard</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href='/'>Home</NavigationMenuLink>
              <NavigationMenuLink href='/about'>About</NavigationMenuLink>
              <NavigationMenuLink href='/contact'>Contact</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
