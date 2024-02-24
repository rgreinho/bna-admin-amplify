'use client';


import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Fieldset,
  Flex,
  Grid,
  Input,
  Label,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
  useAuthenticator
} from '@aws-amplify/ui-react';

import aws_exports from '../../aws-exports';


function Dashboard() {
  // console.log({ user });



  // const aws_user_pools_client_id = aws_exports.Auth.Cognito.userPoolClientId;
  // const cognito_access = localStorage.getItem(
  //   `CognitoIdentityServiceProvider.${aws_user_pools_client_id}.${user.username}.accessToken`
  // );


  // const [country, setCountry] = useState([]);
  // const [city, setCity] = useState([]);
  // const [region, setRegion] = useState([]);
  // const [fipsCode, setFipsCode] = useState([]);
  // const [result, setResult] = useState<any>();



  return (
    <main>ADMIN</main>
    // <Grid
    //   columnGap={tokens.space.xs}
    //   rowGap={tokens.space.xs}
    //   templateColumns="1fr 1fr 1fr"
    //   templateRows="1fr 3fr 1fr"
    // >

    //   <Card columnStart="1" columnEnd="2" color={tokens.colors.teal[60]}>
    //     Nav
    //   </Card>

    //     {/* <Flex direction="column"> */}
    //
    //
    //   </Card>
    //   <Card columnStart="1" columnEnd="-1" color={tokens.colors.teal[60]}>
    //     Footer
    //   </Card>
    // </Grid>
  );
}


export default Dashboard;
