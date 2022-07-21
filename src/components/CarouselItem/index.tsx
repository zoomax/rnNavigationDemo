import React from 'react';
import {Image, View, ImageSourcePropType} from 'react-native';
import {ICarouselItem} from '../../utils/data';

const CarouselItem: React.FC<ICarouselItem> = ({
  image,
  title,
}: ICarouselItem) => {
  return (
    <View>
      <Image
        source={image as ImageSourcePropType}
        style={{height: 150, width: 300, borderRadius: 15}}
      />
      {/* <Text>{image}</Text> */}
    </View>
  );
};

export default CarouselItem;
