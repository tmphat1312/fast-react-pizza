import { useLoaderData as useLoaderDataOriginal } from 'react-router-dom';

export function useLoaderData<T>(): T {
  return useLoaderDataOriginal() as T;
}
