import React from 'react';
import { TransactionProvider } from './context/TransactionContext';
import { Dashboard } from './components/Dashboard';
import { TransactionForm } from './components/TransactionForm';
import { TransactionList } from './components/TransactionList';
import { Wallet } from 'lucide-react';

function App() {
  return (
    <TransactionProvider>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Wallet className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">ExpenseTracker</span>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Dashboard />
          <div className="grid grid-cols-1 gap-6">
            <TransactionForm />
            <TransactionList />
          </div>
        </main>
      </div>
    </TransactionProvider>
  );
}

export default App;