/** @flow */

const MONTH: Array<string> = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const date = d => `${MONTH[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

