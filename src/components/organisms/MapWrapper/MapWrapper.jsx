import { Wrapper } from "@googlemaps/react-wrapper";
import * as S from "./MapWrapper.styles";
import Map from "@/components/molecules/Map/Map";
import Marker from "@/components/atoms/Marker/Marker";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const center = { lat: -14.841632526038042, lng: -40.87715636108691 };

export default function MapWrapper() {
  return (
    <S.MapWrapper>
      <Wrapper apiKey={API_KEY} id="wrapper">
        <Map center={center}>
          <Marker position={center} title={"IFBA"} />
        </Map>
      </Wrapper>
    </S.MapWrapper>
  );
}
