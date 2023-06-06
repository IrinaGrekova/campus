import { LoadingState } from "../types";

export const isStateLoading = (state: LoadingState): boolean => 
    state === LoadingState.LOADING;

export const isStateInitial = (state: LoadingState): boolean => 
    state === LoadingState.INITIAL;

export const getTagFromText = (value: string) => 
    "#" + value.trim().replace(/ /g, "_");

