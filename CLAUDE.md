# IPTV App Development Guide for Claude

This document contains essential information for Claude when working on this React Native IPTV application.

## 🎯 Project Overview

**Primary Targets:** Android Mobile & Android TV (equal priority, with support for all platforms)
**Architecture:** Multiplatform React Native with maximum code sharing
**Styling:** NativeWind (Tailwind CSS) + React Native Reusables
**Key Goal:** Share as much code as possible between Android mobile and Android TV platforms

## 🏗️ Core Architecture & Patterns

### Component System
- **ALWAYS use React Native Reusables components** generated via CLI: `npx @react-native-reusables/cli@latest add [component]`
- **Use NativeWind/Tailwind classes** for all styling with `className` props
- **Platform detection** with `Platform.isTV` for TV-specific adaptations
- **Component composition** pattern: `<Button><Text>Label</Text></Button>`

### File Structure
```
├── app/                    # Expo Router pages
├── components/ui/          # React Native Reusables components
├── lib/utils.ts           # Utility functions (cn helper)
├── global.css             # Tailwind base styles
├── metro.config.js        # NativeWind configuration
└── CLAUDE.md              # This guide
```

### Import Patterns
```typescript
// React Native Reusables components
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

// Always use @/ path aliases (configured in tsconfig.json)
```

## 🎨 Styling Guidelines

### NativeWind/Tailwind Classes
- **Primary approach:** Use Tailwind utility classes via `className`
- **TV responsiveness:** Conditional classes based on `Platform.isTV`
- **Design tokens:** Use semantic tokens (background, foreground, muted-foreground, etc.)

```typescript
// ✅ Correct TV-responsive styling
<Text className={`font-bold mb-2 ${isTV ? "text-4xl" : "text-2xl"}`}>
  Title
</Text>

// ✅ Correct semantic colors
<View className="bg-background border border-border">
```

### Component Generation
```bash
# Generate new components using RNR CLI
npx @react-native-reusables/cli@latest add card
npx @react-native-reusables/cli@latest add input
npx @react-native-reusables/cli@latest add dialog
```

## 📱 Platform Considerations

### Mobile & TV Dual Design Principles
- **Responsive sizing:** Components adapt between mobile touch and TV remote interaction
- **Touch vs Remote:** Mobile uses touch gestures, TV uses remote control navigation
- **Screen distances:** Mobile (arm's length) vs TV (room distance) - adjust text sizes accordingly
- **Safe areas:** Mobile has notches/dynamic islands, TV has overscan - handle both
- **Focus management:** Essential for TV remote navigation, optional for mobile touch

### Layout Patterns
```typescript
// ✅ Mobile & TV responsive layout
<View className={`gap-4 ${isTV ? "flex-row flex-wrap gap-8" : ""}`}>
  <Card className={`${isTV ? "flex-1 min-w-80 max-w-[48%]" : ""}`}>
    {/* Content adapts: mobile=full width, TV=grid layout */}
  </Card>
</View>

// ✅ Responsive text sizing
<Text className={`font-bold mb-2 ${isTV ? "text-4xl" : "text-2xl"}`}>
  {/* Mobile: readable at arm's length, TV: readable from couch */}
</Text>
```

## 🔧 Development Commands

### Essential Commands
```bash
# Start development server
npm start

# Lint code (RUN FREQUENTLY)
npm run lint

# Type checking (RUN FREQUENTLY)
npx tsc --noEmit

# Clear cache if issues
npx expo start --clear
```

### Code Quality Checks
**RUN THESE FREQUENTLY (after every few changes):**
1. `npm run lint` - Check for code style issues
2. `npx tsc --noEmit` - Check TypeScript errors
3. Test on Android mobile (phone/tablet)
4. Test on Android TV (or simulator with TV mode)

## ⚠️ Critical Requirements

### Code Quality Standards
- **NO errors or warnings** - Fix immediately when they appear
- **Type safety** - Always use proper TypeScript types
- **Clean code** - Follow consistent naming and structure
- **No console logs** in production code (use proper logging if needed)

### Architectural Best Practices
- **Single Responsibility** - Each component should have one clear purpose
- **Composition over inheritance** - Use component composition patterns
- **Separation of concerns** - Keep business logic separate from UI
- **Consistent patterns** - Follow established patterns throughout the app

### Performance Considerations
- **Dual optimization** - Fast touch interactions on mobile, smooth remote navigation on TV
- **Efficient re-renders** - Use React.memo, useMemo, useCallback appropriately
- **Bundle size** - Keep dependencies minimal and necessary for both platforms
- **Memory management** - Clean up subscriptions and timers
- **Network efficiency** - Handle mobile data vs TV WiFi scenarios

## 🚨 Common Pitfalls to Avoid

### Styling Mistakes
- ❌ Don't use StyleSheet - use NativeWind classes instead
- ❌ Don't use web-only libraries (they won't work on mobile/TV)
- ❌ Don't hardcode dimensions - use responsive Tailwind classes
- ❌ Don't forget mobile OR TV platform considerations (both are equally important)

### Component Mistakes
- ❌ Don't create custom components when RNR components exist
- ❌ Don't use React Native Reusables components incorrectly (check generated patterns)
- ❌ Don't mix styling approaches (stick to NativeWind)

### Development Mistakes
- ❌ Don't ignore lint warnings/errors
- ❌ Don't skip TypeScript type checking
- ❌ Don't assume code works - test on actual devices
- ❌ Don't commit broken code

## 📋 Pre-Commit Checklist

Before any significant change:
1. ✅ Run `npm run lint` - No errors/warnings
2. ✅ Run `npx tsc --noEmit` - No TypeScript errors
3. ✅ Test on Android mobile layout (`Platform.isTV = false`)
4. ✅ Test on Android TV layout (`Platform.isTV = true`)
5. ✅ Verify proper component composition patterns
6. ✅ Check responsive design works on BOTH mobile and TV
7. ✅ Ensure touch interactions work on mobile
8. ✅ Ensure remote control navigation works on TV

## 🎬 IPTV-Specific Considerations

### Content Focus
- **Streaming experience** - Live channels, on-demand content, search
- **Visual hierarchy** - Clear content discovery and navigation
- **Performance** - Smooth video playback and navigation
- **Accessibility** - Remote control and voice control support

### Key Features to Consider
- Content grids and lists
- Video player integration
- Search and filtering
- User preferences and settings
- Offline content management
- Multiple user profiles

## 🔄 Regular Maintenance

### Weekly Tasks
- Update dependencies (carefully test after updates)
- Review and refactor any code smells
- Optimize performance bottlenecks
- Update documentation as needed

### Code Review Focus
- Proper TypeScript usage
- Consistent styling patterns
- TV/mobile compatibility
- Performance implications
- Architectural alignment

---

**Remember: This is a professional IPTV application. Quality, performance, and user experience are paramount. Always prioritize clean, maintainable code that works reliably across all target platforms.**