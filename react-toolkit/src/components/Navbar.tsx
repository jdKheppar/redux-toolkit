import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'



function Navbar() {
    const count = useSelector((state: RootState) => state.counter.value)

    return (
        <>Count in Navbar is: {count} </>
    )
}

export default Navbar