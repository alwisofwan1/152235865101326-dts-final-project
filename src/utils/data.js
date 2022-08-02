import I1 from 'assets/img/i1.png';
import F1 from 'assets/img/f1.png';
import C3 from 'assets/img/c3.png';
import Fi1 from 'assets/img/fi1.png';
import ChickenIcon from 'assets/icons/chicken';
import CurryIcon from 'assets/icons/curry';
import RiceIcon from 'assets/icons/rice';
import FishIcon from 'assets/icons/fish';
import FruitIcon from 'assets/icons/fresh-fruit';
import IceCreamIcon from 'assets/icons/ice-cream';
import SoftDrinkIcon from 'assets/icons/soft-drink';
import HoneyIcon from 'assets/icons/honey';
import BreadIcon from 'assets/icons/bread';

export const heroData = [
  {
    id: 1,
    name: 'Icecream',
    decp: 'Chocolate & vanilla',
    price: '5.25',
    imageSrc: I1,
  },
  {
    id: 2,
    name: 'Strawberries',
    decp: 'Fresh Strawberries',
    price: '10.25',
    imageSrc: F1,
  },
  {
    id: 3,
    name: 'Chicken Kebab',
    decp: 'Mixed Kebab Plate',
    price: '8.25',
    imageSrc: C3,
  },
  {
    id: 4,
    name: 'Fish Kebab',
    decp: 'Mixed Fish Kebab',
    price: '5.25',
    imageSrc: Fi1,
  },
];

export const categories = [
  {
    id: 1,
    name: 'Ayam',
    urlParamName: 'ayam',
    imageSrc: <ChickenIcon width='100px' height='100px' />,
  },
  {
    id: 2,
    name: 'Kari',
    urlParamName: 'kari',
    imageSrc: <CurryIcon width='100px' height='100px' />,
  },
  {
    id: 3,
    name: 'Nasi',
    urlParamName: 'nasi',
    imageSrc: <RiceIcon width='100px' height='100px' />,
  },
  {
    id: 4,
    name: 'Ikan',
    urlParamName: 'ikan',
    imageSrc: <FishIcon width='100px' height='100px' />,
  },
  {
    id: 5,
    name: 'Buah',
    urlParamName: 'buah',
    imageSrc: <FruitIcon width='100px' height='100px' />,
  },
  {
    id: 6,
    name: 'Es krim',
    urlParamName: 'es krim',
    imageSrc: <IceCreamIcon width='100px' height='100px' />,
  },

  {
    id: 7,
    name: 'Minuman ringan',
    urlParamName: 'minuman ringan',
    imageSrc: <SoftDrinkIcon width='100px' height='100px' />,
  },
  {
    id: 8,
    name: 'Organik',
    urlParamName: 'organik',
    imageSrc: <HoneyIcon width='100px' height='100px' />,
  },
  {
    id: 9,
    name: 'Roti',
    urlParamName: 'roti',
    imageSrc: <BreadIcon width='100px' height='100px' />,
  },
];
