'use client'

import { useCounterStore } from '@/app/components/CounterStoreProvider';

export default function Home() {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">Next.js Counter</h1>
      
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Counter</h2>
          <p className="text-6xl font-bold text-center">{count}</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => void decrementCount()}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            <button
              type="button"
              onClick={() => void incrementCount()}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}