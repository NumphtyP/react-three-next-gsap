import React from 'react'
import data from './data.json' // Import your data
import { CirclePacking } from './CirclePacking' // Assuming this is correctly implemented as per your code
import { useDimensions } from './useDimensions' // Your custom hook for dimensions

const prepareData = (attribute) => {
  return data.map((athlete) => ({
    ...athlete,
    value: athlete[attribute],
    group: athlete.Medal > 0 ? 'Medalist' : 'Non-Medalist',
  }))
}
export const CircularPackingHundred = () => {
  const containerRef = React.useRef(null)
  const { width } = useDimensions(containerRef)

  // Prepare data for each attribute
  const ageData = prepareData('Age')
  const heightData = prepareData('Height')
  const weightData = prepareData('Weight')
  if (width === 0) {
    return null
  }
  return (
    <div
      ref={containerRef}
      style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}
    >
      <CirclePacking width={width / 3} height={400} data={ageData} />
      <CirclePacking width={width / 3} height={400} data={heightData} />
      <CirclePacking width={width / 3} height={400} data={weightData} />
    </div>
  )
}
