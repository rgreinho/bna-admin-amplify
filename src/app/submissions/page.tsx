




function Page() {
  // const [submissions, setSubmissions] = useState([]);

  return (
    <section>
      <h1>Submissions Page</h1>
    </section>
  );
}


export default Page;
  // useEffect(() => {
  //   async function fetchS3Results() {
  //     const res = await fetch('/submissions?status=Pending');
  //     const data = await res.json();
  //     setSubmissions(data.data);
  //   }

  //   fetchS3Results();
  // }, []);
 // const handleOnClickAccept = (event, submission) => {
  //   let s = submission;
  //   s.status = 'Approved';
  //   fetch(`/submissions?cognito_access=${cognito_access}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(s),
  //   })
  //     .then((result) => {
  //       console.log('client result', result);
  //     })
  //     .catch((err) => {
  //       console.log('fetch error client', err);
  //     });

  //   const body = {
  //     country: s.country,
  //     city: s.city,
  //     region: s.region,
  //     fips_code: s.fipsCode,
  //   };
  //   // 👇 call backend endpoint using fetch API
  //   fetch(`/analysis?cognito_access=${cognito_access}`, {
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

// const handleOnClickReject = (event, submission) => {
  //   let s = submission;
  //   s.status = 'Rejected';
  //   fetch(`/submissions?cognito_access=${cognito_access}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(s),
  //   })
  //     .then((result) => {
  //       console.log('client result', result);
  //     })
  //     .catch((err) => {
  //       console.log('fetch error client', err);
  //     });
  // };

// const listSubmissions = submissions.map((s) => (
//   <TableRow key={s.id}>
//     <TableCell>{s.country}</TableCell>
//     <TableCell>{s.region}</TableCell>
//     <TableCell>{s.city}</TableCell>
//     <TableCell>{s.fips_code}</TableCell>
//     <TableCell>
//       <Button colorTheme="success" onClick={(e) => handleOnClickAccept(e, s)}>
//         ✅
//       </Button>
//     </TableCell>
//     <TableCell>
//       <Button colorTheme="error" onClick={(e) => handleOnClickReject(e, s)}>
//         ❌
//       </Button>
//     </TableCell>
//   </TableRow>
// ));

{/* <Card columnStart="2" columnEnd="-1" color={tokens.colors.teal[60]}>
        <h2>Pending submissions</h2>
        <Table className="styled-table">
          <TableHead>
            <TableRow>
              <TableCell as="th">Country</TableCell>
              <TableCell as="th">Region</TableCell>
              <TableCell as="th">City</TableCell>
              <TableCell as="th">Fips Code</TableCell>
              <TableCell as="th"></TableCell>
              <TableCell as="th"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listSubmissions}</TableBody>
        </Table>
      </Card> */}
