import React from 'react'
import ReactDOM from 'react-dom';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { LineChart, PieChart, SparkLine, Stacked, Button } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy.js';
import { useStateContext } from '../contexts/ContextProvider.js';

const Ecommerce = () => {

  const { currentColor } = useStateContext();

  return (
    <div className='mb-12 mt-5'>

      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center shadow-sm hover:drop-shadow-xl'>
          
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-slate-400 font-bold dark:text-gray-400'>Earnings</p>
              <p className='text-slate-600 font-bold text-2xl dark:text-gray-200'>$63,448.78</p>
            </div>
          </div>

          <div className='mt-6'>
            <Button color='white' bgColor={ currentColor } text='Download' borderRadius='10px' size='md'/>
          </div>

        </div>

        
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          { earningData.map((item) => (
              <div key={ item.title } className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl shadow-sm hover:drop-shadow-xl'>
                <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }} className='text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl'>
                  { item.icon }
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold text-slate-600 dark:text-gray-200'>
                    { item.amount }
                  </span>

                  <span className={ `text-sm text-${ item.pcColor } ml-2 dark:text-gray-200` }>
                    { item.percentage }
                  </span>
                </p>
                <p className='text-gray-400 mt-1 text-sm dark:text-gray-400'>{ item.title }</p>
              </div>
          )) }
        </div>


      </div>

      <div className='flex gap-10 flex-wrap justify-center'>  

        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-xl md:w-780 shadow-sm hover:drop-shadow-xl'>
          <div className='flex justify-between m-5'>
            <p className='font-semibold text-xl'>Revenue Updates</p>

            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Expense</span>
              </p>

              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>

            </div>

          </div>

          <div className='mt-10 gap-10 flex flex-wrap justify-center'>

            <div className='border-r-1 border-color m-4 pr-10'>

              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 m-3 hover:drop-shadow-lg cursor-pointer rounded-full text-white bg-green-400 text-xs'>23%</span>
                </p>

                <p className='mt-1 text-gray-500'>Budget</p>
              </div>

              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$48,438</span>
                </p>

                <p className='mt-1 text-gray-500'>Expense</p>
              </div>

              <div className='mt-5'>
                <SparkLine currentColor={ currentColor } id='line-sparkline' type='Line' height='80px' width='250px' data={ SparklineAreaData } color={ currentColor } />
              </div> 

              <div className='mt-10'>
                <Button color='white' bgColor={ currentColor } text='Download Report' borderRadius='10px' />
              </div>
            
            </div>

            <div>
              <Stacked width='320px' height='360px'/>
            </div>
            
          </div>

        </div>

      </div>


    </div>
  )
}

export default Ecommerce;