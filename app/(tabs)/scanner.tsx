import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { View, Text, StyleSheet , Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tab() {
  const [facing , setFacing] = useState<CameraType>('front')
  const [permission , requestPermission] =  useCameraPermissions();
  


  if(!permission) {
    // Loading camera permissions
    return <View/>
  }

  if(!permission.granted) {
    // Camera permissions not granted
    return (
        <View style={{flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
            <Text>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission"/>
        </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.scannerContainer}>
             <Text style={styles.scannerHeader}>Scan the barcode</Text>
             <CameraView style={styles.camera} facing={facing}>

             </CameraView>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  scannerContainer: {
    flex: 1,
    marginTop: 65,
  },

  scannerHeader: {
    paddingLeft: 32,
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: .4
  },
  camera: {
    height: "80%",
  }
});
