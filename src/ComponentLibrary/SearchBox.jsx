import React, {Component} from 'react';
import styled from "styled-components";
import { Button } from "./Button";

/**
 * Used inside a form, Searchbox, as the name suggests give us the searched results data
 * based on call handler implementation. It maintains the query change in local state on Change and returns it to it's container on Form Submit
 */

const SearchWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-items: center;
    justify-self: center;
    margin-bottom: 30px;
    position: relative;
`;

const SearchInput = styled.input`
    width: 250px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    padding: 10px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb;
    color: #999999;
    text-indent: 20px;
`;

const SearchButton = styled(Button)`
    padding: 12px;
    margin: 0px;
`;

export default class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <SearchWrapper>
                <SearchButton iconButton={true} type="submit">Search</SearchButton>
                <SearchInput type='text' placeholder={'Search..'} value={this.state.value} onChange={this.handleChange} />
              </SearchWrapper>
            </form>
          )
    }

    handleChange = (event) => {
        this.setState({ value: event.currentTarget.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        return this.props.onSubmit(this.state.value);
      }
}