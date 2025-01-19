import React from 'react'
import closeModal from '../../../assets/icons/close-modal.svg';
import selectDropdown from '../../../assets/icons/select-dropdown.svg';
import blueQR from '../../../assets/icons/blue-QR.svg'
// import { useHistory } from 'react-router-dom';
// import tracker from '../../../utils/tracker';

const CashlessForDashboard = ({ setShowCart, paddingBottom, showMoreClickHandler }) => {

  // const { push } = useHistory()

  const onClickContinue = () => {
  }

  const onClickViewCart = () => {
    // push(deeplink, { from: 'dashboard' })
  } 
  
  return (
    <div>
      <div className={`fixed inset-x-0 bottom-0 px-3 ${paddingBottom} flex items-end justify-center`} style={{ zIndex: '11' }}>
        <div className="bg-inherit transform transition-all sm:px-6 w-full sm:max-w-xl lg:max-w-4xl md:max-w-3xl xl:max-w-4xl" >
          <div className='flex justify-center relative'>
            <div className='w-[95%] bg-white absolute flex justify-center h-4 -mt-1.5 mx-12 border-gray-300 rounded-lg border-x border-t shadow-xl'/>
            <div onClick={showMoreClickHandler} className='px-3 py-0.5 text-xs text-gray-800 font-fig-semibold cursor-pointer bg-white -top-3 border border-gray-200 rounded-xl absolute z-20 mx-12'>+1 more</div>
            <div className="bg-white z-10 p-3 border rounded-lg border-gray-300 shadow-xl">
              <div className='flex justify-between items-center'>
                <div className='sm:flex sm:divide-x-2 sm:items-center'>
                  <p className='text-gray-700 text-sm max-w-44 truncate font-fig-semibold'>Appointment with Dr. Ankit Kumar Singh</p>
                  <div className='flex mt-1'>
                    <div onClick={onClickViewCart} className='cursor-pointer flex items-center'>
                      <p className='text-gray-500 text-xs font-fig-semibold'>13 Dec, 11:00 AM</p>
                      <p className='text-blue-600 text-xs font-fig-extrabold mr-px'>&nbsp;· View details</p>
                      <img style={{ transform: 'rotate(-90deg)' }} className='font-fig-semibold ml-0.5' src={selectDropdown} width={'10px'} height={'10px'} />
                    </div>
                  </div>
                </div>
                <button onClick={onClickContinue} className="text-white flex bg-red-100 items-center leading-4 rounded-md px-2 h-10 win-w-max mx-1.5">
                  <img src={blueQR} className='w-5 h-5'/>
                  <span className='text-xs text-blue-600 font-fig-extrabold pl-1.5'>Scan to pay</span>
                </button>
                <img onClick={() => setShowCart(false)} src={closeModal} className='cursor-pointer' width={'20px'} height={'20px'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CashlessForDashboard;

// {isCashless && !showAll ? <CashlessForDashboard showMoreClickHandler={()=>setShowAll(true)} setShowAll={setShowAll} setShowCart={setShowCart} paddingBottom={paddingBottom}/> : <GlobalCart globalCart={globalCart} setShowCart={setShowCart} paddingBottom={paddingBottom}/>}

