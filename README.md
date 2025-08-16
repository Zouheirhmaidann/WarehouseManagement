# Warehouse Management App

A React Native mobile application for managing warehouse operations, built with Expo Router and modern React practices.

## Features

- User Authentication with secure token management
- Home Dashboard with Quick Actions and animated cards
- Real-time Barcode Scanning with cooldown prevention
- Order Management with search and filtering
- Order Status tracking and KPIs
- Modern UI with smooth animations using Moti
- Keyboard-aware forms with auto-dismissal
- Toast notifications for user feedback

## Project Structure

```
├── app/                    # Main application screens
│   ├── (tabs)/            # Tab-based navigation screens
│   └── Views/             # Feature-specific views
├── assets/                # Static assets (images, fonts)
├── components/            # Reusable UI components
├── context/               # React Context providers
├── helpers/               # Utility functions and configurations
├── mock/                  # Mock data for development
├── services/              # API and business logic services
└── types/                 # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for development)

### Installation

1. Clone the repository

```bash
git clone [git@github.com:Zouheirhmaidann/WarehouseManagement.git]
cd WarehouseManagement
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npx expo start -c
# or
yarn expo start -c
```

4. Configure the backend URL in `GlobalVar.ts`:

```typescript
// Update BACKEND_URL to point to your backend server
BACKEND_URL: "http://your-backend-server:3001/api";
```

5. Follow the Expo CLI instructions to run on your desired platform (iOS/Android)

## Demo Credentials

Use these credentials to log in to the application:

- Username: wakilni.demo
- Password: Wakilni@Test

## Key Components

- `LogoutPopup`: Handles user logout confirmation
- `BarcodeScan`: Manages barcode scanning functionality
- `CardComponent`: Reusable card UI component
- `CustomTextField`: Reusable custom input field component
- `ScreenHeader`: Reusable consistent header across screens

## Development Guidelines

- Use TypeScript for type safety
- Follow the established component structure
- Implement proper error handling and validation
- Maintain consistent styling with shared components
- Use memoization (memo, useCallback) for performance optimization
- Follow atomic design principles for component organization
- Implement proper keyboard handling and form management
- Use proper error boundaries and loading states

## Built With

- React Native
- Expo Router for type-safe navigation
- TypeScript for static typing
- Moti and React Native Reanimated for smooth animations
- Expo Barcode Scanner for scanning functionality
- React Native Toast Message for notifications
- Axios for API communication
- AsyncStorage for local data persistence
- Lucide React Native for consistent iconography
- React Native Gesture Handler for touch interactions
