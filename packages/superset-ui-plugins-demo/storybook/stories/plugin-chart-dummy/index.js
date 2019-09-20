import DummyChartPlugin from '../../../../superset-ui-plugin-chart-dummy';
import Stories from './Stories';

new DummyChartPlugin().configure({ key: 'dummy' }).register();

export default {
  examples: [...Stories],
};
