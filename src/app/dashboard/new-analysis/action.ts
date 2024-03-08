'use server';

import { cookies } from 'next/headers';

import formSchema from './schema';
import { ZodError } from 'zod';


type Result = {
  success: boolean,
  errors?: Array<{
    path: string;
    message: string;
  }> | null | ZodError
};

async function ServerAction(prevState: Result, formData: FormData): Promise<Result> {
  const _formData = {
    country: formData.get('country') as string,
    city: formData.get('city') as string,
    region: formData.get('region') as string,
    fips_code: formData.get('fips_code') as string
  };

  const isValid = formSchema.safeParse(_formData);

  if (!isValid.success) {
    return {
      success: false,
      errors: isValid.error.issues
    };
  }

  const cookieStore = cookies();
  let accessToken: string | null = null;
  let data = [];

  cookieStore.getAll().forEach(({ name, value }) => {
    if (name.endsWith('.accessToken')) {
      accessToken = value;
    }
  });

  const metadata = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(isValid.data)
  };

  try {
    const resp = await fetch('https://api.peopleforbikes.xyz/bnas/enqueue', metadata);

    if (!resp.ok) {
      console.error(resp.headers);
      console.error(await resp.text());
      throw new Error(`Failed to fetch data: ${JSON.stringify(metadata)}`);
    }

    console.log(await resp.json());
  } catch (error) {
    console.error(error);
  }

  return {
    success: true,
    errors: null
  };
}


export default ServerAction;
