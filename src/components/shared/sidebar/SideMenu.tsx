"use client";

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';

import {
    SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton,
    SidebarMenuItem, SidebarSeparator
} from '../../ui/sidebar';
import MENU_GROUP from './menu-items';

const SideMenu = () => {
  const path = usePathname();
  console.log(path);
  return MENU_GROUP.map((group) => {
    const hasMenu = group.menu;
    return (
      <Collapsible defaultOpen className="group/collapsible" key={group.name}>
        <SidebarGroup className="gap-2">
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              {group.name}
              {hasMenu && group.menu.length >= 1 && (
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              )}
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu className="gap-4">
                {hasMenu &&
                  group.menu.map((menuItem) => (
                    <SidebarMenuItem key={menuItem.label}>
                      <SidebarMenuButton
                        asChild
                        isActive={path == menuItem.url}
                        className="rounded-sm">
                        <Link
                          href={menuItem.url}
                          className="text-[18px] text-muted-foreground !py-6 px-4">
                          <menuItem.icon />
                          {menuItem.label}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
        <SidebarSeparator />
      </Collapsible>
    );
  });
};

export default SideMenu;
