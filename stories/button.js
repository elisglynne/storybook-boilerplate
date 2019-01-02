import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Button from '../src/components/Button/Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add('with text', () => (
    <Button onClick={action('clicked')} primary>
      Hello Button
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('with knobs', () => (
    <Button
      onClick={action('clicked')}
      disabled={boolean('Button Disabled', false)}
      primary={boolean('Primary', false)}
    >
      {text('Button text', 'Clieck me…')}
    </Button>
  ));
