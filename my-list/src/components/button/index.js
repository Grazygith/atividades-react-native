import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export function Button({ text, loading, ...rest }) {
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.6}
            {...rest}
        >
            {loading ? (
                <ActivityIndicator color="#FFF" />
            ) : (
                <Text style={styles.textButton}>{text}</Text>
            )}
        </TouchableOpacity>
    );
}