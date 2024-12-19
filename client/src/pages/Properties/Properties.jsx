import React from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import "./Properties.css"
import useProperties from '../../hooks/useProperties'
import { PuffLoader } from 'react-spinners';
import PropertyCard from '../../components/PropertyCard/PropertyCard';


const Properties = () => {
  const {data, isError, isLoading} = useProperties();
  console.log(data);

  if(isError) {
    return (
      <div className='wrapper'>
        <span>Lỗi khi lấy dữ liệu từ data</span>
      </div>
    )
  }

  if(isLoading) {
    return (
      <div className='wrapper flexCenter' style={{height:"600vh"}}>
        <PuffLoader
          size={80} // Thay thế cho `radius` và điều chỉnh kích thước loader
          color='#4066ff'
          loading={true}
        />
      </div>
    )
  }
  return (
    <div className='wrapper'>
      <div className='flexColCenter paddings innerWidth properties-container'>
        <SearchBar />

        <div className='paddings flexCenter properties'>
          {
            data.map((card, i) => (<PropertyCard card={card} key={i} />))
          }
        </div>
      </div>
    </div>
  )
}

export default Properties