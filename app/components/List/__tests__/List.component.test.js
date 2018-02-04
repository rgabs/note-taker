import List from '../List.component';
import React from 'react';
import renderer from 'react-test-renderer';

describe('List component', () => {
  it('should render correctly', () => {
    const lisTree = renderer.create(<List />).toJSON();
    expect(lisTree).toMatchSnapshot();
  });
});
