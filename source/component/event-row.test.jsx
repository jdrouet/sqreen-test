import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import EventRow from './event-row';

describe('component/EventRow', () => {
  const muiTheme = getMuiTheme();
  const renderWithContext = node => render(
    <MuiThemeProvider muiTheme={muiTheme}>{node}</MuiThemeProvider>
  )[0].children[0];

  it('should display the informations', () => {
    const event = {
      actor: {
        login: 'to the infinite',
      },
      repo: {
        name: 'and beyond',
      },
      type: 'something',
      created_at: '22-01-1990',
    };
    const wrapper = renderWithContext(<EventRow event={event} />);
    expect(wrapper.children.length).to.eql(4);
    const [type, login, repo, created] = wrapper.children;
    expect(type.children[0].data).to.eql('something');
    expect(login.children[0].data).to.eql('to the infinite');
    expect(repo.children[0].data).to.eql('and beyond');
    expect(created.children[0].data).to.eql('22-01-1990');
  });
});
