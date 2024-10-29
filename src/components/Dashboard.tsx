import React from 'react';
import { useTransactions } from '../context/TransactionContext';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export function Dashboard() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      const amount = transaction.amount;
      if (transaction.type === 'income') {
        acc.income += amount;
        acc.balance += amount;
      } else {
        acc.expenses += amount;
        acc.balance -= amount;
      }
      return acc;
    },
    { income: 0, expenses: 0, balance: 0 }
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Balance</p>
            <p className="text-2xl font-semibold text-gray-900">
              ${summary.balance.toFixed(2)}
            </p>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <DollarSign className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Income</p>
            <p className="text-2xl font-semibold text-green-600">
              ${summary.income.toFixed(2)}
            </p>
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Expenses</p>
            <p className="text-2xl font-semibold text-red-600">
              ${summary.expenses.toFixed(2)}
            </p>
          </div>
          <div className="p-3 bg-red-100 rounded-full">
            <TrendingDown className="h-6 w-6 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}