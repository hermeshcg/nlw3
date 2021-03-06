import mapMarkerImg from '../images/map-marker.svg';
import LeafLet from 'leaflet';

const happyMapIcon = LeafLet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default happyMapIcon;
