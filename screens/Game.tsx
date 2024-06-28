import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Heading from "../components/ui/Heading";
import { FC, useEffect, useState } from "react";
import { generateRandom } from "../utils";
import { NumberContainer } from "../components/game/NumberContainer";
import { Ionicons } from '@expo/vector-icons';
import { CustomButton } from "../components/ui";
import { COLORS } from "../constants/colors.conts";

enum Direction {
    lower,
    higher
};

interface IGame {
    userNumber: number;
    onGameOver(): void;
}

let minBoundary = 1;
let maxBoundary = 100;

const Game: FC<IGame> = ({ userNumber, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(() => generateRandom(1, 100, userNumber));
    const [guessRounds, setGuessRounds] = useState([currentGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    const nextGuessHandler = (direction: Direction) => {

        if ((direction === Direction.lower && currentGuess < userNumber) ||
            (direction === Direction.higher && currentGuess > userNumber)) {
            Alert.alert('Oops', 'The answer is wrong...', [
                {
                    text: 'Cancel',
                    style: 'cancel'
                }
            ])
            return;
        }

        if (direction === Direction.lower) {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRandNumber = generateRandom(minBoundary, maxBoundary, currentGuess)

        setCurrentGuess(newRandNumber);
        setGuessRounds((prev) => [newRandNumber, ...prev])
    };


    return (
        <View style={styles.container}>
            <View>
                <Heading title="Opponent's Guess" />
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <View>
                <Text style={{
                    fontSize: 16,
                    textAlign: 'center'
                }}>Higher or lower?</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 10,
                marginTop: 10
            }}>
                <CustomButton
                    handleClick={() => nextGuessHandler(Direction.lower)}
                    variant="secondary"
                >
                    <Ionicons name="remove" size={20} color="white" />
                </CustomButton>
                <CustomButton
                    variant="primary"
                    handleClick={() => nextGuessHandler(Direction.higher)}>
                    <Ionicons name="add" size={20} color="white" />
                </CustomButton>
            </View>
            <View style={{
                marginTop: 40
            }}>
                <CustomButton
                    variant="secondary"
                    handleClick={() => {
                        setCurrentGuess(null);
                        onGameOver()
                    }}>
                    <Ionicons name="refresh-circle-outline" size={20} color="white" />
                    <Text style={{ color: '#fff' }}>Restart</Text>
                </CustomButton>
            </View>
            {/* Adding this view with flex: 1, makes the flatlist scrollable */}
            <View style={{
                marginTop: 30,
                width: '100%',
                borderColor: COLORS.primary,
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                flex: 1,
            }}>
                <Heading title="Logs"/>
                <FlatList
                    data={guessRounds}
                    renderItem={({ item }) => {
                        return (
                            <Text style={{
                                backgroundColor: COLORS.bg,
                                padding: 10,
                                borderRadius: 8,
                                marginBottom: 10
                            }}>{item}</Text>
                        )
                    }}
                    keyExtractor={item => item}
                />
            </View>
        </View>
    )
};

export default Game;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
})