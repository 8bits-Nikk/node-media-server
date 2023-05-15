import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
// import {RNCamera} from 'react-native-camera';

import Video from 'react-native-video';
import {Dimensions} from 'react-native-windows';

function App(): JSX.Element {
  // const [camera, setCamera] = useState('Open');
  const [pause, setPause] = useState(false);
  // function toggleCamera() {
  //   if (camera === 'Open') {
  //     setCamera('Close');
  //   } else {
  //     setCamera('Open');
  //   }
  // }
  const {width, height} = useWindowDimensions();
  const player = useRef<any>();
  const video = require('./source/video1.mp4');

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={{alignItems: 'center', marginVertical: 12}}>
        <TouchableOpacity style={styles.Btn} onPress={() => setPause(prv => !prv)}>
          <Text>
            {pause ? `Play` : `Pause`}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{flex: 1}}>
        {camera === "Close" && <RNCamera style={{flex: 1}} />}
      </View> */}
      <View style={{width: width, height: height * 0.8}}>
        <Video
          resizeMode={'cover'}
          source={{uri: 'https://cdn.flowplayer.com/a30bd6bc-f98b-47bc-abf5-97633d4faea0/hls/de3f6ca7-2db3-4689-8160-0f574a5996ad/playlist.m3u8'}} // Can be a URL or a local file.
          // source={video} // Can be a URL or a local file.
          ref={player} // Store reference
          repeat={true}
          paused={pause}
          onError={error => {
            console.log(error, 'Video');
          }} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  Btn: {
    margin: 3,
    padding: 10,
    backgroundColor: 'rgba(0,0,256, 0.2)',
    borderRadius: 12,
    maxWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    flex: 1,
    backgroundColor: 'red',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});

export default App;
