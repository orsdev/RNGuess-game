import { FC, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors.conts";

interface INumberContainer {
    children: ReactNode
}

export const NumberContainer: FC<INumberContainer> = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: COLORS.accent,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: COLORS.secondary,
        fontSize: 30,
        fontWeight: 'bold'
    }
})