import React from 'react';
import styled from '@emotion/styled';

const Time = styled.time({
  fontHeight: '0.6em',
  fontWeight: 'lighter',
});

const DateLabel: React.FC<{ date: string; formatted: string }> = ({ date, formatted }) => {
  const splitted = formatted.split(' ');

  return (
    <Time dateTime={date}>
      Le {splitted[0]} à {splitted[1]}
    </Time>
  );
};

export default DateLabel;
