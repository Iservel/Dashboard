import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries, Series, SplineAreaSeries, Category, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis, } from '../../data/dummy.js';
import { useStateContext } from '../../contexts/ContextProvider.js';
import { Header } from '../../components';

const Bar = () => {

  const { currentMode } = useStateContext();

  return (

    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-sm'>
       <Header category='Bar' title='Olympic Medal Counts - RIO' />

      <div className='w-full'>
        <ChartComponent
          id='area-chart'
          height='420px'
          primaryXAxis={ barPrimaryXAxis }
          primaryYAxis={ barPrimaryYAxis }
          chartArea={ { border: { width:0 } } }
          tooltip={ { enable: true } }
          background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
        >
          <Inject services={ [ColumnSeries, Category, DataLabel, Legend, Tooltip] } />
          <SeriesCollectionDirective>
            { barCustomSeries.map((item, index) => <SeriesDirective key={ index } { ...item } />) }
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar;