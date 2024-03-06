"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="our courses">
                    <div className="flex flex-col space-y-2 text-sm">
                        <HoveredLink href="/courses">All courses</HoveredLink>
                        <HoveredLink href="/basic">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/advanced">Advanced Composition</HoveredLink>
                        <HoveredLink href="/songWriting">Songwriting</HoveredLink>
                        <HoveredLink href="/music">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
            </Menu>
        </div>
    );
};

export default Navbar;