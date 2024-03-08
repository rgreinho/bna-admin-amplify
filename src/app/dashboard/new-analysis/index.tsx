'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

import ServerAction from './action';
import { FormSchema } from './schema';


function NewAnalysis() {
  const {
    register,
    clearErrors,
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
    if (serverReply?.errors?.length > 0) {
      clearErrors();

      for (const error of serverReply.errors) {
        const { name, message } = error;
        setError(name, { message });
      };
    }
  }, [serverReply?.errors]);

  return (
    <section className={styles['layout']}>
      <h1>Submit a New Analysis</h1>

      <form className={styles['form']} action={formAction}>
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

        <button type="submit">
          Submit
        </button>
      </form>

    </section>
  );
}


export default NewAnalysis;
