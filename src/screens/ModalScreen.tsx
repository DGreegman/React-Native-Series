import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ModalScreen</Text>
      <TouchableOpacity style={styles.button} onPress={()=>setModalVisible(!modalVisible)}>
            <Text style={styles.text}>Close Modal</Text>
        </TouchableOpacity> 

        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={()=>setModalVisible(false)}
        >
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
                <View style={{backgroundColor:'white', padding:10, borderRadius:10}}>
                    <Text style={styles.text}>This is a modal</Text>
                    <TouchableOpacity style={styles.button} onPress={()=>setModalVisible(false)}>
                        <Text style={styles.text}>Close Modal</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default ModalScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        fontWeight: 'bold',
        fontSize: 25
    },
    text: {
        padding: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'  
    },
    button:{
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5
    }
})