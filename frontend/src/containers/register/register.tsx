import type { FormikHelpers } from 'formik';
import { Formik } from 'formik';
import type { FC } from 'react';
import { useCallback } from 'react';
import { RegisterComponent } from '../../components/register';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { registerUserAsync, themeSelector, userAuthLoadingStatusSelector } from '../../store';
import { FormSubmitControlContainer } from '../form-submit-control';
import { INITIAL_VALUES, VALIDATION_SCHEMA } from './register.const';
import type { TFormValues } from './register.type';

const RegisterContainer: FC = () => {
  const theme = useAppSelector(themeSelector);
  const userAuthLoadingState = useAppSelector(userAuthLoadingStatusSelector);
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (values: TFormValues, actions: FormikHelpers<TFormValues>) => {
      console.log({ values });
      void dispatch(registerUserAsync({ login: values.username, password: values.password }));
    },
    [dispatch],
  );

  return (
    <Formik initialValues={INITIAL_VALUES} validationSchema={VALIDATION_SCHEMA} onSubmit={onSubmit}>
      {(formikConfig) => (
        <>
          <RegisterComponent
            theme={theme}
            isLoading={userAuthLoadingState === 'loading'}
            {...formikConfig}
          />
          <FormSubmitControlContainer isLoading={userAuthLoadingState === 'loading'} />
        </>
      )}
    </Formik>
  );
};

export { RegisterContainer };
