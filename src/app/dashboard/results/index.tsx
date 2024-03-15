'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@aws-amplify/ui-react';


function Results({ data }) {
  const listResults = data.map(result => {
    const [country, region, city, version, ...rest ] = result.split('/');

    return (
      <TableRow key={`${version}-${city}`}>
        <TableCell>{country}</TableCell>
        <TableCell>{region}</TableCell>
        <TableCell>{city}</TableCell>
        <TableCell>{version}</TableCell>
      </TableRow>
    );
  });

  return (
    <section>
      <h1>BNA Results</h1>
      <Table className="styled-table">
        <TableHead>
          <TableRow>
            <TableCell as="th">Country</TableCell>
            <TableCell as="th">Region</TableCell>
            <TableCell as="th">City</TableCell>
            <TableCell as="th">Version</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            data.length > 1
              ? listResults
              : <div>NOTHING TO SEE HERE</div>
          }
        </TableBody>
      </Table>
    </section>
  );
}


export default Results;
