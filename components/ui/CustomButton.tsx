import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FC, ReactNode } from 'react';
import { COLORS } from "../../constants/colors.conts";

interface ICustomButton {
    title?: string;
    children?: ReactNode;
    variant?: 'primary' | 'secondary'
    handleClick?(): void;
}

export const CustomButton: FC<ICustomButton> = ({ title, children, handleClick, variant = 'primary' }) => (
    <TouchableOpacity
        style={[styles.main, variant === 'primary' ?
            styles.primaryStyle : styles.secondaryStyle]}
        onPress={handleClick}
    >
        {children && children}
        {title && <Text style={{ color: '#fff' }}>{title}</Text> }
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        gap: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        minWidth: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    primaryStyle: {
        backgroundColor: COLORS.primary
    },
    secondaryStyle: {
        backgroundColor: COLORS.accent
    }
})
