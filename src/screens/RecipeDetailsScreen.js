import React, { useState } from "react";
import { Pressable, SafeAreaView, TouchableOpacity, ScrollView, Text, TextInput, View, FlatList } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function RecipeDetailsScreen() {
  const navigation = useNavigation();

  const [recipes, setRecipes] = useState([]);
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeIngredients, setNewRecipeIngredients] = useState('');
  const [newRecipeDescription, setNewRecipeDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [restTime, setRestTime] = useState('');
  const [comment, setComment] = useState('');

  // Ajout des recettes
  const addRecipe = () => {
    if (
      newRecipeName.trim() !== '' &&
      newRecipeIngredients.trim() !== '' &&
      newRecipeDescription.trim() !== '' &&
      prepTime.trim() !== '' &&
      cookTime.trim() !== '' &&
      restTime.trim() !== '' &&
      comment.trim() !== ''
    ) {
      setRecipes([...recipes, {
        id: Date.now(),
        name: newRecipeName,
        ingredients: newRecipeIngredients,
        description: newRecipeDescription,
        prepTime: prepTime,
        cookTime: cookTime,
        restTime: restTime,
        comment: comment
      }]);
      // Clear form inputs
      setNewRecipeName('');
      setNewRecipeIngredients('');
      setNewRecipeDescription('');
      setPrepTime('');
      setCookTime('');
      setRestTime('');
      setComment('');
    }
  };

  // Suppression des recettes
  const removeRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  // Render des éléments de la FlatList
  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("RecipeDetails", item)}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'lightgray',
          borderRadius: 5,
          padding: 10,
          marginBottom: 10
        }}>
        <Text>{item.name}</Text>
        <FontAwesome name="chevron-right" size={24} color="black" />
      </View>
    </Pressable>
  );

  return (
    <View className="mx-4 flex-row items-center border rounded-x1 border-black p-[6px]">
      <View style={{ paddingHorizontal: 16 }}>
        {/* Autres champs pour la recette */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
          }}
          value={newRecipeName}
          onChangeText={text => setNewRecipeName(text)}
          placeholder="Nom de la recette"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
          }}
          value={newRecipeIngredients}
          onChangeText={text => setNewRecipeIngredients(text)}
          placeholder="Ingrédients"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
          }}
          value={newRecipeDescription}
          onChangeText={text => setNewRecipeDescription(text)}
          placeholder="Description"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
          }}
          value={prepTime}
          onChangeText={text => setPrepTime(text)}
          placeholder="Temps de préparation"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
          }}
          value={cookTime}
          onChangeText={text => setCookTime(text)}
          placeholder="Temps de cuisson"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
          }}
          value={restTime}
          onChangeText={text => setRestTime(text)}
          placeholder="Temps de repos"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
          }}
          value={comment}
          onChangeText={text => setComment(text)}
          placeholder="Commentaire"
        />

        {/* Bouton Ajouter */}
        <TouchableOpacity
          style={{
            backgroundColor: "#f64e32",
            paddingVertical: hp(1.5),
            paddingHorizontal: hp(5),
            borderRadius: hp(1.5),
            marginBottom: 10
          }}
          onPress={addRecipe}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: hp(2.2),
              fontWeight: "medium"
            }}
          >
            Halefa
          </Text>
        </TouchableOpacity>

        {/* Liste des recettes */}
        <FlatList
          data={recipes}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}
