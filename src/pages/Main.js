import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import logo from "../assets/logo.png";
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://avatars0.githubusercontent.com/u/1500873?v=4"
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Mhayk Whandson</Text>
            <Text style={styles.bio} numberOfLines={3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
              labore. Quod quisquam dolore commodi dolorem consequatur
              reiciendis odio placeat quaerat non vel, libero cum hic aliquid
              fugit esse impedit quas!
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars0.githubusercontent.com/u/1500873?v=4"
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Mhayk Whandson</Text>
            <Text style={styles.bio} numberOfLne={3}>
              Programador apaixonado!
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars0.githubusercontent.com/u/1500873?v=4"
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Mhayk Whandson</Text>
            <Text style={styles.bio} numberOfLines={3}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              nihil perspiciatis cumque sed autem exercitationem ipsum aliquam
              vero? Voluptatum iste ad libero rerum qui, repellendus cupiditate
              et atque minima nostrum?
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={dislike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={like} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    marginTop: 30
  },

  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: "center",
    maxHeight: 500
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 30,
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  avatar: {
    flex: 1,
    height: 300,
  },
  footer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#333'
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 30
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
