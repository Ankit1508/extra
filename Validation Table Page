import React from 'react'
import { Tooltip } from 'antd';
import { editPen, pencil_gray_no_bg } from 'assets/icons'
import { BENEFIT_MODE } from 'constants/contractConstants';
import { Button } from 'components/tailwind';
import { Flex } from 'rebass';

const ValidateReportListSchema = () => {
  let editable = true
  
  return (
    <tr className='text-gray-600 text-xs'>
      <td className={`pl-14 ${editable ? 'py-5 cursor-pointer font-semibold text-blue-500 hover:text-blue-600' : 'py-5'}`} onClick={() => editable && window.open('www.google.com', "_blank")}>{'APTL530RNOUC'}</td>
      <td className='py-5 pl-14 font-medium'>
        <p>ID: HAG37BIR2YX</p>
        <p>Type: Body</p>
      </td>
      <td className='pl-4 py-5 font-medium'>Lilavati hospital & research centre</td>
      <td className='pl-10 py-5 font-medium'>21 SEP 2022  |  08:00 AM</td>
      <td onClick={editable ? (e)=>console.log(e) : null} className={`${editable ? 'cursor-pointer' : 'cursor-not-allowed'} py-5 flex gap-3`}>
        <Button disabled={''} onClick={() => {}} className="h-11 bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 rounded-lg">
          Validate  
        </Button>
        <Button disabled={''} onClick={() => {}} className="h-11 bg-white hover:bg-blue-500 hover:text-white text-blue-500 font-bold px-6 border border-gray-300 rounded-lg">
          View 
        </Button>
      </td>
    </tr>
//this is comment for table
    /* 
    const ReportValidationTable = () => {
    return(
      <>
        <SearchBar 
          handler={(e)=>{console.log(e)}}
          placeholder='Search by using appointment ID' 
          classes='mt-6'
        />
        <Tabbar list={[`Verification required (23)`, `Partially received`, `Reports received after last validation`]} ids={[1, 2, 3]} newPageId={state.curTab} changeHandler={onTabChange} classes='mt-6' />
        <Table 
          loading={''}
          headers={VALIDATE_REPORTS_LIST_PAGE_HEADERS}
          data={[1,2,3,4,5]}
          tableschema={ValidateReportListSchema}
          classes='rounded-lg mt-6'
          tableClasses='alternate_gray200_color'
          thClasses='pl-14 py-5'
          editCompany={(id, name) => window.open('www.google.com')}
          statusChange={''}
        />
        { 1 > 0 && //loding condition
          <Pagination 
            totalresults={'10'}
            curpage={'2'}
            handler={()=>{}}
          />
        }
      </>
    )
  }
    */
  )
}

export default ValidateReportListSchema
