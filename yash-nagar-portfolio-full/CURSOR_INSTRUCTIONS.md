# Cursor AI Cloning Guide
This project is a high-end Bento-grid portfolio. 

## Key Architecture
1. **Grid Logic**: Uses a 4-column CSS Grid with `auto-rows-[180px]`.
2. **Animations**: Built with `framer-motion`. Note the "Stacking" effect in the Profile Card.
3. **AI Integration**: Uses Google Gemini API via `@google/genai`.
4. **Theme**: Class-based dark mode toggle.

## How to Clone/Modify
- To add a new grid item: Update `src/data.ts` and `src/components/BentoGrid.tsx`.
- To change AI personality: Modify the `systemPrompt` in `src/data.ts`.
- Set your Gemini API Key in `.env` as `VITE_API_KEY`.