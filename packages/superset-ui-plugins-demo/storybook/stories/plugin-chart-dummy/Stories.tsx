/* eslint-disable no-magic-numbers, sort-keys */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import data from './data';

export default [
  {
    renderStory: () => (
      <SuperChart
        chartType="dummy"
        width={400}
        height={400}
        queryData={{ data }}
        formData={{
          colorScheme: 'd3Category10',
          dateTimeFormat: '%Y-%m-%d',
          numberFormat: '.3s',
          richTooltip: true,
        }}
      />
    ),
    storyName: 'Basic',
    storyPath: 'plugin-chart-dummy|DummyChartPlugin',
  },
];
