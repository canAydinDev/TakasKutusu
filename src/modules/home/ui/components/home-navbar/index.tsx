import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0  right-0 bg-[#eadac1] flex items-center h-16 px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and Logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex p-4 items-center gap-1 ">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              <p className="text-xl font-semibold tracking-tight">
                Takas <span className="text-[#debd88]">Kutusu</span>
              </p>
            </div>
          </Link>
        </div>
        {/* search bar */}
        <div className="flex-1 flex justify-center max-w-[720] mx-auto">
          <SearchInput />
        </div>
        <div className="flex flex-shrink-0 items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
