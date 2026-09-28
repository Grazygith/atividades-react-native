import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Input = ({
    title,
    IconLeft,
    IconRight,
    iconLeftName,
    iconRightName,
    onIconLeftPress,
    onIconRightPress,
    ...rest
}) => {
    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%';
        } else if (IconLeft || IconRight) {
            return '88%';
        }
        return '100%';
    };

    return (
        <>
            {title && <Text style={styles.titleInput}>{title}</Text>}
            <View style={styles.boxInput}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity style={styles.Button} onPress={onIconLeftPress}>
                        <IconLeft name={iconLeftName} size={20} color="#888" />
                    </TouchableOpacity>
                )}

                <TextInput
                    style={[
                        styles.input,
                        { 
                            width: calculateSizeWidth(),
                            paddingLeft: 15
                        }
                    ]}
                    {...rest}
                />

                {IconRight && iconRightName && (
                    <TouchableOpacity style={styles.Button} onPress={onIconRightPress}>
                        <IconRight name={iconRightName} size={20} color="#888" />
                    </TouchableOpacity>
                )}
            </View>
        </>
    );
};