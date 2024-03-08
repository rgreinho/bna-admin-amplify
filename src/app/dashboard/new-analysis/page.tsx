import { cookies } from 'next/headers';
import NewAnalysis from './index';


async function Page() {
  // const cookieStore = cookies();
  // let accessToken: string | null = null;
  // let data = [];

  // cookieStore.getAll().forEach(({ name, value }) => {
  //   if (name.endsWith('.accessToken')) {
  //     accessToken = value;
  //   }
  // });

  // const metadata = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${accessToken}`
  //   }
  // };

  // try {
  //   const resp = await fetch(`https://api.peopleforbikes.xyz/cities/submissions`, metadata);

  //   if (!resp.ok) {
  //     console.error(resp.text());
  //     return { success: false, errors: {message: 'oops! something went wrong!' }};
  //   }

  //   data = await resp.json();
  // } catch (error) {
  //   console.error(error);
  //   throw new Error('Fetch failed!');
  // }

  return (
    <NewAnalysis />
  );
}


export default Page;

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const body = {
  //     country: country,
  //     city: city,
  //     region: region,
  //     fips_code: fipsCode,
  //   };
  //   // 👇 call backend endpoint using fetch API
  //   fetch(`https://api.peopleforbikes.xyz/bnas/enqueue`, {
  //     method: 'POST',
  //     body: JSON.stringify(body),
  //     headers: {
  //       'content-type': 'application/json',
  //       Authorization: `Bearer ${cognito_access}`,
  //     },
  //   })
  //     .then((result) => {
  //       console.log('client result', result);
  //     })
  //     .catch((err) => {
  //       console.log('fetch error client', err);
  //     });
  // };


