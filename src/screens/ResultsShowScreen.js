import React, { useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, FlatList } from "react-native";
import yelp from "../api//yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  console.log(result);
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.img} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultsShowScreen;
