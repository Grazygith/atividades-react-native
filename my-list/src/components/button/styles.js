import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.Colors.primary,
        borderRadius: 40,
        marginTop: 30
    },
    textButton: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
    }
});