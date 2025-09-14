import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find Your Dream Home</Text>
          </View>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Discover the perfect place to call home with our curated selection of properties
            </Text>
          </View>
        </View>
        
        <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 60 }}>
          <View style={styles.buttonGroup}>
            <Link href="/join" asChild>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Join</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/signin" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </Link>
          </View>
          
          <View style={styles.buttonGroupSubText}>
            <Text style={styles.titleSubText}>Already have an account?</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
