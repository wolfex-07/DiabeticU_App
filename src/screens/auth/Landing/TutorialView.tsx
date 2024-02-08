import React, { useState } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, Text } from 'react-native';
import { H1,H2,Paragraph } from '../../../components/TextComponent/index';
import AppImages from '../../../Constants/Images';

const { width } = Dimensions.get('window');

const images = [
  AppImages.landingImgFirst,
  AppImages.landingImgFirst,
  AppImages.landingImgFirst
];

const TutorialView = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / width);
    setCurrentPage(currentIndex);
};

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
        <View style={{width: width}}>
            <Image 
            source={item}
             style={styles.image} />
            <H1 style={{textAlign: 'center'}}>Customised Meal Plan</H1>
            <Paragraph style={{}}>A personalised meal plan designed for individual preferences and goals.</Paragraph>
        </View>
          
        )}
        onMomentumScrollEnd={handlePageChange}
      />
      <View style={styles.paginationDots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentPage && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    //height: 200,
    //backgroundColor: 'red',
    width: Dimensions.get('window').width,
    flex: 1,
    resizeMode: 'center',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue', // Change color for the active dot
  },
});

export default TutorialView;
