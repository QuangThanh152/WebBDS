import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css'
import * as ELG from 'esri-leaflet-geocoder'


let DefauIcon = L.icon ({
  iconUrl : icon,
  shadowUrl : iconShadow,
})
L.Marker.prototype.options.icon = DefauIcon

const GeoCoderMaker = ({address}) => {
    const map = useMap();
    const [position, setPosition] = useState([60, 19])

    useEffect(()=> {
      ELG.geocode().text(address).run((err, results, respone)=> {
        if(results?.results?.length > 0) {
          const {lat, lng} = results?.results[0].latlng
          setPosition([lat, lng])
          map.flyTo([lat, lng], 6)
        }
      })
    }, [address])

  return (
    <div>
      <Marker position={position} icon={DefauIcon}>
        <Popup />
      </Marker>
    </div>
  )
}

export default GeoCoderMaker
