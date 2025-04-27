"use client";

import { Link,Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HamburgerIcon } from '@chakra-ui/icons';
import ShoppingCartButton from "@/lib/ShoppingCartButton";
import ModeToggle from "@/components/shared/Header/mode-toggle";  
import UserButton from "@/components/shared/Header/user-button";
import "./menu.css";

const Menu = () => {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="nav-container">
      <nav className="nav-links">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart" className="cart-link">
            <ShoppingCartButton /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>
      <div className="mobile-menu">
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Drawer.Trigger asChild className="menu-toggle-button">
            <Button variant="outline" size="sm">
              <HamburgerIcon />
            </Button>
          </Drawer.Trigger>
          <div className="menu-panel">
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header className="menu-header">
                    <Drawer.Title className="menu-title">Menu</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body >
                    
                    <div className="toggle-theme">
                      <ModeToggle />
                    </div>
                    <div className="menu-items">
                      <Button asChild variant="ghost" className=" menu-link">
                        <Link href="/cart" className="link-but">
                          <ShoppingCartButton /> Cart
                        </Link>
                      </Button>
                      <UserButton /> 
                    </div>
                    
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Close
                    </Button>
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </div>
        </Drawer.Root>
      </div>
    </div>
  );
};

export default Menu;