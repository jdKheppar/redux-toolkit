import './App.css'
import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'
import Navbar from './components/Navbar'
function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div><Navbar /></div>

      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <div>Currenly count is: {count}</div>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </>
  )
}

export default App
