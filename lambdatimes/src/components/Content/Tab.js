import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const onTabClick = () => {
   props.selectTabHandler(props.tab);
   // console.log('this is clicked passing ' + props.tab)
  }

  return (
    <div
      className={'tab'}
      onClick={onTabClick}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
