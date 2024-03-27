import { Image, SafeAreaView,TouchableOpacity, StyleSheet, Text, View, Pressable, Dimensions, ScrollView,TextInput, FlatList } from "react-native";
import React, { useState }  from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';




export default function RecipeDetailsScreen () {

	const navigation = useNavigation();

	const [recipes, setRecipes] = useState([]);
	  const [newRecipeName, setNewRecipeName] = useState('');
	  
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
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
					<FontAwesome name="bars" size={20} color="black" />
				</Pressable>

				<FontAwesome name={"heart-o"} size={28} color="white" />
			</SafeAreaView>

			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					marginTop: 140,
					borderTopLeftRadius: 56,
					borderTopRightRadius: 56,
					alignItems: "center",
					paddingHorizontal: 16,
				}}
			>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Recipe Description */}
						<TextInput
            borderWidth= {1}
            borderColor= {'gray'}
            borderRadius= {5}
            padding= {10}
            marginBottom= {10}
            width= {'80%'}
            value={newRecipeName}
            onChangeText={text => setNewRecipeName(text)}
            placeholder="Nom de la recette"
          />
		  <TextInput
            borderWidth= {1}
            borderColor= {'gray'}
            borderRadius= {5}
            padding= {30}
            marginBottom= {10}
            width= {'80%'}
            value={newRecipeName}
            onChangeText={text => setNewRecipeName(text)}
            placeholder="Ingredient"
          />

		<TextInput
            borderWidth= {1}
            borderColor= {'gray'}
            borderRadius= {5}
            padding= {10}
            marginBottom= {10}
            width= {'80%'}
            value={newRecipeName}
            onChangeText={text => setNewRecipeName(text)}
            placeholder="Description"
          />

						{/* Recipe Extra Details */}

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								
							}}
						>
							<View
								style={{
									backgroundColor: "rgba(255, 0, 0, 0.38)",
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 30 }}>⏰</Text>
								<Text style={{ fontSize: 10, fontWeight: 400 }}>
									temps de preparation
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(135, 206, 235, 0.8)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
									// marginHorizontal: 24,
								}}
							>
								<Text style={{ fontSize: 30 }}>🔥</Text>
								<Text style={{ fontSize: 10, fontWeight: 400 }}>
								Temps de cuison
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(255, 165, 0, 0.48)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 30 }}>🥣</Text>
								<Text style={{ fontSize: 10, fontWeight: 400 }}>
									Temps de repos
								</Text>
							</View>
							
						</View>

						<TextInput
            borderWidth= {1}
            borderColor= {'gray'}
            borderRadius= {5}
            padding= {30}
            marginBottom= {10}
			marginTop= {10}
            width= {'80%'}
            value={newRecipeName}
            onChangeText={text => setNewRecipeName(text)}
            placeholder="Fanamarihina"
          />

<TouchableOpacity 
            style ={{
              backgroundColor : "#f64e32",
              paddingVertical : hp(1.5),
              paddingHorizontal : hp(5),
              borderRadius : hp(1.5),
            }}
              onPress={addRecipe}>
                    <Text 
                    style={{
                      color : "#fff",
                      fontSize : hp(2.2),
                      fontWeight : "medium",
            
                    }}
                > ✔️Halefa✔️</Text>
                  </TouchableOpacity>
                  <FlatList
                    data={recipes}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    width= {'80%'}
                  />
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

