/* eslint-disable max-len */

import themeJson from '../../data/theme/index.json';

export type Theme = typeof themeJson;

export type WithTheme = { theme: Theme };
