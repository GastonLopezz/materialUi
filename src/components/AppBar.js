import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
  return (
    <Appbar.Header>
        <Appbar.BackAction onPress={()=>console.log("Go back man")} />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" onPress={()=>console.log("Ni idea que es magnify")} />
        <Appbar.Action icon="dots-vertical" onPress={()=>console.log("Puntitos verticalees")} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
    appbar:{
        position: 'absolute',
        left:0,
        right:0,
        bottom:0
    }
});
export default AppBar;