import React from 'react';
import { View, Text } from 'react-native';

export default function RecipeDetailsView({ route }) {
  const { name, ingredients, description, prepTime, cookTime, restTime, comment } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{name}</Text>
      <Text style={{ marginBottom: 5 }}>Ingrédients: {ingredients}</Text>
      <Text style={{ marginBottom: 5 }}>Description: {description}</Text>
      <Text style={{ marginBottom: 5 }}>Temps de préparation: {prepTime}</Text>
      <Text style={{ marginBottom: 5 }}>Temps de cuisson: {cookTime}</Text>
      <Text style={{ marginBottom: 5 }}>Temps de repos: {restTime}</Text>
      <Text>Commentaire: {comment}</Text>
    </View>
  );
}
