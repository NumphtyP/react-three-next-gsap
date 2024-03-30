import { useEffect, useMemo, useRef } from 'react'
import * as d3 from 'd3'

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 }

export const AreaChart = ({ width, height, data }) => {
  const axesRef = useRef(null)
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  // Assuming data.x are JavaScript Date objects
  const xScale = useMemo(() => {
    const [min, max] = d3.extent(data, (d) => d.x)
    return d3.scaleTime().domain([min, max]).range([0, boundsWidth])
  }, [data, width])

  const yScale = useMemo(() => {
    const [min, max] = d3.extent(data, (d) => d.y)
    return d3.scaleLinear().domain([min, max]).range([boundsHeight, 0])
  }, [data, height])

  useEffect(() => {
    const svgElement = d3.select(axesRef.current)
    svgElement.selectAll('*').remove()
    const xAxisGenerator = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%Y-%m-%d'))
    svgElement.append('g').attr('transform', `translate(0,${boundsHeight})`).call(xAxisGenerator)
    const yAxisGenerator = d3.axisLeft(yScale)
    svgElement.append('g').call(yAxisGenerator)
  }, [xScale, yScale, boundsHeight])

  const areaBuilder = d3
    .area()
    .x((d) => xScale(d.x))
    .y1((d) => yScale(d.y))
    .y0(yScale(0))
  const lineBuilder = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y))

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
          <path d={areaBuilder(data)} fill='#9a6fb0' fillOpacity={0.4} />
          <path d={lineBuilder(data)} stroke='#9a6fb0' fill='none' strokeWidth={2} />
        </g>
        <g ref={axesRef} transform={`translate(${MARGIN.left},${MARGIN.top})`} />
      </svg>
    </div>
  )
}
