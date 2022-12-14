import type { FormikProps } from 'formik';

type TProps = FormikProps<{ username; password }>;

type TLogin = {
  [TKey in keyof TProps]: TProps[TKey];
} & {
  theme: string;
  isLoading: boolean;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export type { TLogin };
