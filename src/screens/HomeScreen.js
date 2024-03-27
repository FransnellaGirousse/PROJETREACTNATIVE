import { SafeAreaView,TouchableOpacity, ScrollView, Text, TextInput, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  MagnifyingGlassIcon,
  AdjustmentHorizontalIcon,
} from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import react, { Component } from 'react'
import { view } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Categories from '../compnents/Categories';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {

  const navigation = useNavigation();

  const [recipes, setRecipes] = useState([]);
    const [newRecipeName, setNewRecipeName] = useState('')
    
  // Ajout des recettes
  const addRecipe = () => {
    if (newRecipeName.trim() !== '') {
      setRecipes([...recipes, { id: Date.now(), name: newRecipeName }]);
      setNewRecipeName('');
    }
  };
  
  // Suppression des recettes
  const removeRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };
  
  // Inserer liste
  const renderItem = ({ item }) => (
    <View 
    flexDirection= {'row'}
    alignItems= {'center'}
    justifyContent= {'space-between'}
    borderWidth= {1}
    borderColor= {'lightgray'}
    borderRadius= {5}
    padding= {10}
    marginBottom= {10}>
      <Text fontSize= {16}>{item.name}</Text>
      <TouchableOpacity onPress={() => removeRecipe(item.id)}>
        <FontAwesome name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
  
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
          className="space-y-6 pt-14"
        >
          <View className="mx-4 flex-row justify-between itemms-center">

          <FontAwesome name="bars" size={20} color="black" />

          </View>

          {/* Grand titre */}
          <View className="mx-4 space-y-1 md-2">
            <View>
              <Text style={{
                fontSize: hp(3.5),
              }}
                className="font-bold text-neutral-800"
              > Tsara nahandro</Text>
            </View>
            <Text style={{
              fontSize: hp(3.5),
            }}
              className="font-extrabold text-neutral-800"

            > Matsiro <Text className="text-[#f64e32]"                 > Mmm</Text>
            </Text>
          </View>

          {/*Barre de recherche */}
          <View className="mx-4 flex-row items-center border rounded-x1 border-black p-[6px]">
            <View className="bg-white rounded-full p-2">            
              <MagnifyingGlassIcon 
              size={hp(2.5)} 
              color={"gray"} 
              strokeWidth={3} />
            </View>
            <TextInput
              placeholder='Tadiavo ny sakafo tinao'
              placeholderTextColor={"gray"}
              style={{
                fontSize: hp(1.7),
              }}
              className="flex-1 text-base mb-1 pl-1 tracking-widest"
            />
          </View>

          {/* Categories des cuisines */}
          <View>
            <Categories />
          </View>
              {/* Details ajout de recettes  */}
          <View 
              flex={1}
              justifyContent= {'center'}
              alignItems= {'center'}
          >
            
          <FontAwesome name="cutlery" size={100} color="black" />

            <TouchableOpacity 
            style ={{
              backgroundColor : "#f64e32",
              paddingVertical : hp(1.5),
              paddingHorizontal : hp(5),
              marginTop : hp(5),
              borderRadius : hp(1.5),
            }}
              onPress={addRecipe}>
                    <Text 
                    style={{
                      color : "#fff",
                      fontSize : hp(2.2),
                      fontWeight : "medium",
            
                    }}
                    onPress={() => navigation.navigate("Add")}
                > ➕Hanampy➕</Text>
                  </TouchableOpacity>
                  <FlatList
                    data={recipes}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    width= {'80%'}
                  />

          </View>
        </ScrollView>
      </SafeAreaView>

    </View>

  );
}
