import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"

export default function Dashboard () {
    return(
        <header className="flex  justify-between w-full border-white bg-white p-4 shadow px-[40px]">
            <div className="flex gap-[40px]">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenu>Dashboard</NavigationMenu>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <Sheet>
                        <SheetTrigger><i className="fi fi-br-bars-staggered"></i></SheetTrigger>
                        <SheetContent side="left" className="w-[220px]">
                            <SheetHeader className="w-[200px]">
                                <SheetTitle>Sidebar Nav</SheetTitle>
                                <NavigationMenu className="py-2 pt-5">
                                    <NavigationMenuList>
                                        <NavigationMenuItem className="flex flex-col gap-4">
                                            <NavigationMenu className="cursor-pointer gap-2"><i className="fi fi-rr-home"></i>Dashboard</NavigationMenu>
                                            <NavigationMenu className="cursor-pointer gap-2"><i className="fi fi-rr-apps"></i>Items</NavigationMenu>
                                            <NavigationMenu className="cursor-pointer gap-2"><i className="fi fi-rr-apps-add"></i>Add item</NavigationMenu>
                                            <NavigationMenu className="cursor-pointer gap-2"><i className="fi fi-rr-user"></i>Users</NavigationMenu>
                                            <NavigationMenu className="cursor-pointer gap-2"><i className="fi fi-rr-folder-open"></i>Reports</NavigationMenu>
                                            <NavigationMenu className="cursor-pointer gap-2"><i className="fi fi-rr-power text-red-600"></i>Logout</NavigationMenu>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </NavigationMenu>
            </div>

            <div className="flex gap-4">
                <Avatar className="items-end">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger className="border-0 bg-white">Profile</MenubarTrigger>
                        <MenubarContent className="w-[100px] text-right">
                            <MenubarItem>
                                Profile
                            </MenubarItem>
                            <MenubarItem>
                                Logout
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    )
}
