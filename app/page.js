'use client'

import { useDispatch, useSelector } from 'react-redux';
import { add, sub } from './Redux/features/counter/counterSlice';
import { sum } from './Redux/features/summer/summerSlice';

const page = () => {
  const dispatch = useDispatch();

  const addSub = useSelector((state) => state.counter.count);
  const sumCount = useSelector((state) => state.summer.value);
  return (
    <section className='flex flex-col gap-10 justify-center items-center h-screen'>
      <div className='flex justify-center items-center gap-3'>
        <button className=' bg-red-300 px-3 py-1 rounded-md font-bold' onClick={() => dispatch(add())}>add 1</button>
        <section className='font-bold text-2xl'>{addSub}</section>
        <button className=' bg-red-300 px-3 py-1 rounded-md font-bold' onClick={() => dispatch(sub())}>minus 1</button>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <button className=' bg-red-300 px-3 py-1 rounded-md font-bold' onClick={() => dispatch(sum())}>add 10</button>
        <section className='font-bold text-2xl'>{sumCount}</section>
      </div>
    </section>
  );
};

export default page;
