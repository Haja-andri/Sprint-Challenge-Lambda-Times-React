import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {
            props.cards.map((card, key) => (
              <Card 
              key = {key}
              headline = {card.headline}
              img = {card.img}
              author = {card.author}
              />
            ))
          }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default Cards;