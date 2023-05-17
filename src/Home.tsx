import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Car,
  Compass,
  ControleCenter,
  Controller,
  Maps,
  NumPlate,
  VideoPlayback,
} from './assets';
import VideoComponent from './VideoComponent';
import {useWindowDimensions} from 'react-native-windows';
import Card from './Card';

const ActionData = [
  {id: 101, title: 'Dashboard', icon: Compass},
  {id: 102, title: 'ANPR Search', icon: Controller},
  {id: 103, title: 'Video Playback', icon: VideoPlayback},
  {id: 104, title: 'Control Center', icon: ControleCenter},
  {id: 105, title: 'Map View', icon: Maps},
];

type TActions = {
  id: number;
  title: string;
  icon: any;
};

type ActionProps = {
  data: TActions;
  onPress: () => void;
  selected: number;
};

const Actions = ({data, onPress, selected}: ActionProps) => {
  const {width} = useWindowDimensions();
  const scale = width / 1366;

  return (
    <TouchableOpacity
      key={`${data.id}`}
      style={[
        styles.listContainer,
        {backgroundColor: selected === data.id ? '#392460' : '#00000000'},
      ]}
      onPress={onPress}>
      <Image
        source={data.icon}
        style={{height: 24 * scale, width: 24 * scale}}
      />
      <Text
        style={{color: '#fff', marginStart: 16 * scale, fontSize: 19 * scale}}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const [selectedAction, setSelectedAction] = useState(101);
  const {width} = useWindowDimensions();
  const scale = width / 1366;

  return (
    <View style={styles.body}>
      <View style={styles.column1}></View>
      <View style={styles.column2}>
        <Text style={styles.subHeading}>Actions</Text>
        <View style={styles.divider} />
        <FlatList
          data={ActionData}
          renderItem={({item, index}) => (
            <Actions
              data={item}
              onPress={() => setSelectedAction(item.id)}
              selected={selectedAction}
            />
          )}
          extraData={selectedAction}
        />
      </View>
      <View style={styles.column3}>
        <View
          style={{
            marginVertical: 16,
            backgroundColor: '#60547c',
            marginHorizontal: 8,
            borderRadius: 16,
            flexDirection: 'row',
            flex: 0.1,
            padding: 16,
            alignItems: 'center',
          }}>
          <View style={{flex: 1, gap: 4 * scale}}>
            <Text
              style={{color: '#fff', marginStart: 16, fontSize: 17 * scale}}>
              Plate: {`AAA 1234`}
            </Text>
            <Text
              style={{color: '#fff', marginStart: 16, fontSize: 17 * scale}}>
              Make: {`Toyato Camry`}
            </Text>
            <Text
              style={{color: '#fff', marginStart: 16, fontSize: 17 * scale}}>
              Color: {`Silver`}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={Car}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={NumPlate}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={{flex: 0.6}}>
          <Text style={[styles.subHeading, {fontSize: 24 * scale}]}>
            Video Stream
          </Text>
          <VideoComponent />
        </View>
        <View style={{flex: 0.15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 16,
              marginVertical: 14,
            }}>
            <Text style={{fontSize: 18 * scale, color: '#aaa'}}>
              Recent Activity
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{fontSize: 18 * scale, color: '#aaa'}}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', flex: 1, gap: 12}}>
            <Card />
            <Card />
            <Card />
          </View>
        </View>
      </View>
      <View style={styles.column4}>
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  column1: {
    flex: 0.05,
    backgroundColor: '#937cb9',
  },
  column2: {
    flex: 0.2,
    backgroundColor: '#674d89',
  },
  column3: {
    flex: 0.5,
    backgroundColor: '#1c0a43',
  },
  column4: {
    flex: 0.25,
    backgroundColor: '#433169',
  },
  subHeading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    marginHorizontal: 32,
    marginVertical: 16,
  },
  divider: {
    backgroundColor: '#ddd',
    width: '100%',
    height: 1,
    borderRadius: 3,
  },
  listContainer: {
    margin: 8,
    borderRadius: 12,
    padding: 12,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Home;
