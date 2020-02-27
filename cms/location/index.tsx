/* eslint-disable @typescript-eslint/camelcase */
import styled from '@emotion/styled';
import React, { useState } from 'react';

import { Input } from '@tinacms/fields';
import _ from 'lodash';
import { transparentize } from 'polished';
import { FieldProps } from '../type';

const ACCESS_TOKEN = '0df7dfa5dcccfd';
const API_URL = 'https://api.locationiq.com/v1/autocomplete.php';

const InputWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'visible',
});

const RowResult = styled.div({
  background: 'white',
  borderBottom: 'solid 0.5px black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '30px',
  overflow: 'hidden',
  fontSize: '0.6em',
  position: 'relative',
  cursor: 'pointer',
  padding: '0 0.4em',
  textOverflow: 'ellipsis',
  '&:hover': {
    backgroundColor: transparentize(0.8, '#000'),
  },
});

const Results = styled.div({
  position: 'absolute',
  bottom: '-80px',
  boxShadow: `0 0.5rem 1rem -0.5rem ${transparentize(0.3, '#000')}`,
  width: '90%',
  zIndex: 1000,
  height: '200px',
  overflowY: 'auto',
  backgroundColor: 'white',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const Value = styled.div({
  fontSize: '0.8em',
  color: 'gray',
  padding: '0 0.4em',
  textOverflow: 'ellipsis',
});

const LocationSearchInput: React.FC<FieldProps> = ({ input, field, meta }) => {
  const [results, setResults] = useState<any[]>([]);
  const [hasFocus, setFocus] = useState(false);
  const handleChange = _.debounce(async (address: string) => {
    try {
      const res = await fetch(`${API_URL}?key=${ACCESS_TOKEN}&q=${address}`);
      const result = await res.json();
      setResults(result);
    } catch (err) {
      throw new Error('Something fail while fetching locationIq api');
    }
  }, 1000);

  const handleSelect = ({ lat, lon, display_name }: any) => {
    input.onChange({ lat: parseFloat(lat), lng: parseFloat(lon), address: display_name });
  };

  return (
    <InputWrapper>
      <label htmlFor={input.name}>{field.label}</label>
      <Input
        id={input.name}
        name={input.name}
        placeholder="Type an address ..."
        onFocus={() => setFocus(true)}
        onBlur={_.debounce(() => setFocus(false), 200)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
      />
      <Value>{(input.value as any).address}</Value>
      <Value>{(input.value as any).lat} lat</Value>
      <Value>{(input.value as any).lng} lng</Value>

      {!!results.length && hasFocus && (
        <Results>
          {results.map((result, idx) => (
            <RowResult onClick={() => handleSelect(result)} key={idx}>
              {result.display_name}
            </RowResult>
          ))}
        </Results>
      )}
    </InputWrapper>
  );
};

export default LocationSearchInput;
