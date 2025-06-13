import seriesData from '../api/seriesData.json'
import { SeriesCard } from './SeriesCard';

//!here we will use react looping concept and props(Using looping and props)
export const NetflixSeries = () => {
  return (
    <ul className='grid grid-three--cols'>
        {seriesData.map((currentData) => {
            return <SeriesCard key={currentData.id} currentData={currentData} />
        })}
    </ul>
  );
};
