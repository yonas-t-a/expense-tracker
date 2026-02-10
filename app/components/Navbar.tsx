"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const loading = status === "loading";

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href={session ? "/dashboard" : "/"} 
              className="flex items-center space-x-2"
            >
              <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:inline">
                Expense Tracker
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {!loading && (
              <>
                {session ? (
                  <>
                    <Link
                      href="/dashboard"
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isActive("/dashboard")
                          ? "bg-gray-100 text-black"
                          : "text-gray-700 hover:bg-gray-50 hover:text-black"
                      }`}
                    >
                      Dashboard
                    </Link>
                    <div className="hidden sm:block">
                      <span className="text-sm text-gray-600">
                        {session.user?.email}
                      </span>
                    </div>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isActive("/login")
                          ? "bg-gray-100 text-black"
                          : "text-gray-700 hover:bg-gray-50 hover:text-black"
                      }`}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/register"
                      className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}