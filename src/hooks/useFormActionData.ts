import { useActionData as useActionDataOriginal } from 'react-router-dom';

type ErrorSchema = Record<string, string>;

type ActionDataSchema<ET = ErrorSchema> = {
  status: number;
  errors: ET;
};

export function useFormActionData<ET extends ErrorSchema>() {
  return useActionDataOriginal() as ActionDataSchema<ET> | undefined;
}
