import React, { useContext, useState } from 'react'
import {Button, Modal} from '@mantine/core'
import {DatePicker} from '@mantine/dates'
import { useMutation } from 'react-query'
import UserDetailsContext from '../../Context/UserDetailsContext'
import { bookVisit } from '../../utils/api'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'

const BookingModal = ({opened, setOpened, email, propertyId}) => {

    const [value, setValue] = useState(null)
    const {
      userDetails: {token}, 
      setUserDetails
    } = useContext(UserDetailsContext);
    
    const handleBookingSuccess = () => {
        toast.success("Bạn đã đặt phòng", {position: "bottom-right"
        });

        setUserDetails((prev)=>({
          ...prev,
          bookings: [
            ...prev.bookings,
            {
              id: propertyId, date: dayjs(value).format('DD/MM/YYYY'),
            }
          ]
        }))
    };


    const {mutate, isLoading} = useMutation( {
        mutationFn: ()=> bookVisit(value, propertyId, email, token),
        onSuccess: ()=> handleBookingSuccess(),
        onError: ({respone}) => toast.error(respone.data.message),
        onSettled: ()=> setOpened(false)
    })

  return (
    <Modal
    opened={opened}
    onClose={()=> setOpened(false)}
    title="Chọn ngày bạn muốn đặt"
    centered
    >
      <div className='flexColCenter' style={{gap: "1rem"}}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={()=>mutate()}>
            Đặt
        </Button>
      </div>
    </Modal>
  )
}

export default BookingModal
