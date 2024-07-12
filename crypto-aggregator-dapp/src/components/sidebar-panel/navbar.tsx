import { ThemeToggle } from "@/components/theme-toggle";
import { SheetMenu } from "@/components/sidebar-panel/sheet-menu";
import SelectNetwork from "../app-navbar/select-network";
import MenuToolkit from "../app-navbar/menu-toolkit";

// import WalletConnect from "../connect-wallets/wallet-connect";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
          <div className="lg:pl-5 hidden md:block">
            <MenuToolkit />
          </div>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ThemeToggle />
          <SelectNetwork />
          {/* <WalletConnect /> */}
        </div>
      </div>
    </header>
  );
}
