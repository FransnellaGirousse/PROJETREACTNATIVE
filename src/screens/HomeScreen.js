import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  MagnifyingGlassIcon,
  AdjustmentHorizontalIcon,
} from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import react, { Component } from 'react'
import { view } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle ={{
            paddingBottom : 50,
          }}
          className = "space-y-6 pt-14"
          >
            <View className="mx-4 flex-row justify-between itemms-center">

           {/*} <AdjustmentHorizontalIcon size={hp(4)} color={"gray"} />
                     <Text> <i class="fa fa-bars" aria-hidden="true"></i></Text>
           */}
            </View>

            {/* Grand titre */}
            <View className="mx-4 space-y-1 md-2">
              <View>
                <Text style= {{
                  fontSize: hp(3.5),
                }}
               className= "font-bold text-neutral-800" 
                > Tsara nahandro</Text>
              </View>
              <Text style= {{
                  fontSize: hp(3.5),
                }}
                className= "font-extrabold text-neutral-800" 

                > Matsiro <Text                className= "text-[#f64e32]"                 > Mmm</Text>
</Text>         


            </View>

            {/*Barre de recherche */}
            <View className="mx-4 flex-row items-center border rounded-x1 border-black p-[6px]">
              <MagnifyingGlassIcon size={hp(2.5)} color={"gray"} strokeWidth={3}/>
              <View>
              </View>
              <TextInput
              placeholder='Tadiavo ny sakafo tinao'
              placeholderTextColor={"gray"}
              style={{
                fontSize : hp(1.7),
              }}
              className="flex-1 text-base mb-1 pl-1 tracking-widest"
              />
            </View>
          </ScrollView>
      </SafeAreaView>
      
    </View>
    
  );
}
