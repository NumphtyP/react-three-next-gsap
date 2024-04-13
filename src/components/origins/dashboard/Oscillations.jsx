import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

function VerticalOscillationSignal() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/stability/combined_time_series.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div className='dark:bg-darkblack-600 rounded-lg bg-white p-5'>
      <div className='mb-5 flex items-center justify-between'>
        <div className='flex items-center space-x-[7px]'>
          <span className='text-bgray-900 text-lg font-semibold dark:text-white'>{title}</span>
        </div>
      </div>
      <div className='flex items-end justify-between'>
        <div className='flex-1'>
          <p className='text-bgray-900 text-3xl font-bold leading-[48px] dark:text-white'>${amount}</p>
          <div className='flex items-center space-x-1'>
            <span className='text-success-300 text-sm font-medium'>{groth}</span>
            <span className='text-bgray-700 dark:text-bgray-50 text-sm font-medium'>from last week</span>
          </div>
        </div>
        <div className='h-[68px] w-[106px]'>
          <LineChart option={options} dataSet={data} refer={chartRef} />
        </div>
      </div>
    </div>
  )
}

function VerticalOscillationMedian() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/stability/vertoscsgn_median.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}

function VerticalOscillationSpectrogram() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/stability/vertoscsgn_spectrogram.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}

function VerticalOscillationPowerSpectrum() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/stability/vertoscsgn_pwrpectrum.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}

const Oscillations = () => {
  const [charts, setCharts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'URL_TO_YOUR_GEOJSON_DATA' with the actual URL
        const vertOscillationMedianResponse = await fetch('/stability/vertoscsgn_median.json')
        const vertOscillationMedianData = await vertOscillationMedianResponse.json()

        const vertOscillationSpectrogramResponse = await fetch('/stability/vertoscsgn_spectrogram.json')
        const vertOscillationSpectrogramData = await vertOscillationSpectrogramResponse.json()

        const vertOscillationPowerSpectrumResponse = await fetch('/stability/vertoscsgn_pwrpectrum.json')
        const vertOscillationPowerSpectrumData = await vertOscillationPowerSpectrumResponse.json()

        const vertOscillationDensityResponse = await fetch('/stability/vert_osc_density.json')
        const vertOscillationDensityData = await vertOscillationDensityResponse.json()

        const processedData = processData(geojsonData)
        updateChartsAndStatistics(processedData)
      } catch (error) {
        console.error('Failed to fetch GeoJSON data:', error)
      }
    }

    fetchData()
  }, [])

  const updateChartsAndStatistics = ({ ageSeries, timeSeries, dateSeries }) => {
    // Update statistics with averages

    // Update charts with series data
    setCharts([
      // Assuming these are the chart configurations for age, time, and date
      {
        series: [{ data: ageSeries }],
        options: {
          /* Chart options */
        },
      },
      {
        series: [{ data: timeSeries }],
        options: {
          /* Chart options */
        },
      },
      {
        series: [{ data: dateSeries }],
        options: {
          /* Chart options */
        },
      },
    ])
  }

  return (
    <>
      {statistics.map((stat, index) => (
        <div key={index} bodyClass='pt-4 pb-3 px-4'>
          {/* Chart rendering logic */}
          {charts[index] && (
            <Chart
              options={charts[index].options}
              series={charts[index].series}
              type='line' // or "area", depending on your specific chart type
              height='150' // Adjust height as needed
            />
          )}
        </div>
      ))}
    </>
  )
}

export default Oscillations
