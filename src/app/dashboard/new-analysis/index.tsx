'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';

import SubmitButton from '@Components/SubmitButton';

import ServerAction from './action';
import { FormSchema } from './schema';
import styles from './styles.module.css';


function NewAnalysis() {
  const {
    clearErrors,
    register,
    reset,
    setError,
    formState: { isValid, errors }
  } = useForm<FormSchema>({
    defaultValues: {
      country: '',
      city: '',
      region: '',
      fips_code: ''
    },
    resetOptions: {
      keepDirtyValues: true,  // user-interacted input will be retained
      keepErrors: false       // input errors will be retained with value update
    }
  });

  const initialState = { success: false, errors: [] };
  const [serverReply, formAction] = useFormState(ServerAction, initialState);

  useEffect(() => {
    if (serverReply.errors && serverReply.errors.length > 0) {
      clearErrors();

      for (const error of serverReply.errors) {
        const { name, message } = error;
        setError(name, { message });
      };
    }

    if (serverReply.success) {
      reset();
    }
  }, [clearErrors, reset, setError, serverReply]);

  return (
    <section className={styles['layout']}>
      <h1>Submit a New Analysis</h1>

      <form className={styles['form']} action={formAction}>

        { serverReply.success
          ? <p className={styles['success']}>Analysis submitted successfully!</p>
          : null
        }

        <div className={styles['input-container']}>
          <label htmlFor="country">Country</label>
          <input id="country"
            {...register('country', { required: true })}
          />
        </div>

        <div className={styles['input-container']}>
          <label htmlFor="city">City</label>
          <input id="city"
            {...register('city', { required: true })}
          />
        </div>

        <div className={styles['input-container']}>
          <label htmlFor="region">Region</label>
          <input id="region"
            {...register('region', { required: true })}
          />
        </div>

        <div className={styles['input-container']}>
          <label htmlFor="fips_code">FIPS Code</label>
          <input id="fips_code"
            {...register('fips_code', { required: true })}
        />
      </div>

      <SubmitButton text="Submit" />
    </form>

    </section>
  );
}

export default NewAnalysis;
