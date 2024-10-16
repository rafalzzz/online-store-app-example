import React from "react";
import {
  RightMenuContainer,
  RightMenuItem,
  DropdownMenu,
  DropdownMenuItem,
  BurgerButtonContainer,
  BurgerButton,
} from "./layout.styled";

type RightMenuLayoutProps = {
  burgerMenuIsOpen: boolean;
  handleToggleSearchMenu: (e: React.MouseEvent) => void;
  handleToggleBurgerMenuButton: (e: React.MouseEvent) => void;
  handleOpenLoginMenuButton: (e: React.MouseEvent) => void;
  handleBasketButton: (url: string) => (e: React.MouseEvent) => void;
  handleLogoutUser: (e: React.MouseEvent) => void;
  role: string;
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
  handleUserMenu: (e: React.MouseEvent) => void;
  userMenuIsOpen: boolean;
  itemsQuantity: number;
};

export const RightMenuLayout = ({
  burgerMenuIsOpen,
  handleToggleSearchMenu,
  handleToggleBurgerMenuButton,
  handleOpenLoginMenuButton,
  handleBasketButton,
  handleLogoutUser,
  role,
  handleOnClick,
  handleUserMenu,
  userMenuIsOpen,
  itemsQuantity,
}: RightMenuLayoutProps) => (
  <RightMenuContainer>
    <RightMenuItem showIcon={true} onClick={handleToggleSearchMenu}>
      <i className="fas fa-search"></i> <span>Search</span>
    </RightMenuItem>
    {!role && (
      <RightMenuItem showIcon={false} onClick={handleOpenLoginMenuButton}>
        <i className="far fa-user"></i> <span>Sign in</span>
      </RightMenuItem>
    )}
    {role === "user" && (
      <RightMenuItem onClick={handleUserMenu} showIcon={false}>
        <i className="fas fa-user-cog"></i> <span>Account</span>
        <DropdownMenu isOpen={userMenuIsOpen}>
          <DropdownMenuItem onClick={handleOnClick("/user/informations")}>
            Account settings
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleOnClick("/user/transactionHistory")}>
            Your orders
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogoutUser}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenu>
      </RightMenuItem>
    )}
    {role === "admin" && (
      <RightMenuItem onClick={handleUserMenu} showIcon={false}>
        <i className="fas fa-cog"></i> <span>Account</span>
        <DropdownMenu isOpen={userMenuIsOpen}>
          <DropdownMenuItem onClick={handleOnClick("/admin")}>
            Admin panel
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleOnClick("/admin/transactionHistory")}
          >
            Orders
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogoutUser}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenu>
      </RightMenuItem>
    )}
    <RightMenuItem showIcon={false} onClick={handleBasketButton("/shop-cart")}>
      <i className="fas fa-shopping-bag"></i> <span>My basket</span>
      {itemsQuantity > 0 && <div className="number">{itemsQuantity}</div>}
    </RightMenuItem>
    <BurgerButtonContainer>
      <BurgerButton
        isOpen={burgerMenuIsOpen}
        onClick={handleToggleBurgerMenuButton}
      >
        <div />
        <div />
        <div />
      </BurgerButton>
    </BurgerButtonContainer>
  </RightMenuContainer>
);
