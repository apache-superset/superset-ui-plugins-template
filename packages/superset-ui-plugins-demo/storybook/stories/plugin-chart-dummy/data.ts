/* eslint-disable no-magic-numbers */
const points: { x: number; y: number }[] = [];

for (let i = 0; i < 100; i += 1) {
  points.push({
    x: Math.random(),
    y: Math.random(),
  });
}

export default points;
