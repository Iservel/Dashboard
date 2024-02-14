import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Sort, Edit, Toolbar, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy.js';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='mt-20 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl shadow-sm'>
      
    < Header category='Page' title='Customers' />
    
    <GridComponent 
      dataSource={ customersData } 
      allowSorting={ true } 
      allowPaging={ true }
      toolbar={ ['Delete'] }
      editSettings={ { allowDeleting: true, allowEditing: true } }
      width='auto'
      >

      <ColumnsDirective>
        { customersGrid.map((item, index) => (
          <ColumnDirective key={ index } { ...item } />
        )) }
      </ColumnsDirective>

      <Inject services={ [Page, Toolbar, Sort, Selection, Edit, Filter ] }/>    

    </GridComponent>
  </div> 
  )
}

export default Customers;
