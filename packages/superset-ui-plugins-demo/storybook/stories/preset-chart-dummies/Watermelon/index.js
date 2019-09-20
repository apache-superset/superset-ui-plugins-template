import { WatermelonChartPlugin } from '../../../../../superset-ui-preset-chart-dummies';
import Stories from './Stories';

new WatermelonChartPlugin().configure({ key: 'watermelon' }).register();

export default {
  examples: [...Stories],
};
