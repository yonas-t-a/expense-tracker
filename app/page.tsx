import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function HomePage() {
  const session = await getServerSession();

  // If user is logged in, redirect to dashboard
  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-900">
          Track Your Expenses <br /> Effortlessly
        </h1>
        
        <p className="mb-8 text-lg text-gray-600">
          A simple and intuitive expense tracker to help you manage your finances.
          Sign up for free and start tracking today!
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="rounded-lg bg-black px-6 py-3 text-lg font-medium text-white hover:bg-blue-700"
          >
            Get Started Free
          </Link>
          
          <Link
            href="/login"
            className="rounded-lg border border-gray-300 px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-xl font-semibold">Easy Tracking</h3>
            <p className="text-gray-600">
              Quickly add expenses with just a few clicks.
            </p>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-xl font-semibold">Categories</h3>
            <p className="text-gray-600">
              Organize expenses by categories for better insights.
            </p>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-xl font-semibold">Secure</h3>
            <p className="text-gray-600">
              Your data is encrypted and securely stored.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}