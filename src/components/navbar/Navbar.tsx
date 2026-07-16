"use client";

import Link from "next/link";
import { CarFront } from "lucide-react";



import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";
import { useClientSession } from "@/services/session";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
 const router = useRouter()
  const {user, isPending, } = useClientSession()
  console.log(user);
  
    const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            router.refresh();
          },
        },
      });
    } catch (err) {
      if(err){
             toast.error('something is Wrong') 
            }
      // console.error("Logout failed:", error);
    }
    
  };
    




  return (
    <header
      className="
        sticky
        top-0
        z-50

        border-b
        border-[var(--border)]

        bg-[color:color-mix(in_srgb,var(--background)_88%,transparent)]

        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto

          flex
          h-20
          max-w-7xl

          items-center
          justify-between

          px-5
          lg:px-8
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-br
              from-blue-600
              to-indigo-700

              text-white

              shadow-lg

              ring-4
              ring-blue-500/10

              transition-all
              duration-300

              group-hover:scale-105
              group-hover:rotate-3
            "
          >
            <CarFront
              size={24}
              strokeWidth={2.4}
            />
          </div>

          <div className="leading-none">
            <h1
              className="
                text-2xl
                font-black
                tracking-tight

                text-[var(--foreground)]
              "
            >
              Drive
              <span className="text-[var(--primary)]">
                Mart
              </span>
            </h1>

            <p
              className="
                mt-1

                text-[11px]

                font-semibold

                uppercase

                tracking-[0.3em]

                text-[var(--foreground-muted)]
              "
            >
              Buy • Sell • Drive
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center lg:flex">
          <NavLinks user={user} />
        </nav>

        {/* Right */}

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />

          {isPending ? (
            <div
              className="
                h-10
                w-28

                animate-pulse

                rounded-xl

                bg-[var(--surface-secondary)]
              "
            />
          ) : user ? (
            <ProfileDropdown
              name={user?.name}
              email={user?.email}
              onLogout={handleLogout}
            />
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="
                  rounded-xl

                  border
                  border-[var(--border)]

                  bg-[var(--surface)]

                  px-5
                  py-2.5

                  font-semibold

                  text-[var(--foreground)]

                  transition-all
                  duration-200

                  hover:bg-[var(--surface-secondary)]
                "
              >
                Login
              </Link>

              <Link
                href="/register"
                className="
                  rounded-xl

                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600

                  px-5
                  py-2.5

                  font-semibold
                  text-white

                  shadow-lg

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:shadow-xl
                "
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile */}

        <div className="lg:hidden z-50">
          <MobileMenu
            user={user}
            logout={handleLogout}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;