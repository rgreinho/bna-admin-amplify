function Page() {
  return (
    <section>
      <h1>Submit a New Analysis</h1>
    </section>
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

    // <h2>Submit a new analysis</h2>
    //     <Fieldset legend="Analysis" variation="outlined" direction="column">
    //       <form onSubmit={(e) => handleSubmit(e)}>
    //         <Flex direction="column" gap="small">
    //           <Label htmlFor="country">Country</Label>
    //           <Input
    //             id="country"
    //             size="small"
    //             width="100%"
    //             value={country}
    //             onChange={(e) => setCountry(e.target.value)}
    //           />
    //         </Flex>

    //         <Flex direction="column" gap="small">
    //           <Label htmlFor="city">City</Label>
    //           <Input
    //             id="city"
    //             width="100%"
    //             value={city}
    //             onChange={(e) => setCity(e.target.value)}
    //           />
    //         </Flex>

    //         <Flex direction="column" gap="small">
    //           <Label htmlFor="region">Region</Label>
    //           <Input
    //             id="region"
    //             size="large"
    //             width="100%"
    //             value={region}
    //             onChange={(e) => setRegion(e.target.value)}
    //           />
    //         </Flex>

    //         <Flex direction="column" gap="small">
    //           <Label htmlFor="fipsCode">FIPS Code</Label>
    //           <Input
    //             id="fipsCode"
    //             size="large"
    //             width="100%"
    //             value={fipsCode}
    //             onChange={(e) => setFipsCode(e.target.value)}
    //           />
    //         </Flex>
    //         <Button variation="primary" type="submit">
    //           Submit
    //         </Button>
    //       </form>
    //     </Fieldset>
