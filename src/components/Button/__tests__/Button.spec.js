import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

it('renders <Button /> without throwing', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
