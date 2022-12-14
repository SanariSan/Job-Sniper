import type { FormikProps } from 'formik';

type TProps = FormikProps<{ username; password; passwordRe }>;

type TRegister = {
  [TKey in keyof TProps]: TProps[TKey];
} & {
  theme: string;
  isLoading: boolean;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export type { TRegister };
