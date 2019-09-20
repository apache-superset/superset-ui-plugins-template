import { Preset } from '@superset-ui/core';
import WatermelonChartPlugin from './Watermelon';

export default class DummyChartPreset extends Preset {
  constructor() {
    super({
      name: 'Dummy charts',
      plugins: [new WatermelonChartPlugin().configure({ key: 'watermelon' })],
    });
  }
}
