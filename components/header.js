import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        heaight: 80,
        paddingTop: 38,
        backgroundColor: '173F5F',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSie: 20,
        fontWeight: 'bold',
    }
})