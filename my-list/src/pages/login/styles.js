import { StyleSheet, Dimensions } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        paddingHorizontal: 37
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 37
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    text: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    }
});