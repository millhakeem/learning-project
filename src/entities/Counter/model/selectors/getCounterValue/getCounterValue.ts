import { buildSelector } from '@/shared/lib/store';

export const [useCountervalue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);
