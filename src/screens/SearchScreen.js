import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term, //here it is => term = {term}
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
    console.log(results);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm} // equivalent to (newTerm) => setTerm(newTerm)
        onTermSubmit={searchApi} // equivalent to () => searchApi()
      />
      <Text>SearchScreen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
