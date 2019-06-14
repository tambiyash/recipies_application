import React from 'react';
import styled, {css} from 'styled-components';
import { Tag } from './Tag';
import { StyledCard } from './Card';

/**
 * Like Control is the heartshaped icon that we generally see around us in apps and web.
 * It give us the boolean result of favoriting/unfavoriting
 */

const normal_color = '#dddddd';
const like_color = '#d82e04';

const onTopCardStyles = css`
    top: 0;
    right: 0;
    position: absolute;
`;

const StyledLike = styled.div`
    line-height: 1;
    display: inline-block;

    ${props => props.onCard && onTopCardStyles}   
`;

const StyledLikeItem = styled.label`
    display: inline;
    padding: 3px;
    cursor: pointer;

    ::before {
        font-size: 3.5em;
        content: "❤";
        color: ${props => props.liked ? like_color : normal_color};
        transition: transform 0.3s;

        ${StyledCard}:hover {
            transform: scale(2);
      }
    }
`;

const StyledLikeInput = styled.input`
    position: absolute;
    visibility: hidden; 
`;

const StyledTag = styled(Tag)`
    width: 12px;
    height: 12px;
    padding: 4px;
    border-radius: 50%;
    position: absolute;
    right: 2px;
    font-size: 12px;
`;

const LikeItem  = (props) => {
    const { checked, liked, onChange, value, dark } = props;
    const changeHandler = (e) => {
      onChange();
    }
    return (
        <StyledLikeItem liked={liked} dark={dark}>
            <StyledLikeInput
                checked={checked}
                onChange={changeHandler}
                type="checkbox"
                value={value}
            />
            <StyledTag>{value}</StyledTag>
        </StyledLikeItem>
    );
}

export const LikeControl = (props) => {
    const { onChange, value, id, liked } = props;
    const changeHandler = () => {
      onChange(!liked, id);
    }
    return(
        <StyledLike {...props}>
            <LikeItem
                liked={liked}
                checked={liked}
                onChange={changeHandler}
                type="radio"
                value={value}
                id={id}
            />
        </StyledLike>
        
    );
}