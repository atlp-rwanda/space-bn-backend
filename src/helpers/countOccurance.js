/* eslint-disable no-sequences */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */

export default (arr) => {
  const counted = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
  return counted;
};

export const sortByHighest = (obj) => Object.entries(obj).sort((a, b) => b[1] - a[1]);
