import { create } from '@storybook/theming/create';
 
export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
 
  brandTitle: 'My Storybook',
  //brandUrl: 'https://example.com',
 // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
 
  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#9AD0DA',
 
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#9AD0DA',
  //appBorderRadius: 4,
 
  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',
 
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#9AD0DA',
  barHoverColor: '#9AD0DA',
  barBg: '#ffffff',
 
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  //inputBorderRadius: 2,
});