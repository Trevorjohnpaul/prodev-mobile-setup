# ProDev Mobile App 0x00

## Project Setup

This project was created using the Expo Router template.  
I navigated to the project directory and ran:

npx create-expo-app@latest . --template expo-router

This generated the application structure including the app directory, tabs navigation, and constants folder.

## File Structure

The generated project contains:

- app/(tabs)/index.tsx for the main home screen
- constants/Colors.tsx for theme colors
- assets folder for static files

## Home Screen Modification

I opened app/(tabs)/index.tsx and changed the default text from:
"Welcome!"
to:
"First App Created"

This confirms that the Expo Router app is running correctly.

## Running the Application

I started the development server using:

npx expo start

I scanned the QR code using Expo Go on my Android device and the app loaded successfully.

## Reset Project

I ran the reset command:

npm run reset-project

This command deleted the existing app folder and recreated a fresh Expo Router structure.  
All previous changes were removed, including the modified home screen text.

After the reset, I edited app/(tabs)/index.tsx again to restore:
"First App Created"

## Conclusion

The Expo Router mobile application runs successfully and displays the updated home screen text.
