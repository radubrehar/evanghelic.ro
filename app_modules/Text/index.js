import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

import {
  primaryTextColor,
  secondaryTextColor,
  primaryColor,
  primaryColorDark
} from '@app/colors';

export const SIZE_MAP = {
  small: 12,
  standard: 14,
  std: 14, // an alias to standard
  'std-large': 16, // an alias to standard
  title: 20,
  headline: 28,
  'headline-large': 34,
  hero: 42
};

export const LINE_HEIGHT_MAP = {
  small: 1,
  standard: 1.2,
  std: 1.4, // an alias to standard
  'std-large': 1.6, // an alias to standard
  title: 1.7,
  headline: 2.2,
  'headline-large': 2.4,
  hero: 2.6
};

const WEIGHT_MAP = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900
};

export const TONE_COLOR_MAP = {
  neutral: primaryTextColor,
  dark: '#323232',
  positive: primaryColor,
  critical: primaryColor,
  passive: secondaryTextColor,
  disabled: '#d0d0d0'
};

const Text = ({
  weight = 'regular',
  size = 'std',
  lineHeight,
  tone = 'neutral',
  color,
  inlineBlock,
  block,
  children,
  ...props
}) => {
  const style = {
    ...props.style,
    fontSize: SIZE_MAP[size] || SIZE_MAP.std,
    lineHeight: LINE_HEIGHT_MAP[size] || LINE_HEIGHT_MAP.std
  };

  // if (lineHeight) {
  //   style.lineHeight = lineHeight;
  // }

  if (block) {
    style.display = 'block';
  }
  if (inlineBlock) {
    style.display = 'inline-block';
  }

  if (weight) {
    style.fontWeight = WEIGHT_MAP[weight];
  }
  if (lineHeight) {
    style.lineHeight = lineHeight;
  }

  if (tone) {
    style.color = TONE_COLOR_MAP[tone];
  }

  if (color) {
    style.color = color;
  }
  const Tag = props.tagName || 'span';
  return <Tag {...props} style={style} children={children} />;
};

Text.propTypes = {
  weight: PropTypes.oneOf([
    'thin',
    'light',
    'regular',
    'medium',
    'bold',
    'black'
  ]),
  size: PropTypes.oneOf([
    'small',
    'standard',
    'std',
    'std-large',
    'title',
    'headline',
    'headline-large',
    'hero'
  ]),
  tone: PropTypes.oneOf([
    'neutral',
    'dark',
    'positive',
    'critical',
    'passive',
    'disabled'
  ]),
  inlineBlock: PropTypes.bool,
  block: PropTypes.bool,
  tag: PropTypes.string,
  color: PropTypes.string
};

export default Text;
