import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Outlet, Link } from "react-router-dom"

export default function Dashboard () {
    return(
        <section className="flex">
            <div className="hidden sm:flex z-40 sm:flex-col h-[100%] fixed w-[15%] bg-blue-950 p-4">
                <span className="text-center text-white mt-5 text-xl">Wecare24medical ltd services</span>
                <NavigationMenu className="h-full mt-[-80px]">
                    <NavigationMenuList>
                        <NavigationMenuItem className="flex flex-col gap-[35px]">
                            <NavigationMenu className="cursor-pointer text-white hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                <Link to='/'><i className="fi fi-rr-house-blank"></i>&nbsp;&nbsp;Dashboard</Link>
                            </NavigationMenu>
                            <NavigationMenu className="cursor-pointer text-white gap-2 hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                <Link to="/clients"><i className="fi fi-rr-apps"></i>&nbsp;&nbsp;Clients</Link>
                            </NavigationMenu>
                            <NavigationMenu className="cursor-pointer text-white gap-2 hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                <Link to="/add-client"><i className="fi fi-rr-apps-add"></i>&nbsp;&nbsp;Add client</Link>
                            </NavigationMenu>
                            <NavigationMenu className="cursor-pointer text-white gap-2 hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                <Link to="/users"><i className="fi fi-rr-user"></i>&nbsp;&nbsp;Users</Link>
                            </NavigationMenu>
                            <NavigationMenu className="cursor-pointer text-white gap-2 hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                <Link to="/shifts"><i className="fi fi-rr-folder-open"></i>&nbsp;&nbsp;Shifts</Link>
                            </NavigationMenu>

                            <NavigationMenu className="cursor-pointer gap-2 text-red-600">
                                <i className="fi fi-rr-power"></i>Logout
                            </NavigationMenu>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex flex-col sm:ml-[15%] sm:w-[85%]">
                <header className="flex justify-between w-full h-[80px] border-white bg-white p-4 shadow sm:px-[40px]">
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
                                <SheetTrigger className="flex sm:hidden ml-[-40px] mr-1"><i className="fi fi-br-bars-staggered"></i></SheetTrigger>
                                <SheetContent side="left" className="w-[250px] bg-blue-950">
                                    <SheetHeader className="w-[200px] ml-0 mt-5">
                                        <SheetTitle className="ml-[-30px] px-0 mt-5 pl-5 text-white">Wecare24Medical ltd services</SheetTitle>
                                        <NavigationMenu className="py-2 pt-5">
                                            <NavigationMenuList>
                                                <NavigationMenuItem className="flex flex-col gap-4">
                                                    <NavigationMenu className="cursor-pointer text-white hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                                        <Link to='/'><i className="fi fi-rr-house-blank"></i>&nbsp;&nbsp;Dashboard</Link>
                                                    </NavigationMenu>
                                                    <NavigationMenu className="cursor-pointer text-white gap-2 hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                                        <Link to="/clients"><i className="fi fi-rr-apps"></i>&nbsp;&nbsp;Clients</Link>
                                                    </NavigationMenu>
                                                    <NavigationMenu className="cursor-pointer text-white gap-2 hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                                        <Link to="/add-client"><i className="fi fi-rr-apps-add"></i>&nbsp;&nbsp;Add client</Link>
                                                    </NavigationMenu>
                                                    <NavigationMenu className="cursor-pointer text-white gap-2 hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                                        <Link to="/users"><i className="fi fi-rr-user"></i>&nbsp;&nbsp;Users</Link>
                                                    </NavigationMenu>
                                                    <NavigationMenu className="cursor-pointer text-white gap-2 hover:text-black hover:bg-[#0084ff] hover:p-2 hover:rounded hover:transition">
                                                        <Link to="/shifts"><i className="fi fi-rr-folder-open"></i>&nbsp;&nbsp;Shifts</Link>
                                                    </NavigationMenu>

                                                    <NavigationMenu className="cursor-pointer gap-2 text-red-600">
                                                        <i className="fi fi-rr-power"></i>Logout
                                                    </NavigationMenu>
                                                </NavigationMenuItem>
                                            </NavigationMenuList>
                                        </NavigationMenu>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center justify-between h-[40px] w-[100px] sm:w-[400px] border-r-2 border-2 bg-[#f7f7f7] rounded-lg">
                        <input type="search" name="search" placeholder="Search registered client....." className="rounded-lg w-full h-[45px] px-3 bg-transparent focus:ring-0 focus:border-none  focus:outline-none text-base"/>
                        <button className="px-3 text-lg">
                            <i className="fi fi-rr-search text-lg"></i>
                        </button>
                    </div>

                    <div className="flex gap-2 sm:gap-4">
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

                {/* pages display here */}
                <div className="p-4 border h-full">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
