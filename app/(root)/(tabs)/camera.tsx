import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageStyle, ViewStyle, TextStyle } from 'react-native';
import { Camera, CameraType, CameraView, } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import icons from '@/constants/icons';
import CustomButton from '@/components/CustomButton';

type CameraScreenProps = {};

type Photo = {
  uri: string;
};

export default function CameraScreen({ }: CameraScreenProps) {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState<boolean | null>(null);
  const [type, setType] = useState<CameraType>("back");
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera or gallery</Text>;
  }

  return (
    <View style={styles.container}>
      {!photo ? (
        <CameraView facing={type} style={styles.camera} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.galleryButton} onPress={pickImage}>
              <Image
                source={icons.galleryIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
              <View style={styles.innerCircle} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.flipButton}
              onPress={() => {
                setType(
                  type === "back"
                    ? "front"
                    : "back"
                );
              }}>
              <Image
                source={icons.flipIcon}
              />
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photo }} style={styles.previewImage} />
          <View style={styles.retakeContainer}>
            <TouchableOpacity
              onPress={() => setPhoto(null)}>
              <Image
                source={icons.retakeIcon}
              />
            </TouchableOpacity>
            <CustomButton
              title={"Növbəti"}
              onPress={() => { }}
              style={{ maxWidth: 100, marginTop: 12 }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60
  } as ViewStyle,
  camera: {
    flex: 1,
  } as ViewStyle,
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  } as ViewStyle,
  captureButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 70,
    width: 70,
    marginBottom: 20,
  } as ViewStyle,
  innerCircle: {
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: '#000',
  } as ViewStyle,
  galleryButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    borderRadius: 10,
  } as ViewStyle,
  flipButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 15,
    borderRadius: 10,
  } as ViewStyle,
  text: {
    fontSize: 14,
    color: 'black',
  } as TextStyle,
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  previewImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  } as ImageStyle,
  retakeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    width: '100%'
  } as ViewStyle,
});
