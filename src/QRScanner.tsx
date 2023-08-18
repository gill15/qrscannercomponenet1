import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRScanner = () => {
  const [flashModeState, setFlashModeState] = useState(0); // 0 for off initially



  // Function to handle QR code scanning
  const handleQRCodeScan = (e: any) => {
    Alert.alert('QR Code Detected', `QR Code detected: ${e.data}`);
  };

  // Function to toggle flash
  const toggleFlash = () => {
    // If flashModeState is 0 (off), set it to 2 (on). Otherwise, set it to 0 (off).
    setFlashModeState(flashModeState === 0 ? 2 : 0);
  };
  
  

  return (
    <View style={{ flex: 1 }}>
      <QRCodeScanner
        onRead={handleQRCodeScan}
        reactivate={true}
        reactivateTimeout={3000}
        flashMode={flashModeState as any} // Use flash state here
        cameraStyle={{ height: '100%' }}
      />
      <View style={styles.flashContainer}>
        <TouchableOpacity onPress={toggleFlash}>
          <Text style={styles.flashText}>Flash: {flashModeState}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flashContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    zIndex: 999 // Ensure it's above the camera component
  },
  flashText: {
    fontSize: 18,
  },
});

export default QRScanner;
