import React, {ReactNode, useRef} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel-v4';
import CarouselItem from '../../components/CarouselItem';
import {carouselData, ICarouselItem} from '../../utils/data';
import dimensions from '../../utils/dimensions';

const render: (value: {
  item: ICarouselItem;
  index: any;
  dataIndex: number;
}) => ReactNode = ({item, index}) => {
  console.log(index);
  return <CarouselItem image={item.image} title={item.title} />;
};

const Main: React.FC<{}> = props => {
  const ref = useRef(null);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 15,
      }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              textTransform: 'capitalize',
              color: '#333',
            }}>
            header content
          </Text>
          <ImageBackground
            source={require('../../assets/images/user-profile.jpg')}
            style={{
              width: 50,
              height: 50,
            }}
            imageStyle={{
              borderRadius: 25,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            borderColor: '#c6c6c6',
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name={'search'} color={'#c6c6c6'} size={30} />
          </View>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#c6c6c6'}
            style={{
              fontSize: 16,
              fontWeight: '500',
              flex: 7,
              // borderColor: '#000',
              // borderWidth: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              textTransform: 'capitalize',
              color: '#333',
            }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => console.log('clicked')}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                textTransform: 'capitalize',
                color: '#0aada8',
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Carousel
            data={carouselData}
            renderItem={render}
            sliderWidth={dimensions.width - 40}
            itemWidth={300}
            ref={ref}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
