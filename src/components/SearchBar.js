import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgoundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        placeholder="Search"
        style={styles.inputStyle}
        // onChangeText={(newTerm) => onTermChange(newTerm)}
        onChangeText={onTermChange} //this is same as above except we are passing instance of the function here
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgoundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    // backgroundColor: "black",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
