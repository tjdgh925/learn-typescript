import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../modules';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
