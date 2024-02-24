function Page() {
  // const [s3results, setS3Results] = useState([]);

  return (
    <section>
      <h1>Results</h1>
    </section>
  );
}


export default Page;
// useEffect(() => {
  //   async function fetchS3Results() {
  //     const res = await fetch(`/s3results?cognito_access=${cognito_access}`);
  //     const data = await res.json();
  //     setS3Results(data.data);
  //   }

  //   fetchS3Results();
  // }, []);


  // const listResults = s3results.map((result) => <li key={result}>{result}</li>);

    // <Flex direction="column">
    //       <h2>BNA Results</h2>
    //       <div>
    //         <ul>{listResults}</ul>
    //       </div>
    //     </Flex>
