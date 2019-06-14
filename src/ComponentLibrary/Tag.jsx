import styled from "styled-components";

/**
 * Tag components are little helpers which give us the related data in small fonts, Count, names, be anything.
 */

export const Tag = styled.span`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    border-radius: 3px;
    background-color: ${props => props.primary ? '#137cbd' : '#5c7080'};
    width: 65px;
    padding: 1px 3px;
    color: #f5f8fa;
    line-height: 16px;
    font-size: 12px;
    font-weight: 600;    
`;