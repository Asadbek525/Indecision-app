import React from 'react';
import Option from './Option';
const Options = (props) => {
  let index = 1;
  return (
    <div className='widget'>
      <div className='widget-header'>
        <h3 className='widget-header__title'>Your Options</h3>
        <button
          className='button button--link'
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {props.options.length === 0 && (
        <p className='widget__message'>Please add an option to get started!</p>
      )}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          index={index++}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;