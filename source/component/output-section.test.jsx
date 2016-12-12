import React from 'react';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

import OutputSection from './output-section';
import EventRow from './event-row';

describe('component/OutputSection', () => {
  const muiTheme = getMuiTheme();
  const renderWithContext = node => render(
    <MuiThemeProvider muiTheme={muiTheme}>{node}</MuiThemeProvider>,
    {context: {muiTheme}},
  )[0].children[0];
  const shallowWithContext = node => shallow(node, {context: {muiTheme}});

  it('should display the header', () => {
    const wrapper = shallowWithContext(<OutputSection events={[]} />);
    const headers = wrapper.find(TableHeaderColumn).nodes;
    expect(headers.length).to.eql(4);
    expect(headers[0].props.children).to.eql('Type');
    expect(headers[1].props.children).to.eql('Actor');
    expect(headers[2].props.children).to.eql('Repository');
    expect(headers[3].props.children).to.eql('Date');
  });

  it('should display the body', () => {
    const events = [
      {type: 'test', actor: {login: 'test'}, repo: {name: 'test'}, created_at: 'today'},
      {type: 'test', actor: {login: 'test'}, repo: {name: 'test'}, created_at: 'today'},
      {type: 'test', actor: {login: 'test'}, repo: {name: 'test'}, created_at: 'today'},
    ];
    const wrapper = shallowWithContext(<OutputSection events={events} />);
    const rows = wrapper.find(EventRow).nodes;
    expect(rows.length).to.eql(3);
  });

});
