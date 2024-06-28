import { Alert, ImageBackground, StyleSheet, TextInput, View } from "react-native";
import { Image } from 'expo-image';
import { CustomButton } from "../components/ui";
import { FC, useState } from "react";
import { COLORS } from "../constants/colors.conts";
import Heading from "../components/ui/Heading";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface IStartGame {
    onNumberConfirmed(value: number): void
}

const StartGame: FC<IStartGame> = ({ onNumberConfirmed }) => {
    const [value, setValue] = useState('');

    const handleReset = () => {
        setValue('')
    }

    const handleChange = (val) => {
        setValue(val);
    }

    const handleConfirm = () => {
        const parsedValue = parseInt(value);

        const isNumber = typeof parsedValue === 'number';
        const isPositive = parsedValue >= 1;

        if (isNumber && isPositive) {
            onNumberConfirmed(parsedValue);
        } else {
            Alert.alert('Invalid', 'Input must be 1 or greater than 1',

                [{ text: 'Okay', style: "destructive", onPress: handleReset }]
            )
        }
    }

    return (
        <>
      <ImageBackground  source={require('../assets/bg.jpg')} resizeMode="cover" style={styles.image}>
            {/* <Image
                style={styles.image}
                source={require('../assets/bg.jpg')}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={400}  />*/}
            
            <View style={styles.container}>
                <Heading
                    title="Guess the number"
                    style={{
                        color: COLORS.primary,
                        fontSize: 24
                    }}
                />
                <TextInput
                    // TODO: inputMode="numeric" not fully supported on ios
                    keyboardType="number-pad" //TODO: supported on both platform
                    maxLength={2}
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange}
                    value={value}
                />
                <View style={styles.buttons}>
                    <CustomButton
                        title="Reset"
                        variant="secondary"
                        handleClick={handleReset}
                    />
                    <CustomButton title="Confirm" handleClick={handleConfirm} />
                </View>
            </View>
            </ImageBackground>
        </>
    )
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center'

        // Expo image styling
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // width: '100%',
        // height: '100%'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: COLORS.bg,
        borderRadius: 8,
        elevation: 1, // Android only shadow
        shadowColor: '#000', // IOS only shadow
        shadowOffset: { width: 0, height: 2 }, // IOS only shadow
        shadowRadius: 2, // IOS only shadow
        shadowOpacity: .2 // IOS only shadow
    },
    buttons: {
        flexDirection: 'row',
        gap: 16
    },
    textInput: {
        height: 45,
        width: 70,
        textAlign: 'center',
        fontSize: 18,
        borderBottomColor: COLORS.secondary,
        paddingHorizontal: 6,
        borderBottomWidth: 2,
        borderRadius: 6,
        marginVertical: 10,
    }
});

export default StartGame;