import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useState } from "react";
import { styles } from "@/styles/_joinstyle";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const Join = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleJoin = () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Success", "Account created successfully!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Image source={HEROLOGOGREEN} />
        <View />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join</Text>
        <Text style={styles.subText}>Create an account to get started</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your full name"
            value={formData.fullName}
            onChangeText={(text) => handleInputChange("fullName", text)}
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Ionicons 
                name={showPassword ? "eye-off" : "eye"} 
                size={24} 
                color="#7B7B7B" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleJoin}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E5E5E5' }]}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E5E5E5' }]}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin" asChild>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}>Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Join;