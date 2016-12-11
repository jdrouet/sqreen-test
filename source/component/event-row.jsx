import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const EventRow = props => (
  <TableRow>
    <TableRowColumn>{props.event.type}</TableRowColumn>
    <TableRowColumn>{props.event.actor.login}</TableRowColumn>
    <TableRowColumn>{props.event.repo.name}</TableRowColumn>
    <TableRowColumn>{props.event.created_at}</TableRowColumn>
  </TableRow>
);

EventRow.propTypes = {
  event: PropTypes.shape({
    type: PropTypes.string.isRequired,
    actor: PropTypes.shape({
      login: PropTypes.string.isRequired,
    }).isRequired,
    repo: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventRow;
