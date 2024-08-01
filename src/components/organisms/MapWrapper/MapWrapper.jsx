import { useContext } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import * as S from "./MapWrapper.styles";
import Map from "@/components/molecules/Map/Map";
import Marker from "@/components/atoms/Marker/Marker";
import { MapWrapperContext } from "@/context/MapWrapperContext";
import Polyline from "@/components/atoms/Polyline/Polyline";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function MapWrapper({ polylines }) {
  const { center, markers } = useContext(MapWrapperContext);

  return (
    <S.MapWrapper>
      <Wrapper apiKey={API_KEY} id="wrapper">
        <Map center={center}>
          {markers.map((marker, idx) => {
            return (
              <Marker key={idx} position={marker.location} title={String(marker.id)} />
            );
          })}
          {polylines.length > 0 ? (
            <Polyline path={polylines} strokeColor="#FF3068" />
          ) : (
            <></>
          )}
        </Map>
      </Wrapper>
    </S.MapWrapper>
  );
}
