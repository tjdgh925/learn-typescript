import { useTypedSelector } from '../hook/useTypedSelector';
import { useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {
  increase,
  decrease,
  increaseBy,
  CounterState,
} from '../modules/counter';
import Counter from '../components/Counter';

const CountContainer = () => {
  const count: CounterState = useTypedSelector((state) => state.counter);

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
      count={count.count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
};

export default CountContainer;
