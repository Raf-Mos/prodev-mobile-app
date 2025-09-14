# ProDev Mobile App - React Native Expo Router Project

A comprehensive React Native mobile application demonstrating different navigation patterns and modern styling approaches using Expo Router, TypeScript, and NativeWind.

## 📱 Project Overview

This repository contains three progressive iterations of a real estate mobile application, each showcasing different aspects of React Native development:

- **0x04**: Stack Navigation fundamentals
- **0x05**: Tab Navigation with complex UI components
- **0x06**: Modern styling with NativeWind (TailwindCSS)

## 🏗️ Project Structure

```
prodev-mobile-app/
├── prodev-mobile-app-0x04/    # Stack Navigation
├── prodev-mobile-app-0x05/    # Tab Navigation + Components
├── prodev-mobile-app-0x06/    # NativeWind Styling
└── README.md
```

## 🚀 Features

### Core Features (All Projects)
- ✅ **Authentication Flow**: Sign In / Sign Up screens
- ✅ **Form Validation**: Input validation and error handling
- ✅ **Password Visibility**: Toggle password display
- ✅ **Social Auth UI**: Google and Facebook login buttons
- ✅ **TypeScript**: Full type safety implementation
- ✅ **Expo Vector Icons**: Professional icon integration

### Advanced Features (0x05 & 0x06)
- ✅ **Property Listings**: Real estate card components
- ✅ **Search & Filters**: Location-based search functionality
- ✅ **Tab Navigation**: 5-tab layout (Home, Search, Saved, Inbox, Profile)
- ✅ **Reusable Components**: Modular component architecture
- ✅ **Sample Data**: Mock property data with interfaces

### Modern Features (0x06)
- ✅ **NativeWind Integration**: TailwindCSS for React Native
- ✅ **Utility-First Styling**: Modern CSS approach
- ✅ **Responsive Design**: Mobile-optimized layouts
- ✅ **Professional UI**: Card-based interface design

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React Native** | 0.81.4 | Cross-platform mobile framework |
| **Expo** | ~54.0.7 | Development platform and tools |
| **Expo Router** | ~6.0.4 | File-based routing system |
| **TypeScript** | ~5.9.2 | Type-safe development |
| **NativeWind** | ^4.0.1 | TailwindCSS for React Native |
| **Expo Vector Icons** | ^15.0.2 | Icon library |
| **React Navigation** | ^7.1.8 | Navigation components |

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for testing)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prodev-mobile-app
   ```

2. **Choose a project to run**
   ```bash
   # For Stack Navigation (Basic)
   cd prodev-mobile-app-0x04
   
   # For Tab Navigation (Intermediate)
   cd prodev-mobile-app-0x05
   
   # For NativeWind Styling (Advanced)
   cd prodev-mobile-app-0x06
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   npx expo install
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run on device**
   - Scan QR code with Expo Go app (iOS/Android)
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator

## 📱 Project Details

### 🔰 prodev-mobile-app-0x04: Stack Navigation
**Focus**: Basic navigation patterns and authentication flow

**Key Features:**
- File-based routing with Expo Router
- Stack navigation between screens
- Form handling with state management
- Basic styling with StyleSheet
- Asset management and constants

**Screens:**
- `index.tsx` - Landing page with navigation buttons
- `join.tsx` - User registration form
- `signin.tsx` - User authentication form

**Learning Objectives:**
- Understanding Expo Router fundamentals
- Implementing form validation
- Managing component state
- Basic React Native styling

---

### 🔥 prodev-mobile-app-0x05: Tab Navigation
**Focus**: Complex UI components and tab-based navigation

**Key Features:**
- Tab navigation with 5 screens
- Property listing components
- Search and filter functionality
- Reusable UI components
- TypeScript interfaces
- Mock data management

**Screens:**
- `(home)/index.tsx` - Property listings with search
- `(home)/search.tsx` - Advanced search functionality
- `(home)/saved.tsx` - Saved properties
- `(home)/inbox.tsx` - Messages and notifications
- `(home)/profile.tsx` - User profile management

**Components:**
- `PropertyListing.tsx` - Main listing container
- `PropertyListingCard.tsx` - Individual property cards
- Reusable UI components

**Learning Objectives:**
- Advanced navigation patterns
- Component composition
- Data flow and state management
- Interface design and TypeScript

---

### ⚡ prodev-mobile-app-0x06: NativeWind Styling
**Focus**: Modern styling with TailwindCSS integration

**Key Features:**
- NativeWind (TailwindCSS) integration
- Utility-first styling approach
- Responsive design patterns
- Professional UI components
- Advanced configuration setup

**Enhanced Screens:**
- Modernized Profile screen with TailwindCSS
- All previous functionality maintained
- Improved styling architecture

**Configuration:**
- `tailwind.config.js` - TailwindCSS configuration
- `metro.config.js` - Metro bundler setup
- `babel.config.js` - Babel transformation
- `global.css` - TailwindCSS directives

**Learning Objectives:**
- NativeWind setup and configuration
- Utility-first CSS methodology
- Modern styling best practices
- Build tool integration

## 🎨 Design System

### Color Palette
- **Primary Green**: `#34967C` - Main brand color
- **Primary Blue**: `#0601B4` - Accent color
- **Warning Orange**: `#FFA800` - Call-to-action
- **Error Red**: `#E50000` - Error states
- **Neutral Grays**: `#7B7B7B`, `#C2C2C2` - Text and borders

### Typography
- **Headers**: 24px - 40px (font-weight: 600-800)
- **Body Text**: 16px - 18px (font-weight: 300-400)
- **Captions**: 12px - 14px (font-weight: 300)

### Components
- **Cards**: Rounded corners (10px), shadow effects
- **Buttons**: Primary (filled), Secondary (outlined)
- **Forms**: Consistent input styling with validation
- **Icons**: 24px standard size with proper color theming

## 🧪 Testing & Development

### Development Workflow
```bash
# Start development server
npx expo start

# Clear cache if needed
npx expo start --clear

# Run on specific platform
npx expo start --ios
npx expo start --android
```

### Testing Checklist
- [ ] Navigation between all screens works
- [ ] Forms validate input correctly
- [ ] Icons display properly
- [ ] Responsive design on different screen sizes
- [ ] TypeScript compilation without errors
- [ ] No console errors or warnings

## 🚀 Deployment

### Building for Production
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure EAS
eas build:configure

# Build for production
eas build --platform all
```

### Publishing Updates
```bash
# Publish OTA update
eas update --auto
```

## 📚 Learning Resources

### Official Documentation
- [Expo Router Documentation](https://expo.github.io/router/)
- [React Navigation](https://reactnavigation.org/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Expo Vector Icons](https://icons.expo.fyi/)

### Key Concepts Demonstrated
1. **File-based Routing**: Using folder structure for navigation
2. **Component Architecture**: Building reusable UI components
3. **State Management**: Handling form data and user interactions
4. **TypeScript Integration**: Type-safe React Native development
5. **Modern Styling**: Utility-first CSS with NativeWind
6. **Asset Management**: Images, icons, and constants organization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Happy Coding! 🚀**

