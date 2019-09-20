/* eslint-disable no-magic-numbers */
const points: { x: number }[] = [];

for (let i = 0; i < 10; i += 1) {
  points.push({
    x: Math.random(),
  });
}

export default points;
