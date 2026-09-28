import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: themes.Colors.gray
    },
    input: {
        height: '100%',
        borderRadius: 40
    },
    titleInput: {
        marginLeft: 5,
        color: themes.Colors.gray,
        marginTop: 20
    },
    Button: {
        width: '10%'
    }
});