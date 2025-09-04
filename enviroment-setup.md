system specifications:

- GPU: NVIDIA RTX3060 8GB VRAM
- OS: Windows 11
- CPU: Intel Core i5 11400H
- RAM: 16GB RAM
- Storage: 1T 

Software Versions Installed:

- Node.js: v22.19.0
- React Native: 0.9.3
- Android Studio: AI-251.26094.121.2513.14007798
- VS Code: 1.103.2

Setup Steps Followed:

- Installed Node.js (LTS version from official site). Verified with node -v and npm -v
- Installed React Native CLI globally using npm install -g @react-native-community/cli
- Installed Android Studio and completed setup wizard
- Configured Android SDK with Platform 31 and 33, Emulator, and Platform-Tools
- Set environment variables (ANDROID_HOME and PATH for platform-tools)
- Created an Android Virtual Device (Pixel 4, API 33) and verified emulator starts
- Installed VS Code with extensions: React Native Tools, ES7+ Snippets, GitLens
- Created a test React Native project using npx react-native init EnvironmentTest
- Verified app runs on emulator using npx react-native run-android
- Initialized Git repository and connected with GitHub using SSH keys

Time Taken:

- Node.js + npm installation: ~15 minutes (including verification)
- React Native CLI setup: ~5 minutes
- Android Studio installation and SDK configuration: ~1 hour
- Environment variables setup: ~10 minutes
- Creating and testing emulator: ~20 minutes
- VS Code installation and extensions: ~10 minutes
- First project creation and run on emulator: ~20 minutes
- Git and GitHub setup with SSH keys: ~45 minutes (most time spent troubleshooting multiple accounts)
- Total Time: ~3 hours

