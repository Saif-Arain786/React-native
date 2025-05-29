# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:
# React Native and Hermes Basic Rules
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }

# React Native Modules
-keep public class com.horcrux.svg.** { *; }
-keep public class com.swmansion.** { *; }
-keep public class org.unimodules.** { *; }

# Hermes Specific
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.hermes.instrumentation.** { *; }

# JavaScript to Java Reflection
-keepclassmembers class * { @com.facebook.react.uimanager.annotations.ReactProp <methods>; }
-keepclassmembers class * { @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>; }

# Native Modules
-keepclassmembers class * extends com.facebook.react.bridge.JavaScriptModule { *; }
-keepclassmembers class * extends com.facebook.react.bridge.NativeModule { *; }

# View Managers
-keepclassmembers class * extends com.facebook.react.uimanager.ViewManager { *; }
-keepclassmembers class * extends com.facebook.react.uimanager.ViewManagerPropertyUpdater { *; }

# OkHttp
-keepattributes Signature
-keepattributes *Annotation*
-keep class okhttp3.** { *; }
-keep interface okhttp3.** { *; }
-keep class okio.** { *; }

# Firebase
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }

# Crashlytics
-keep class com.crashlytics.** { *; }
-keep class com.google.firebase.crashlytics.** { *; }

# Vector Icons
-keep class com.oblador.vectoricons.** { *; }

# Safe Area Context
-keep class com.th3rdwave.safeareacontext.** { *; }

# React Navigation
-keep class com.swmansion.rnscreens.** { *; }
-keep class com.swmansion.reanimated.** { *; }
-keep class com.swmansion.gesturehandler.** { *; }

# Debugging (remove for final release)
-keepattributes SourceFile,LineNumberTable
-keep class com.facebook.react.turbomodule.core.** { *; }