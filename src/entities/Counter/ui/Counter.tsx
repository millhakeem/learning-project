/* eslint-disable unused-imports/no-unused-imports */
import { useDispatch, useSelector } from 'react-redux';

import {
    getCounterValue,
    useCountervalue,
} from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions, useCounterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    // Обычное использование через useSelector
    // const counterValue = useSelector(getCounterValue);

    // Через buildSelector
    const counterValue = useCountervalue();

    const { increment, addSome, decrement } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAdd = () => {
        addSome(5);
    };

    return (
        <div>
            <h1 data-testid='value-title'>value = {counterValue}</h1>
            <Button data-testid='increment-btn' onClick={handleInc}>
                increment
            </Button>
            <Button data-testid='decrement-btn' onClick={handleDec}>
                decrement
            </Button>
            <Button onClick={handleAdd}>add five</Button>
        </div>
    );
};
