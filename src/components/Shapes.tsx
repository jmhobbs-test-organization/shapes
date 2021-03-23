import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';

interface Props {
  color?: string;
  style?: CSSProperties;
}

const Shape = styled.svg<Props>(({ color }) => ({
  height: 100,
  maxWidth: 100,
  fill: color,
  verticalAlign: 'top',
}));

export const Donut = (props: Props) => (
  <Shape viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" color="hotpink" {...props}>
    <path d="M45 0c24.853 0 45 20.147 45 45S69.853 90 45 90 0 69.853 0 45 20.147 0 45 0zm.5 27C35.283 27 27 35.283 27 45.5S35.283 64 45.5 64 64 55.717 64 45.5 55.717 27 45.5 27z" />
  </Shape>
);

export const L = (props: Props) => (
  <Shape viewBox="0 0 55 89" xmlns="http://www.w3.org/2000/svg" color="#66BF3C" {...props}>
    <path d="M55 3v83a3 3 0 01-3 3H3a3 3 0 01-3-3V64a3 3 0 013-3h21a3 3 0 003-3V3a3 3 0 013-3h22a3 3 0 013 3z" />
  </Shape>
);

export const Dice = (props: Props) => (
  <Shape viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" color="#FF4785" {...props}>
    <path d="M92 89V3c0-3-2.056-3-3-3C39.294 0 0 39.294 0 89c0 0 0 3 3 3h86a3 3 0 003-3z" />
  </Shape>
);
