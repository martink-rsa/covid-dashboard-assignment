import React, { useState, useEffect, useRef } from 'react';
import * as S from './SearchBar.style';
import { selectCountries, setCountry } from '../../store/covid';
import { useSelector, useDispatch } from 'react-redux';

function SearchBar() {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const [matched, setMatched] = useState([]);

  const inputRef = useRef(null);
  const [query, setQuery] = useState('');

  // For the UI
  const [isFocused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);

  function handleChange(event) {
    const { value } = event.currentTarget;
    setQuery(value);
  }

  useEffect(() => {
    // Switch 'search' with 'startsWith' to change search type
    const matched = countries.filter((country) => {
      return country.name.toLowerCase().search(query.toLowerCase()) !== -1;
    });
    setMatched(matched);
  }, [query, countries]);

  const handleClick = (event) => {
    const { value: index } = event.currentTarget;
    dispatch(setCountry(matched[index].iso3));
    setQuery(matched[index].name);
    setFocused(false);
  };

  return (
    <S.Wrapper>
      <S.Input
        onFocus={onFocus}
        value={query}
        onChange={handleChange}
        ref={inputRef}
      />
      <S.SuggestionArea>
        <ul>
          {isFocused &&
            query.length > 0 &&
            matched.map(({ name }, index) => (
              <li key={name}>
                <button onClick={handleClick} value={index}>
                  {name}
                </button>
              </li>
            ))}
        </ul>
      </S.SuggestionArea>
    </S.Wrapper>
  );
}

export default SearchBar;
