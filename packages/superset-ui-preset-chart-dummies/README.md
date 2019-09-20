## superset-ui-preset-chart-dummies

[![Version](https://img.shields.io/npm/v/superset-ui-preset-chart-dummies.svg?style=flat-square)](https://img.shields.io/npm/v/superset-ui-preset-chart-dummies.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/apache-superset/superset-ui-plugins-template.svg?path=packages%2Fsuperset-ui-preset-chart-dummies&style=flat-square)](https://david-dm.org/apache-superset/superset-ui-plugins-template?path=packages/superset-ui-preset-chart-dummies)

This plugin provides a set of dummy charts for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import { WatermelonChartPlugin } from 'superset-ui-preset-chart-dummies';

new WatermelonChartPlugin()
  .configure({ key: 'watermelon' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://apache-superset.github.io/superset-ui-plugins-template/?selectedKind=plugin-chart-watermelon) for more details.

```js
<SuperChart
  chartType="watermelon"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```
