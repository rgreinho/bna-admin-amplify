'use client';

import { useFormStatus } from 'react-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import styles from './styles.module.css';


function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className={styles['button']}
      type="submit"
    >
      { pending
        ? <ClipLoader color={'#fff'} loading={true} size={15} />
        : text
      }
    </button>
  );
}


export default SubmitButton;
