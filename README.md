# Social Connect

Social Connect is an Expo React Native internship project for a simple social app. The week 4-6 work adds social interactions, messaging, media posts, profile setup, search, notifications, and deployment preparation.

## Features

- Home feed with optimized `FlatList` rendering.
- Create text posts and attach an image preview before posting.
- Like, comment, edit, and delete posts.
- Search posts and users from the home feed.
- Follow and unfollow users from profile screens.
- Basic one-to-one text chat.
- Edit your profile name, bio, and profile picture.
- Optional Expo push notification registration and local notification test.
- Optional Firestore sync for posts, follows, comments, likes, messages, and profiles.

## Requirements

- Node.js
- npm
- Expo CLI through `npx expo`
- Android Studio emulator, iOS simulator, or Expo Go for device testing

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open on a target:

```bash
npm run android
npm run ios
npm run web
```

## Firebase Setup

The app works as a local demo without Firebase credentials. To sync writes to Firestore, create a Firebase project, enable Firestore, and add these Expo public environment variables:

```bash
EXPO_PUBLIC_FIREBASE_API_KEY=your-api-key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
EXPO_PUBLIC_FIREBASE_APP_ID=your-app-id
```

Firestore collections used by the app:

- `users`
- `posts`
- `chats/{chatId}/messages`

## Testing

Run linting:

```bash
npm run lint
```

Manual test checklist:

- Create a text post.
- Add an image to a post and verify the preview appears.
- Edit and delete one of your posts.
- Search for a user and a post.
- Follow and unfollow another user.
- Send a message from a user profile.
- Update your profile photo, name, and bio.
- Enable notifications from Settings and send a test notification.
- Test on at least one Android target and one iOS target before submission.

## Deployment Preparation

Create an EAS project before production push notifications:

```bash
npx eas init
```

Build Android:

```bash
npx eas build --platform android
```

Build iOS:

```bash
npx eas build --platform ios
```

Before submitting week 6, push the complete repository to GitHub, record a video walkthrough showing posts, follows, messages, and device usage, and note any bugs found during testing.
