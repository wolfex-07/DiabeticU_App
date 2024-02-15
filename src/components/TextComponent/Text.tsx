import React, { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';

type children = {children: ReactNode, style: any}
export const H1 = ({ children, style}: children ) => (
  <Text style={[styles.h1, style]}>{children}</Text>
);

export const H2 = ({ children, style }: children) => (
  <Text style={styles.h2}>{children}</Text>
);

export const Paragraph = ({ children, style }: children) => (
  <Text style={[styles.paragraph, style]}>{children}</Text>
);

export const ParagraphMini = ({ children, style }: children) => (
  <Text style = {[styles.paragraphMini, style]}> {children} </Text>
);

export const HighlightText = ({ children, style }: children) => (
  <Text style = {[styles.HighlightText, style]}> {children} </Text>
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
    //textAlign: '',
    marginBottom: 20,
  },

  paragraphMini: {
    fontSize: 12,
    //textAlign: '',
    marginBottom: 0,
  },

  HighlightText :{
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 0,
    color: Colors.activityPrimary
  }
});
