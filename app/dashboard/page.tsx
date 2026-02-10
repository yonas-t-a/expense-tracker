import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import AddExpenseForm from "@/app/components/AddExpenseForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) redirect("/login");

  const userId = parseInt(session.user.id);

  const expenses = await prisma.expense.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      amount: true,
      category: true,
      description: true,
      userId: true,
      createdAt: true,
    },
  });

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome back, <span className="font-semibold">{session.user?.email}</span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">{expenses.length}</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Total Amount</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {formatCurrency(totalAmount)}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Average per Expense</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {expenses.length > 0
                ? formatCurrency(totalAmount / expenses.length)
                : formatCurrency(0)}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Add Expense Form */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Add New Expense
              </h2>
              <AddExpenseForm />
            </div>
          </div>

          {/* Right Column - Expenses List */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white shadow-sm">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Expenses
                </h2>
              </div>

              {expenses.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gray-100" />
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    No expenses yet
                  </h3>
                  <p className="text-gray-500">
                    Start by adding your first expense using the form on the left.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {expenses.map((expense) => (
                        <tr key={expense.id} className="hover:bg-gray-50">
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">
                              {expense.description}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                              {expense.category}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-900">
                            {formatCurrency(expense.amount)}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            {formatDate(expense.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}