import React, { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

type children = {children: ReactNode, style: any}
export const H1 = ({ children, style}: children ) => (
  <Text style={[styles.h1, style]}>{children}</Text>
);

export const H2 = ({ children, style }: children) => (
  <Text style={styles.h2}>{children}</Text>
);

export const Paragraph = ({ children, style }: children) => (
  <Text style={styles.paragraph}>{children}</Text>
);

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
