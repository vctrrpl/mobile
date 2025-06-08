import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { authStyles } from '../../assets/styles/auth.styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Add your login logic here
    Alert.alert('Login', 'Login functionality to be implemented');
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Forgot Password',
      'Password recovery functionality to be implemented'
    );
  };

  return (
    <View style={authStyles.container}>
      {/* Main Content */}
      <View style={authStyles.content}>
        {/* Logo */}
        <View style={authStyles.logoContainer}>
          <View style={authStyles.logoRing} />
          <View style={authStyles.logo}>
            <View style={authStyles.logoInner}>
              <Text style={authStyles.coffeeText}>☕</Text>
            </View>
          </View>
        </View>

        {/* Login Form */}
        <View style={authStyles.formContainer}>
          {/* Email Input */}
          <View style={authStyles.inputContainer}>
            <Text style={authStyles.inputLabel}>Your Email</Text>
            <TextInput
              style={authStyles.textInput}
              placeholder="Username"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Password Input */}
          <View style={authStyles.inputContainer}>
            <Text style={authStyles.inputLabel}>Password</Text>
            <View style={authStyles.passwordContainer}>
              <TextInput
                style={authStyles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 15, top: 17 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={authStyles.eyeIcon}>
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={authStyles.loginButton}
            onPress={handleLogin}
          >
            <Text style={authStyles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Forgot Password */}
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={authStyles.forgotPassword}>
              Contact your admin if you forgot your password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
