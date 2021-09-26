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
        height: 80,
        padding: 20,
        marginTop: 150,
        width: 400,
        justifyContent: 'center',
        backgroundColor: '#173F5F',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})