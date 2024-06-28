import { Text, View } from "react-native"
import { CustomButton } from "../components/ui"
import { FC } from "react";

interface IGameOver {
    restartGame(): void;
}

export const GameOver: FC<IGameOver> = ({ restartGame }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10
        }}>
            <Text style={{ fontSize: 30 }}>Game Over</Text>

            <CustomButton title="Restart Game" handleClick={restartGame} />
        </View>
    )
}