import React, { Component } from 'react';

import { css } from 'glamor';

import { primaryColorText, accentColor } from '@app/colors';

const weights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900
};

const Text = ({
  accentColor: useAccentColor,
  children,
  style,
  block,
  thin,
  light,
  inlineBlock,
  align,
  size = 14,
  primaryColor: usePrimaryColor,
  ...props
}) => {
  let color;

  if (usePrimaryColor) {
    color = primaryColorText;
  }
  if (useAccentColor) {
    color = accentColor;
  }

  style = { ...style };

  if (color) {
    style.color = color;
  }
  if (size) {
    style.fontSize = size;
  }

  if (block) {
    style.display = 'block';
  }

  if (inlineBlock) {
    style.display = 'inline-block';
  }
  if (align) {
    style.textAlign = align;
  }
  if (light) {
    style.fontWeight = weights.light;
  }
  if (thin) {
    style.fontWeight = weights.thin;
  }
  return (
    <span style={style} {...props}>
      {children}
    </span>
  );
};

export default Text;
