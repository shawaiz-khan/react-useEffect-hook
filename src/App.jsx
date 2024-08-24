import './App.css'
import UseEffectBasics from './useEffect Hooks/UseEffect-basics'
import UseEffectCleanup from './useEffect Hooks/UseEffect-cleanup'
import UseEffectFetch from './useEffect Hooks/UseEffect-fetch'

function App() {
  return (
    <>
      <main className="h-full bg-white text-start justify-start items-start w-full">
        <header className='font-bold justify-between border-b-2 shadow-md border-gray-400 w-full p-5 flex items-center'>
          <h1 className='text-4xl text-blue-500'>useEffect Hook</h1>
          <h1 className='text-xl text-blue-500'>Author: <a href='https:\\devdigitals.org'>Shawaiz Khan</a></h1>
        </header>
        <div>
          <UseEffectBasics />
          <UseEffectCleanup />
          <UseEffectFetch />
        </div>
      </main>
    </>
  )
}

export default App
