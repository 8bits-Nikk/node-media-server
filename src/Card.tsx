import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useWindowDimensions} from 'react-native-windows';

const Card = () => {
  const {width} = useWindowDimensions();
  const scale = width / 1366;
  function getRandomColorCode() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert RGB values to a hexadecimal string
    const colorCode = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

    return colorCode;
  }
  const color = getRandomColorCode();
  return (
    <View style={{flex: 1, flexDirection: 'row', gap: 8, alignItems: 'center'}}>
      <View
        style={{backgroundColor: color, height: 50 * scale, width: 50 * scale}}
      />
      <View style={{flex: 1}}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          aliquip
        </Text>
        <View style={{flexDirection: 'row', gap: 6* scale}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 12,
              alignItems: 'center',
              maxWidth: 80,
              padding: 3 * scale
            }}>
            <Text style={{fontSize: 16* scale, color: '#fff'}}>{`Accepted`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightpink',
              borderRadius: 12,
              alignItems: 'center',
              maxWidth: 80,
              padding: 3 * scale
            }}>
            <Text style={{fontSize: 16* scale, color: '#333'}}>{`Rejected`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
