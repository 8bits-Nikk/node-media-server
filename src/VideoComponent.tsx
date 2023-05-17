import React, {useRef, useState} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import Video from 'react-native-video';

const VideoComponent = () => {
  const [pause, setPause] = useState(false);
  const player = useRef<any>();
  return (
    <View style={{flex: 1, backgroundColor: 'black', borderRadius: 10}}>
      <Video
        resizeMode={'cover'}
        // source={{
        //   uri: 'http://127.0.0.1:8888/live/test/index.m3u8',
        // }}
        source={{
          uri: 'https://cdn.flowplayer.com/a30bd6bc-f98b-47bc-abf5-97633d4faea0/hls/de3f6ca7-2db3-4689-8160-0f574a5996ad/playlist.m3u8',
        }}
        // source={video}
        ref={player}
        repeat={true}
        paused={pause}
        onError={error => {
          console.log(error, 'Video');
        }}
        style={styles.backgroundVideo}
      />
      <View style={{backgroundColor: '#fff', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setPause(prv => !prv)}>
          <Text style={{color: 'black', fontSize: 18}}>
            {pause ? '▶️' : '⏸️'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    margin: 6,
  },
});

export default VideoComponent;
