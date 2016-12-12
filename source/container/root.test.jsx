import React from 'react';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';

import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Root } from './root';
import InputSection from '../component/input-section';
import OutputSection from '../component/output-section';

describe('container/Root', () => {

  const muiTheme = getMuiTheme();
  const store = configureMockStore();
  const shallowWithContext = node => shallow(node, {context: {muiTheme}});

  it('should display the informations', () => {
    const state = {
      filter: { url: '', fromDate: null, toDate: null },
      stream: { url: '', events: [] },
      filterAction: { update: sinon.spy() },
      streamEffect: { fetch: sinon.spy() },
    };
    const wrapper = shallowWithContext(
      <Root {...state} />
    );
    const inputSection = wrapper.find(InputSection);
    const outputSection = wrapper.find(OutputSection);
    expect(inputSection.node.props.value).to.eql(state.filter);
    expect(outputSection.node.props.events).to.eql(state.stream.events);
  });

  it('should filter the informations', () => {
    const state = {
      filter: { url: 'http://www.google.com', fromDate: new Date(2016, 0, 1), toDate: new Date(2016, 11, 31) },
      stream: { url: '', events: [
        {type: 'test', actor: {login: 'test'}, repo: {name: 'test'}, created_at: '2015-06-15' },
        {type: 'test', actor: {login: 'test'}, repo: {name: 'test'}, created_at: '2016-06-15' },
        {type: 'test', actor: {login: 'test'}, repo: {name: 'test'}, created_at: '2017-06-15' },
      ] },
      filterAction: { update: sinon.spy() },
      streamEffect: { fetch: sinon.spy() },
    };
    const wrapper = shallowWithContext(
      <Root {...state} />
    );
    const inputSection = wrapper.find(InputSection);
    const outputSection = wrapper.find(OutputSection);
    expect(inputSection.node.props.value).to.eql(state.filter);
    expect(outputSection.node.props.events.length).to.eql(1);
  });

});
