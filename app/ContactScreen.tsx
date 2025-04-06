// app/contact.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Button, KeyboardAvoidingView, Platform } from 'react-native';
import FooterDesign from './components/FooterSection';

import { db } from '../scripts/firebase';
import { collection, addDoc } from 'firebase/firestore';

const ContactScreen = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async () => {
    if (!formName || !formEmail || !formMessage) {
      Alert.alert('Validation', 'Please fill in all fields!');
      return;
    }

    try {
      await addDoc(collection(db, 'contacts'), {
        name: formName,
        email: formEmail,
        message: formMessage,
        createdAt: new Date(),
      });

      Alert.alert('Success', 'Form submitted!');
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    } catch (error) {
      console.error('Error adding document:', error);
      Alert.alert('Error', 'Submission failed!');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TextInput
        placeholder="Name"
        value={formName}
        onChangeText={setFormName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={formEmail}
        onChangeText={setFormEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Message"
        value={formMessage}
        onChangeText={setFormMessage}
        multiline
        style={[styles.input, { height: 100 }]}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <FooterDesign />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    padding: 10,
  },
});

export default ContactScreen;
