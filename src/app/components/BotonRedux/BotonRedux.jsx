'use client';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/redux/slices/counterSlice';
export default function BotonRedux() {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1 style={{ color: 'red' }}>Contador: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement{' '}
      </button>
    </>
  );
}
