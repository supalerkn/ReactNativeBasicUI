import { View, Text, Image } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{ height: "100%", alignItems: "center", backgroundColor: "#131414" }} >
      <View style={{ flex: 0.95, justifyContent: "center" }} >
        <Image source={require('../img/logo.png')} style={{ width: 150, height: 150 }} />
      </View>
      <View style={{ flex: 0.05 }} >
        <Text style={{ color: "white" }} >Dodeep.co</Text>
      </View>
    </View>
  )
}

export default Splash