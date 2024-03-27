import { Text, TouchableOpacity, View, Image, StyleSheet, TextInput, FlatList   } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { 
widthPercentageToDP as wp,
heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons'; 


/*
import LottieView from 'lottie-react-native';
import Animated from 'react-native-reanimated';*/


export default function WelcomeScreen() {
 //const Animation = useRef(null);
 const navigation = useNavigation();

  return (
    <View className="bg-[#f64e32] flex-1 justify-center items-center space-y-10 relative">
      <View>
      
      <Image source={require("../../assets/images/bg.jpg")} style = 
      {{
        width : 100,
        height : 100,
        borderRadius : 20,
        position : "absolute",
        transform : [
          {translateX : -50},
          {translateY : -150},
          {rotate : "-15deg"}
        ]
      }}/>
      <Image 
      source={require("../../assets/images/bg1.png")}

      style = 
      {{
        width : 100,
        height : 100,
        borderRadius : 20,
        position : "absolute",
        transform : [
          {translateX : -150},
          {translateY : 250},
          {rotate : "-15deg"}
        ]
      }}
      />

<Image 
      source={require("../../assets/images/bg2.png")}

      style = 
      {{
        width : 100,
        height : 100,
        borderRadius : 20,
        position : "absolute",
        transform : [
          {translateX : 70},
          {translateY : 250},
          {rotate : "15deg"}
        ]
      }}

      />

    </View>

    <View className="flex items-center space-y-2">
      <Text className="text-white font-extrabold tracking-widest" style ={{
        fontSize : 30,
      }}> My cook</Text>
      <Text className="text-white font-extrabold font-medium"  > Andramo ny tsiron'ny nahandro MALAGASY</Text>
    </View>

    <View>
      <TouchableOpacity
      style ={{
        backgroundColor : "#fff",
        paddingVertical : hp(1.5),
        paddingHorizontal : hp(5),
        borderRadius : hp(1.5),
      }}
      onPress={() => navigation.navigate("Home")}
      >
        <Text style={{
          color : "#f64e32",
          fontSize : hp(2.2),
          fontWeight : "medium",

        }}>
          Hanomboka
        </Text>
      </TouchableOpacity>
    </View>

    </View>
    
      
  );
}
