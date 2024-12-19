import React, { useContext, useState } from 'react'
import "./Property.css"
import { useMutation, useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty, removeBooking } from '../../utils/api'
import { PuffLoader } from 'react-spinners'
import Map from '../../components/Map/Map'

import { AiFillHeart } from 'react-icons/ai';
import { FaShower } from 'react-icons/fa';
import { FaParking } from 'react-icons/fa';
import { MdBedroomBaby, MdLocationOn } from "react-icons/md";
import useAuthCheck from '../../hooks/useAuthCheck'
import { useAuth0 } from '@auth0/auth0-react'
import BookingModal from '../../components/BookingModal/BookingModal'
import UserDetailsContext from '../../Context/UserDetailsContext'
import { Button } from '@mantine/core'
import { toast } from 'react-toastify'
import Heart from '../../components/Heart/Heart'

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  // console.log(id)
  const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id));

  const [modalOpened, setModalOpened] = useState(false)
  const { validateLogin } = useAuthCheck()

  const { user } = useAuth0();

  const {
    userDetails: { token, bookings },
    setUserDetails
  } = useContext(UserDetailsContext);

  const {mutate: cancelBooking, isLoading: cancelling} = useMutation({
    mutationFn:()=> removeBooking(id, user?.email, token),
    onSuccess:()=> {
      setUserDetails((prev)=> ({
        ...prev,
        bookings: prev.bookings.filter((booking)=> booking?.id !== id)
      }))
      toast.success("Đã hủy đặt lịch", {position: "bottom-right"})
    }
  })

  if (isLoading) {
    return (
      <div className='wrapper'>
        <div className='flexCenter paddings'>
          <PuffLoader size={60} color="#4066ff" loading={isLoading} />

        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='wrapper'>
        <div className='flexCenter paddings'>
          <span>Đã xảy ra lỗi: {isError.message || "Không thể kết nối với server"}</span>
        </div>
      </div>
    )
  }

  return (
    <div className='wrapper'>
      <div className='flexColStart paddings innerWidth properties-container'>

        {/* Like button */}
        <div className='like'>
          {/* <AiFillHeart size={24} color="white" /> */}
          <Heart id={id} />
        </div>

        {/* image */}
        <img src={data?.image} alt='home image' />

        {/*  */}
        <div className='flexCenter property-details'>

          {/* left */}
          <div className='flexColStart left'>
            {/* head */}
            <div className='flexStart head'>
              <span className='primaryText'>{data?.title}</span> {" "}
              <span className='orangeText' style={{ fontSize: '1.5rem' }}>$ {data?.price}</span>
            </div>

            {/* facilities */}
            <div className='flexStart facilities'>

              <div className='flexStart facility'>
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Phòng tắm</span>
              </div>
              <div className='flexStart facility'>
                <FaParking size={20} color="#1F3E72" />
                <span>{data?.facilities?.parkings} bãi đậu xe</span>
              </div>
              <div className='flexStart facility'>
                <MdBedroomBaby size={20} color="#1F3E72" />
                <span>{data?.facilities?.bedrooms} Phòng ngủ</span>
              </div>
            </div>

            {/* description */}
            <span className='secondaryText' style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* address */}
            <div className='flexStart' style={{ gap: "1rem" }}>
              <MdLocationOn size={25} />
              <span className='secondaryText'>
                {data?.address}{", "}
                {data?.city}{", "}
                {data?.country}
              </span>
            </div>

            {/* nút đặt phòng */}
            {
              bookings?.map((booking) => booking.id).includes(id) ? (
                <>
                  <Button 
                    variant='outline' 
                    w={"100%"} 
                    color='red' 
                    onClick={()=> cancelBooking()} 
                    disabled={cancelling}
                  >
                    <span>Hủy đặt phòng</span>
                  </Button>
                  <span>Bạn đã đặt lịch ngày {bookings?.filter((booking)=> booking?.id === id)[0].date}</span>
                </>
              ) : (
                <button
                  className="button"
                  onClick={() => {
                    validateLogin() && setModalOpened(true);
                  }}
                >
                  Đặt phòng
                </button>
              )
            }

            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={user?.email}
            />

          </div>

          {/* right */}
          <div className='map'>
            {/* Map */}
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Property