import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Image
} from "react-native";

const images = [
  { id: 1, img: require("../assets/photo69.jpg"), title: "Memories", color: "black" },
  { id: 2, img: require("../assets/photo64.jpg"), title: "Memories", color: "black" },
  { id: 3, img: require("../assets/photo68.jpg"), title: "Memories", color: "black" },
  { id: 4, img: require("../assets/photo54.jpg"), title: "Memories", color: "black" },
  { id: 5, img: require("../assets/photo59.jpg"), title: "Memories", color: "black" },
  { id: 7, img: require("../assets/photo57.jpg"), title: "Memories", color: "black" },
  { id: 8, img: require("../assets/photo51.jpg"), title: "Memories", color: "black" },
  { id: 9, img: require("../assets/photo59.jpg"), title: "Memories", color: "black" },
  { id: 10, img: require("../assets/photo10.jpg"), title: "Memories", color: "black" },
  { id: 11, img: require("../assets/photo11.jpg"), title: "Memories", color: "black" },
  { id: 12, img: require("../assets/photo12.jpg"), title: "Memories", color: "black" },
  { id: 13, img: require("../assets/photo13.jpg"), title: "Memories", color: "black" },
  { id: 14, img: require("../assets/photo14.jpg"), title: "Memories", color: "black" },
  { id: 15, img: require("../assets/photo15.jpg"), title: "Memories", color: "black" },
  { id: 16, img: require("../assets/photo16.jpg"), title: "Memories", color: "black" },
  { id: 17, img: require("../assets/photo17.jpg"), title: "Memories", color: "black" },
  { id: 18, img: require("../assets/photo18.jpg"), title: "Memories", color: "black" },
  { id: 19, img: require("../assets/photo19.jpg"), title: "Memories", color: "black" },
  { id: 20, img: require("../assets/photo20.jpg"), title: "Memories", color: "black" },
  { id: 21, img: require("../assets/photo21.jpg"), title: "Memories", color: "black" },
  { id: 22, img: require("../assets/photo22.jpg"), title: "Memories", color: "black" },
  { id: 23, img: require("../assets/photo23.jpg"), title: "Memories", color: "black" },
  { id: 24, img: require("../assets/photo24.jpg"), title: "Memories", color: "black" },
  { id: 25, img: require("../assets/photo25.jpg"), title: "Memories", color: "black" },
  { id: 26, img: require("../assets/photo26.jpg"), title: "Memories", color: "black" },
  { id: 27, img: require("../assets/photo27.jpg"), title: "Memories", color: "black" },
  { id: 28, img: require("../assets/photo28.jpg"), title: "Memories", color: "black" },
  { id: 29, img: require("../assets/photo29.jpg"), title: "Memories", color: "black" },
  { id: 30, img: require("../assets/photo30.jpg"), title: "Memories", color: "black" },
  { id: 31, img: require("../assets/photo31.jpg"), title: "Memories", color: "black" },
  { id: 32, img: require("../assets/photo32.jpg"), title: "Memories", color: "black" },
  { id: 33, img: require("../assets/photo33.jpg"), title: "Memories", color: "black" },
  { id: 34, img: require("../assets/photo34.jpg"), title: "Memories", color: "black" },
  { id: 35, img: require("../assets/photo35.jpg"), title: "Memories", color: "black" },
  { id: 36, img: require("../assets/photo36.jpg"), title: "Memories", color: "black" },
  { id: 37, img: require("../assets/photo37.jpg"), title: "Memories", color: "black" },
  { id: 38, img: require("../assets/photo38.jpg"), title: "Memories", color: "black" },
  { id: 39, img: require("../assets/photo39.jpg"), title: "Memories", color: "black" },
  { id: 40, img: require("../assets/photo40.jpg"), title: "Memories", color: "black" },
  { id: 41, img: require("../assets/photo41.jpg"), title: "Memories", color: "black" },
  { id: 42, img: require("../assets/photo42.jpg"), title: "Memories", color: "black" },
  { id: 43, img: require("../assets/photo43.jpg"), title: "Memories", color: "black" },
  { id: 44, img: require("../assets/photo44.jpg"), title: "Memories", color: "black" },
  { id: 45, img: require("../assets/photo45.jpg"), title: "Memories", color: "black" },
  { id: 46, img: require("../assets/photo46.jpg"), title: "Memories", color: "black" },
  { id: 47, img: require("../assets/photo47.jpg"), title: "Memories", color: "black" },
  { id: 48, img: require("../assets/photo48.jpg"), title: "Memories", color: "black" },
  { id: 49, img: require("../assets/photo49.jpg"), title: "Memories", color: "black" },
  { id: 50, img: require("../assets/photo50.jpg"), title: "Memories", color: "black" },

]

export default BasicSlider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  let { width: windowWidth, height: windowHeight } = useWindowDimensions();
  windowHeight = windowHeight - 200;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.textAreaContainer}>

        {images.map((image, imageIndex) => {

          const inputRange = [
            windowWidth * (imageIndex - 1),
            windowWidth * (imageIndex),
            windowWidth * (imageIndex + 1),
          ];
          return (
            <Animated.Text style={[styles.textView, {
              transform: [
                {
                  translateY: scrollX.interpolate({
                    inputRange,
                    outputRange: [-500, -50, 0],
                  })
                }
              ]
            }, {
              opacity: scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0]
              })
            }, {
              color: image.color
            }]}>
              {image.title}
            </Animated.Text>
          );
        })}

      </View>
      <View style={[styles.scrollContainer, { height: windowHeight }]}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {images.map((image, imageIndex) => {
            return (
              <Animated.View
                style={{ width: windowWidth, }}
                key={imageIndex}
              >
                <Image source={image.img} style={styles.card} />

              </Animated.View>
            );
          })}
        </ScrollView>

      </View>
      <View style={styles.indicatorContainer}>

        {
          images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * (imageIndex),
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            })

            return (
              <Animated.View style={[styles.normalDots, { width }, { backgroundColor: image.color }]} />


            );
          })
        }

      </View>




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    shadowColor: "#6A6C6E",
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 1,
  },
  card: {
    flex: 1,
    marginVertical: 10,
    width: 350,
    overflow: "hidden",
    alignSelf: "center",

  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,

    marginHorizontal: 4,
  },
  textAreaContainer: {
    width: "100%",
    marginBottom: 10,
  },
  textView: {
    position: "absolute",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    width: "100%"
  }


});