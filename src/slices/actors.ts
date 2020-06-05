import { sliceGenerator } from '../utils/sliceGenerator';

export const {
  reducer: actorsDataReducer,
  actions: actorsDataActions
} = sliceGenerator('actorsData');


export const { actorsDataSuccess }: any = actorsDataActions;
