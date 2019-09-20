## superset-ui-plugin-chart-dummy

[![Version](https://img.shields.io/npm/v/superset-ui-plugin-chart-dummy.svg?style=flat-square)](https://img.shields.io/npm/v/superset-ui-plugin-chart-dummy.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/apache-superset/superset-ui-plugins-template.svg?path=packages%2Fsuperset-ui-legacy-plugin-chart-dummy&style=flat-square)](https://david-dm.org/apache-superset/superset-ui-plugins-template?path=packages/superset-ui-legacy-plugin-chart-dummy)

This plugin provides Dummy for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import DummyChartPlugin from 'superset-ui-plugin-chart-dummy';

new DummyChartPlugin()
  .configure({ key: 'dummy' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://apache-superset.github.io/superset-ui-plugins-template/?selectedKind=plugin-chart-dummy) for more details.

```js
<SuperChart
  chartType="dummy"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```