'use client';
import { decrement, increment } from '@/redux/slices/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const metadata = {
  title: 'Products',
};
export default function products() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.value);

  return (
    <>
      <h1 style={{ color: 'red' }}>mmmmmmmmmmmmmmmm{count}</h1>
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
