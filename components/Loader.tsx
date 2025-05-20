import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '@/constants/theme'; // Ensure this import path is correct

export function Loader() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
      }}
    >
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}
