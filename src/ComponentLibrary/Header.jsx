import styled from "styled-components";
import { NavLink } from "react-router-dom";

/**
 * Very basic header including HelloFresh's logo. 
 */

export const Header = styled.header`
    z-index: 32;
    color: rgba(255, 255, 255, 0.75);
    background-color: #24292e;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
`;

export const Nav = styled(NavLink)`
    color: white;
    padding-left: 30px; 
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    font-size: 18px;

    :hover {
        color: #b2e8d7;
      }
`;