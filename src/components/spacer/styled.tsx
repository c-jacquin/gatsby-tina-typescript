import styled from '@emotion/styled';

interface SpacerProps {
  hasLine: boolean;
  lineColor: string;
  height: number;
}

export const SpacerContainer = styled.div<SpacerProps>(({ lineColor, hasLine, height }) => ({
  height: `${height}px`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 5em',
}));

export const SpacerLine = styled.div<Partial<SpacerProps>>(({ lineColor = '#000', hasLine }) => ({
  borderBottom: hasLine ? `solid 4px ${lineColor}` : 'none',
  height: '4px',
  width: '100%',
}));
