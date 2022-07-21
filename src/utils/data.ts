export interface ICarouselItem {
  image: string;
  title: string;
}

export const carouselData: ICarouselItem[] = [
  {
    image: require('../assets/images/homescreen/game-1.jpeg'),
    title: 'Game 1',
  },
  {
    image: require('../assets/images/homescreen/game-2.jpeg'),
    title: 'Game 2',
  },
  {
    image: require('../assets/images/homescreen/game-3.png'),
    title: 'Game 3',
  },
];

