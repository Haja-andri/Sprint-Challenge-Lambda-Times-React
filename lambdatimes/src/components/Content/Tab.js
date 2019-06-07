import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const onTabClick = () => {
   props.selectTabHandler(props.tab);
   // console.log('this is clicked passing ' + props.tab)
  }

  const getTabClass = (selected) => {
    if (selected === props.tab) {
      return 'tab active-tab'
    }
    else return 'tab';
  }

  return (
    <div
      className={getTabClass(props.selectedTab)}
      onClick={onTabClick}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler : PropTypes.func.isRequired,
}

export default Tab;
