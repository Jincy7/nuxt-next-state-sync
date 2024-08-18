'use client'

import { useCounterStore } from '@/app/components/CounterStoreProvider';



export default function Home() {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>
        Increment Count
      </button>
      <button type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </button>
    </main>
  );
}
