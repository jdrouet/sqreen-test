import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import lodash from 'lodash';

import InputSection, { validate } from '../component/input-section';
import OutputSection from '../component/output-section';

import FilterAction from '../action/filter';
import StreamEffect from '../effect/stream';

export class Root extends Component {

  onChange(value) {
    this.props.filterAction.update(value);
  }

  onSearch() {
    this.props.streamEffect.fetch(this.props.filter.url);
  }

  getEvents() {
    if (!validate(this.props.filter)) {
      return [];
    }
    return lodash(this.props.stream.events)
      .map(item => ({
        ...item,
        createdAt: new Date(item.created_at),
      }))
      .filter(item => item.createdAt.getTime() > this.props.filter.fromDate.getTime())
      .filter(item => item.createdAt.getTime() < this.props.filter.toDate.getTime())
      .value();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <InputSection
              onChange={value => this.onChange(value)}
              onSearch={() => this.onSearch()}
              value={this.props.filter}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <OutputSection events={this.getEvents()} />
          </div>
        </div>
      </div>
    );
  }

}

Root.propTypes = {
  filter: PropTypes.shape({
    url: PropTypes.string,
    fromDate: PropTypes.date,
    toDate: PropTypes.date,
  }).isRequired,
  filterAction: PropTypes.shape({
    update: PropTypes.func.isRequired,
  }).isRequired,
  stream: PropTypes.shape({
    events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
  streamEffect: PropTypes.shape({
    fetch: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  state => ({
    filter: state.filter,
    stream: state.stream,
  }),
  dispatch => ({
    filterAction: bindActionCreators(FilterAction, dispatch),
    streamEffect: bindActionCreators(StreamEffect, dispatch),
  }),
)(Root);
