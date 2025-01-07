import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../context/ThemeContext';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        },
      ]}>
      <Text style={styles.header}>ModalScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.text}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              width: '100%',
            }}>
            <Text style={styles.text}>This is a modal</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.text}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
