import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar } from '@rneui/base';

export default function AvatarProfile() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                    source={{ uri: 'https://i.pinimg.com/736x/d3/26/c3/d326c369af10bc61c194011b0e93dbfd.jpg' }}
                    size={64}
                    rounded
                    containerStyle={{ marginRight: 16 }}
                />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>5</Text>
                        <Text>Post</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>5</Text>
                        <Text>Post</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>5</Text>
                        <Text>Post</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 16,
    },
});
