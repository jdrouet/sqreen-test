import React from 'react';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import InputSection, { validate } from './input-section';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

describe('component/InputSection', () => {
  const muiTheme = getMuiTheme();
  const shallowWithContext = node => shallow(node, {context: {muiTheme}});

  it('should pass the parameters and enaable button', () => {
    const value = {
      url: 'http://www.google.com',
      fromDate: new Date(2016, 11, 10),
      toDate: new Date(2017, 0, 1),
    };
    const onChange = sinon.spy();
    const onSearch = sinon.spy();
    const wrapper = shallowWithContext(
      <InputSection
        onChange={onChange}
        onSearch={onSearch}
        value={value}
      />
    );
    expect(wrapper.find(DatePicker).nodes[0].props.value).to.eql(value.fromDate);
    expect(wrapper.find(DatePicker).nodes[1].props.value).to.eql(value.toDate);
    expect(wrapper.find(TextField).node.props.value).to.eql('http://www.google.com');
    expect(wrapper.find(RaisedButton).node.props.disabled).to.eql(false);
  });

  it('should pass the parameters and disable button', () => {
    const value = {
      url: 'http://www.google.com',
      fromDate: new Date(),
      toDate: null,
    };
    const onChange = sinon.spy();
    const onSearch = sinon.spy();
    const wrapper = shallowWithContext(
      <InputSection
        onChange={onChange}
        onSearch={onSearch}
        value={value}
      />
    );
    expect(wrapper.find(DatePicker).nodes[0].props.value).to.eql(value.fromDate);
    expect(wrapper.find(DatePicker).nodes[1].props.value).to.eql(value.toDate);
    expect(wrapper.find(TextField).node.props.value).to.eql('http://www.google.com');
    expect(wrapper.find(RaisedButton).node.props.disabled).to.eql(true);
  });

  describe('validate', () => {

    [
      {
        input: {
          url: 'http://www.google.com',
          fromDate: new Date(2016, 0, 1),
          toDate: new Date(2016, 2, 1),
        },
        output: true,
      },
      {
        input: {
          url: 'http://www.google.com',
          fromDate: new Date(2016, 0, 1),
          toDate: new Date(2015, 2, 1),
        },
        output: false,
      },
      {
        input: {
          url: 'helloworld',
          fromDate: new Date(2016, 0, 1),
          toDate: new Date(2016, 2, 1),
        },
        output: false,
      },
      {
        input: {
          url: 'http://www.google.com',
          fromDate: null,
          toDate: new Date(2016, 2, 1),
        },
        output: false,
      },
      {
        input: {
          url: 'http://www.google.com',
          fromDate: new Date(2016, 0, 1),
          toDate: null,
        },
        output: false,
      },
    ].forEach(item => {

      it(`should return ${item.output} for ${JSON.stringify(item.input)}`, () => {
        expect(!!validate(item.input)).to.eql(item.output);
      });

    });

  });

});
