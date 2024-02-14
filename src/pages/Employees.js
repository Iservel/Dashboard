import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search,  Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid, employeesData, employeesGrid } from '../data/dummy.js';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='mt-20 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl shadow-sm'>
      
      < Header category='Page' title='Employees' />
      
      <GridComponent 
        dataSource={ employeesData } 
        allowSorting={ true } 
        allowPaging={ true }
        toolbar={ ['Search'] }
        width='auto'
        >

        <ColumnsDirective>
          { employeesGrid.map((item, index) => (
            <ColumnDirective key={ index } { ...item } />
          )) }
        </ColumnsDirective>

        <Inject services={ [Resize, Filter, Sort, ContextMenu, Page, ExcelExport, PdfExport, Edit, Page, Search, Toolbar] }/>    

      </GridComponent>
    </div> 
  )
}

export default Employees;