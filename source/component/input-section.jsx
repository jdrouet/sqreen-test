import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import validator from 'validator';

const styles = {
  card: {
    margin: 10,
  },
};

export const validate = filter =>
  validator.isURL(filter.url) &&
    filter.fromDate && filter.toDate &&
    filter.fromDate.getTime() < filter.toDate.getTime();

const InputSection = props => (
  <Card style={styles.card}>
    <CardText>
      <div className="row bottom-xs">
        <div className="col-xs-12 col-md-4">
          <TextField
            floatingLabelText="Github stream url"
            fullWidth
            name="url"
            onChange={e => props.onChange({ url: e.target.value })}
            value={props.value.url}
          />
        </div>
        <div className="col-xs-5 col-md-3">
          <DatePicker
            floatingLabelText="From date"
            fullWidth
            name="from-date"
            onChange={(e, date) => props.onChange({ fromDate: date })}
            value={props.value.fromDate}
          />
        </div>
        <div className="col-xs-5 col-md-3">
          <DatePicker
            floatingLabelText="To date"
            fullWidth
            name="to-date"
            onChange={(e, date) => props.onChange({ toDate: date })}
            value={props.value.toDate}
          />
        </div>
        <div className="col-xs-2 col-md-2">
          <RaisedButton
            disabled={!validate(props.value)}
            fullWidth
            primary
            onTouchTap={props.onSearch}
            label="Search"
          />
        </div>
      </div>
    </CardText>
  </Card>
);

InputSection.propTypes = {
  value: PropTypes.shape({
    url: PropTypes.string,
    fromDate: PropTypes.date,
    toDate: PropTypes.date,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default InputSection;
