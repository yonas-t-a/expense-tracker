import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BarChart3, Shield, Zap, DollarSign, TrendingUp, CheckCircle } from "lucide-react";

export default async function HomePage() {
  const session = await getServerSession();

  // If user is logged in, redirect to dashboard
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Expense<span className="text-gray-600">Tracker</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 mb-8">
            <span className="text-sm font-medium text-gray-700">
              Trusted by thousands of users worldwide
            </span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
            Take Control of Your
            <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Financial Future
            </span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 md:text-2xl">
            A sophisticated expense tracking platform that transforms how you manage money. 
            Simple, secure, and insightful.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-lg font-medium text-white hover:bg-gray-900 transition-all duration-200 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-medium text-gray-700 hover:border-black hover:text-black transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
            <div className="relative mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-100 p-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="h-2 w-24 rounded-full bg-gray-100" />
              </div>
              <div className="grid grid-cols-3 gap-4 p-6">
                <div className="col-span-2 h-64 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100" />
                <div className="space-y-4">
                  <div className="h-8 rounded-lg bg-gray-100" />
                  <div className="h-8 rounded-lg bg-gray-100" />
                  <div className="h-8 rounded-lg bg-gray-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Everything you need to master your finances
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Powerful features designed to give you complete control over your spending habits.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-black transition-colors group">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-black">
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Smart Analytics</h3>
              <p className="mb-4 text-gray-600">
                Visualize your spending patterns with interactive charts and insightful analytics.
              </p>
              <ul className="space-y-2">
                {['Monthly reports', 'Spending trends', 'Category insights', 'Budget tracking'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 hover:border-black transition-colors group">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-black">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Lightning Fast</h3>
              <p className="mb-4 text-gray-600">
                Add expenses in seconds with our streamlined interface and quick-entry features.
              </p>
              <ul className="space-y-2">
                {['One-click entries', 'Bulk upload', 'Voice input', 'Mobile app'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 hover:border-black transition-colors group">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-black">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Bank-Grade Security</h3>
              <p className="mb-4 text-gray-600">
                Your financial data is protected with enterprise-level encryption and security.
              </p>
              <ul className="space-y-2">
                {['End-to-end encryption', '2FA authentication', 'GDPR compliant', 'Regular audits'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">98%</div>
              <p className="text-gray-600">User satisfaction rate</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">50K+</div>
              <p className="text-gray-600">Active users</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">$10M+</div>
              <p className="text-gray-600">Tracked monthly</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">24/7</div>
              <p className="text-gray-600">Customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 mb-6">
            <TrendingUp className="mr-2 h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Start saving today</span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to transform your financial habits?
          </h2>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Join thousands of users who have saved an average of 30% on their monthly expenses.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-medium text-black hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
            
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-lg font-medium text-white hover:bg-white/5 transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Expense<span className="text-gray-600">Tracker</span>
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Security
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Status
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Contact
              </Link>
            </div>
            
            <div className="mt-6 text-sm text-gray-500 md:mt-0">
              © {new Date().getFullYear()} ExpenseTracker. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}