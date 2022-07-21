import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Image from '../../assets/images/misc/gaming.svg';
import {useNavigation} from '@react-navigation/native';
// styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    height: '100%',
  },
  wrapper: {},
  imageWrapper: {},
});

// component
const Home: React.FC<any> = props => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{...styles.wrapper}}>
        <Text
          style={{
            color: '#20315F',
            fontSize: 30,
            fontFamily: 'Roboto-Bold',
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 20,
          }}>
          GAMEON
        </Text>
      </View>
      <View
        style={{
          ...styles.wrapper,
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <Image
          width={300}
          height={300}
          style={{
            transform: [{rotate: '-15deg'}],
          }}
        />
      </View>
      <View style={{...styles.wrapper}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Main')}
          style={{
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#ad40af',
            borderRadius: 7,
            marginBottom: 50,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Italic',
              fontStyle: 'italic',
              fontWeight: '700',
            }}>
            Let's Begin
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
