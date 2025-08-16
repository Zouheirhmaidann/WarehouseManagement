# Warehouse Management App

A React Native mobile application for managing warehouse operations, built with Expo Router and modern React practices.

## Features

- User Authentication
- Home Dashboard with Quick Actions
- Barcode Scanning for Items
- Order Management

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

4. Follow the Expo CLI instructions to run on your desired platform (iOS/Android)

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
- Implement proper error handling
- Maintain consistent styling
- Use memoization for performance optimization

## Built With

- React Native
- Expo Router
- TypeScript
- Moti (for animations)
- React Native Reanimated
