import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

import EventRow from './event-row';

const styles = {
  card: {
    margin: 10,
  },
};

const OutputSection = props => (
  <Card style={styles.card}>
    <Table height="450px">
      <TableHeader
        adjustForCheckbox={false}
        displaySelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn>Type</TableHeaderColumn>
          <TableHeaderColumn>Actor</TableHeaderColumn>
          <TableHeaderColumn>Repository</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.events.map((item, i) => (
          <EventRow
            event={item}
            key={i}
          />
        ))}
      </TableBody>
    </Table>
  </Card>
);

OutputSection.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

export default OutputSection;
