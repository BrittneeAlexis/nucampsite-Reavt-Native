import React from 'react';
import { ActivityIndicator, StyleSheet, Text , View, ViewBase } from 'react-native';

function Loading () {
    return (
        <View style ={ style.loadingView }>
            <ActivityIndicator size='large' color='#56370D' />
            <Text style= {style.loadingText}> Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },

        loadingText: {
            color: '#563700',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
)

export default Loading;