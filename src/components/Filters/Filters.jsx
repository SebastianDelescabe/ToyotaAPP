import React, { useContext, useState } from 'react';
import { filterCars } from '../../helpers/index';
import { colapseArrow, dropDowArrow } from '../../assets';
import { CarsContext } from '../../helpers/CarsContext';
import './Filters.css'

const Filters = () => {

  const [filterMenu, setFilterMenu] = useState(false)

  const { cars, setCars } = useContext(CarsContext)

  const handleOnClick = async (e) => {
    const filter = e.currentTarget.innerText;
    const filterData = await filterCars(filter, cars)
    setCars(filterData)
    setFilterMenu(false)
  }

  return (
    <>
      <div className='filters'>
        <span>Filtrar por</span>
        <div className='filters__options'>
          <span className='filters__options-all' onClick={(e) => handleOnClick(e)}>Todos</span>
          <span className='filters__options-cars' onClick={(e) => handleOnClick(e)}>Autos</span>
          <span className='filters__options-pickups' onClick={(e) => handleOnClick(e)}>Pickups y Comerciales</span>
          <span className='filters__options-svus' onClick={(e) => handleOnClick(e)}>SVUs y Crossovers</span>
        </div>
      </div>
      <div className='filters__responsive'>
        <span onClick={() => setFilterMenu(!filterMenu)}>Filtrar por</span>
        {
          !filterMenu ?
            < img onClick={() => setFilterMenu(true)} src={dropDowArrow} alt="" />
            :
            < img onClick={() => setFilterMenu(false)} src={colapseArrow} alt="" />
        }
        {
          filterMenu && (
            <div>
              <div className='filters__responsive-container'>
                <span onClick={(e) => handleOnClick(e)}>Todos</span>
                <span onClick={(e) => handleOnClick(e)}>Autos</span>
                <span onClick={(e) => handleOnClick(e)}>Pickups y Comerciales</span>
                <span onClick={(e) => handleOnClick(e)}>SVUs y Crossovers</span>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Filters