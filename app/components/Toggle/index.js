import React from 'react';
import ToggleOption from '../ToggleOption';
import './styles.scss';
import messages from './messages.js';
import { FormattedMessage } from 'react-intl';

function Toggle(props) {
  let content = (<option>--</option>);

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => (
      <ToggleOption key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <div className="toggle-container">
      <select className="select" value={props.value} onChange={props.onToggle}>
        {content}
      </select>
    </div>
  );
}

Toggle.propTypes = {
  onToggle: React.PropTypes.func,
  values: React.PropTypes.array,
  value: React.PropTypes.string,
  messages: React.PropTypes.object,
};

export default Toggle;
