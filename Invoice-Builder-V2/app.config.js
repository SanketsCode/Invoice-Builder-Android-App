import 'dotenv/config';

export default {
    expo: {
      name: "Quick Invoice Creator",
      slug: "quick-invoice-creator",
      version: "1.0.1",
      orientation: "portrait",
      icon: "./assets/icon.png",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      updates: {
        fallbackToCacheTimeout: 0
      },
      assetBundlePatterns: [
        "**/*"
      ],
      ios: {
        supportsTablet: true
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#FFFFFF"
        }
      },
      web: {
        favicon: "./assets/favicon.png"
      },
      extra: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
      },
      android: {
        package: "in.codemock.quick_invoice_builder",
        versionCode: 2,
        permissions:[
        "READ_EXTERNAL_STORAGE", 
        "WRITE_EXTERNAL_STORAGE"
        ]
      }
    }
  }