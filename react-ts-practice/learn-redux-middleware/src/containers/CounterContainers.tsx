import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/index';
import { increase, decrease, increaseBy } from '../modules/Counter';
import Counter from '../components/Counter';
const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
};

export default CounterContainer;
