import React from 'react';
import styled from 'styled-components';

/**
 * Just as Like Control, Rating control is another UI control which is used to give rating and feedback
 */

const StyledRating = styled.div`
    line-height: ${props => props.onCard ? 1 : 2};
    display: inline-block;
    cursor: pointer;
`;

const star_color = '#ababab';
const selected_star_color = '#ffbf00';

const StyledRatingItem = styled.label`
    display: inline;
    padding: 3px;

    ::before {
      font-size: ${props => props.onCard ? '1.5em' : '2.5em'};
      content: "★";
      color: ${props => props.colored ? selected_star_color : star_color};
    }
`;

const StyledRatingInput = styled.input`
    position: absolute;
    visibility: hidden;
`;

const range = (min, max) => Array(max - min + 1).fill().map((val, i) => min + i);

const RatingItem  = (props) => {
    const { checked, colored, onChange, value, onCard } = props;
    const changeHandler = (e) => {
      onChange(e.target.value);
    }
    return (
        <StyledRatingItem colored={colored} onCard={onCard}>
            <StyledRatingInput
                checked={checked}
                onChange={changeHandler}
                type="radio"
                value={value}
            />
        </StyledRatingItem>
    );  
}

export const Rating = (props) => {
    const { min, max, onChange, value, id, onCard } = props;
    const changeHandler = (value) => {
      onChange(value, id);
    }
    return (
      <StyledRating {...props}>
        {
          range(min, max).map((item, index) => (
            <RatingItem
              key={index}
              colored={value >= item}
              checked={value === item}
              value={item}
              onChange={changeHandler}
              onCard={onCard}
            />
          ))
        }
      </StyledRating>
    );
};
