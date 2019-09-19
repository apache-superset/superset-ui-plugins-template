/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { ChartProps } from '@superset-ui/chart';
import { findDepth } from './utils/IcicleEventTreeHelpers';

export default function transformProps(chartProps: ChartProps) {
  const { formData, queryData, width } = chartProps;
  // Need to double check if actually part of formData
  const { color, isVertical, rounding, transitionDuration } = formData;
  const { data } = queryData;

  const chartPropsHeight = chartProps.height;
  const rectHeight = 30;
  const heightFromTreeDepth = findDepth(data) * rectHeight;
  const height = chartPropsHeight > heightFromTreeDepth ? chartPropsHeight : heightFromTreeDepth;

  return {
    color,
    data,
    height,
    isVertical,
    rounding,
    transitionDuration,
    width,
  };
}
