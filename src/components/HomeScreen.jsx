import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Image, Text, Avatar } from 'react-native-elements';
import { Icon } from "@rneui/base";

const posts = [
    {
        id: '1',
        imageUrl: 'https://via.placeholder.com/400x200.png?text=Post+1',
        caption: 'Este es el primer post',
        username: 'Darkpool645',
        userAvatar: 'https://via.placeholder.com/150.png?text=Avatar+1',
    },
    {
        id: '2',
        imageUrl: 'https://via.placeholder.com/400x200.png?text=Post+2',
        caption: 'Este es el segundo post',
        username: 'HolaMundo',
        userAvatar: 'https://via.placeholder.com/150.png?text=Avatar+2',
    },
    {
        id: '3',
        imageUrl: 'https://via.placeholder.com/400x200.png?text=Post+3',
        caption: 'Este es el tercer post',
        username: 'AngelCamargo',
        userAvatar: 'https://via.placeholder.com/150.png?text=Avatar+3',
    },
];

const HomeScreen = () => {
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                    <View style={styles.userContainer}>
                        <Avatar
                            rounded
                            source={{ uri: item.userAvatar }}
                            size="medium"
                        />
                        <Text style={styles.username}>{item.username}</Text>
                    </View>
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <View style={styles.iconContainer}>
                            <Icon name='heart-outline' type='material-community' />
                            <Icon name='message-outline' type='material-community' />
                            <Icon name='send-outline' type='material-community' />
                        </View>
                        <View style={{alignItems: 'flex-end', background: 'red', width: '55%'}}>
                            <Icon name='book-outline' type='material-community'/>
                        </View>
                    </View>
                    <Text style={styles.caption}>{item.caption}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 20
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    username: {
        marginLeft: 10,
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        width: "40%"
    },
    caption: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
    },
});

export default HomeScreen;
