'use client'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../_lib/_redux/counterSlicer'
// import { increment, decrement } from '@/lib/redux/counterSlice'

// TODO: migrate to zustand
export default function Counter() {
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div style={{ padding: 20 }}
        >
            <h2>مقدار شمارنده: {value}</h2>
            <button className="bg-sky-500 disabled:hover:bg-sky-900 p-2"
                onClick={() => dispatch(increment())}>
                افزایش
            </button>
            <button className="bg-red-500 disabled:hover:bg-sky-200 p-2 m-2"
                onClick={() => dispatch(decrement())}>
                کاهش
            </button>
        </div>
    )
}
