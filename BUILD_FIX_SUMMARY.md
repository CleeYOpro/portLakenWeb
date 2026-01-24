# Build Error Fixes - Port Laken Web

## Issues Identified

### 1. **Missing API Route**
The `SpotlightSlideshow` component was trying to fetch data from `/api/spotlight-data`, but this endpoint didn't exist. During Next.js build time, this caused the fetch to fail, leaving `spotlightData` as an empty array.

### 2. **Unsafe Array Access**
The component was accessing `spotlightData[currentIndex]` without checking if the array had any items. When the array was empty during build, this caused:
```
TypeError: Cannot destructure property 'image' of 'undefined'
```

### 3. **Interval Running on Empty Data**
The `useEffect` hook that cycles through spotlight images was running even when there was no data, attempting to calculate `(prev + 1) % spotlightData.length` which would result in `NaN` when length is 0.

## Fixes Applied

### ✅ Fix 1: Created Missing API Route
**File**: `app/api/spotlight-data/route.ts` (NEW)

Created a new API route that returns spotlight data for the calendar section. This ensures the component always has data to fetch during both build and runtime.

### ✅ Fix 2: Added Safety Guards
**File**: `app/page.tsx` - `SpotlightSlideshow` component

**Changes**:
1. Added check to prevent interval from running when `spotlightData.length === 0`
2. Enhanced array access with double-check: `spotlightData.length > 0 && spotlightData[currentIndex]`
3. Added fallback data function that provides default content if API fails

### ✅ Fix 3: Enhanced Error Handling
**File**: `app/page.tsx` - `SpotlightSlideshow` component

**Changes**:
1. Added response status check in fetch
2. Validate that returned data is a non-empty array
3. Automatically use fallback data on any error
4. Fallback data uses existing `galleryImages` to ensure images are always available

## Code Changes Summary

### Before (Problematic):
```tsx
const currentSpotlight = spotlightData.length > 0 ? spotlightData[currentIndex] : {...};
// Problem: spotlightData[currentIndex] could still be undefined
```

### After (Fixed):
```tsx
const currentSpotlight = spotlightData.length > 0 && spotlightData[currentIndex] 
  ? spotlightData[currentIndex] 
  : { image: '', title: '', description: '' };
// Safe: Double-checks both array length AND element existence
```

## Font Warning Note

The Nunito Sans font warning you mentioned:
```
⨯ Failed to find font override values for font Nunito Sans
```

This is typically just a warning and won't break the build. Your font configuration in `app/layout.tsx` is correct:

```tsx
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
  variable: "--font-nunito-sans",
});
```

This warning appears when Next.js can't automatically calculate font metrics for optimization, but the font will still load and work correctly.

## Testing the Fix

To verify the fixes work:

1. **Development**: The dev server should now run without errors
2. **Build**: Run `npm run build` to ensure the production build completes successfully
3. **Runtime**: The spotlight slideshow should display images from the API route
4. **Error Resilience**: If the API fails, fallback data ensures the component still renders

## Prevention Tips

To avoid similar issues in the future:

1. **Always use optional chaining** when accessing array elements: `array?.[index]`
2. **Guard array operations** with length checks before running intervals/loops
3. **Provide fallback data** for components that fetch external data
4. **Test build process** regularly with `npm run build` to catch SSR/SSG issues early
5. **Use TypeScript** to catch potential undefined access at compile time

## Next Steps

If you still encounter build errors:

1. Clear Next.js cache: `rm -rf .next` (or `Remove-Item -Recurse -Force .next` on Windows)
2. Reinstall dependencies: `npm install`
3. Try building again: `npm run build`

If the font warning persists but doesn't break the build, you can safely ignore it or try using the font with underscores instead:
```tsx
import { Nunito_Sans } from 'next/font/google'
```
(Which you're already doing correctly!)
