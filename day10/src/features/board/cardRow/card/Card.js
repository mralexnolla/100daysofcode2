import React from 'react';
// Add import statements below
import {useSelector} from 'react-redux';
import {selectVisibleIDs, flipCard, selectMatchedIDs} from '../../boardSlice.js';
import {useDispatch} from 'react-redux';

//let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";
//let cardLogo = "#thankU4Ex16";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const dispatch = useDispatch();
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id))
  };

  const matchedIDs = useSelector(selectMatchedIDs)

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    //<img src={cardLogo} className="logo-placeholder" alt="Card option" />
    "#thankU4Ex16"
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
