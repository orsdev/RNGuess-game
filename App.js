import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGame from './screens/StartGame';
import { useState } from 'react';
import Game from './screens/Game';
import { GameOver } from './screens/GameOver';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);


  const handleConfirmed = (value) => {
    setPickedNumber(value);
  };

  const handleRestartGame = () => {
    setIsGameOver(false);
    setPickedNumber(null)
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{
        flex: 1
      }}>
        <View style={styles.container}>
          {!pickedNumber && !isGameOver && <StartGame onNumberConfirmed={handleConfirmed} />}
          {pickedNumber && !isGameOver && <Game userNumber={pickedNumber} onGameOver={() => {
            setIsGameOver(true)
          }} />}
          {isGameOver && pickedNumber && <GameOver restartGame={handleRestartGame} />}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff'
  },
});