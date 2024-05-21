import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import {useDispatch} from "react-redux"
import { setSearch } from '../../Redux/Slices/SearchSlice';
const SearchContainer = styled.div`
  display: table;
  form {
    display: flex;
    align-items: center;
  }
  input {
    background: none;
    border: none;
    outline: none;
    width: ${(props) => (props.isActive ? '160px' : '28px')};
    min-width: 0;
    padding: 0;
    z-index: 1;
    position: relative;
    line-height: 18px;
    margin: 5px 0;
    margin-left:150px;
    font-size: 14px;
    -webkit-appearance: none;
    font-family: 'Mukta Malar';
    transition: all 0.6s ease;
    cursor: pointer;
    color: #fff;
  }
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
    transition: all 0.6s ease;
  }
  div {
    position: relative;
    height: 28px;
    width: 100%;
    margin: -28px 0 0 0;
    svg {
      display: block;
      position: absolute;
      height: 28px;
      width: 160px;
      right: 0;
      top: 0;
      fill: none;
      stroke: #fff;
      stroke-width: 1.5px;
      stroke-dashoffset: ${(props) => (props.isActive ? '300' : '271.908')};
      stroke-dasharray: ${(props) => (props.isActive ? '150 212.908' : '59 212.908')};
      transition: all 0.6s ease;
    }
  }
`;

const SvgSymbol = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 28" id="path">
      <path d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562" transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"></path>
    </symbol>
  </svg>
);

const AppContainer = styled.div`
  font-family: 'Mukta Malar', Arial;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);
  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatcher(setSearch(inputValue));
    navigate(`/search`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <SearchContainer isActive={isActive}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" "
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyPress={handleKeyPress} 
          value={isActive ? inputValue : ''}
        />
        <input type="submit" hidden />
      </form>
      <div>
        <svg>
          <use xlinkHref="#path"></use>
        </svg>
      </div>
    </SearchContainer>
  );
};


const SearchBar = () => (
  <AppContainer>
    <SvgSymbol />
    <SearchInput />
  </AppContainer>
);

export default SearchBar;