import React, {useState} from 'react';
import { View, Text, StyleSheet, Linking, Alert, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import {Video} from 'expo-av';
import AppBar from '../AppBar';

const Screen1 = () => {
    const [state, setState] = useState('');
    const [video, setVideo] = useState(false);

    const search = async () =>{
        const valido = await Linking.canOpenURL(state);
        if(valido){
            await Linking.openURL(state);
        } else {
            Alert.alert(`No se puede abrir el link ${state}`);
        }
    }
  return (
    <View>
        <AppBar/>
        <TouchableOpacity onPress={()=>search()}>
            <Text style={{color:'blue',textDecorationLine: 'underline'}}>{state}</Text>
        </TouchableOpacity>
        <TextInput
            label="Link"
            value={state}
            onChangeText={text => setState(text)}
            mode='flat'
        />
        <Button onPress={()=>setVideo()}>Display</Button>
        {video ? 
        <Video source={{uri: state}} style={styles.backgroundVideo}/>:
        null}        
    </View>
    );
}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width:300,
      height:300
    },
  });

export {Screen1};