# Portfolio Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## Customization Steps

### 1. Update Personal Information
- Edit `src/components/sections/HeroSection.tsx` for your name and introduction
- Update `src/components/sections/AboutSection.tsx` with your personal story
- Modify contact information in `src/components/sections/ContactSection.tsx`

### 2. Add Your Projects
- Edit `src/components/sections/ProjectsSection.tsx`
- Add your project details, images, and links
- Update technologies and features for each project

### 3. Update Skills
- Modify `src/components/sections/SkillsSection.tsx`
- Add your technical skills and proficiency levels
- Update certifications and achievements

### 4. Customize Colors
- Edit `tailwind.config.js` to change the color scheme
- Update primary, secondary, and accent colors

### 5. Add Your Images
- Replace placeholder images with your actual photos
- Update project screenshots
- Add certification badges

### 6. Update Social Links
- Edit social media links in `Footer.tsx` and `ContactSection.tsx`
- Add your actual GitHub, LinkedIn, and other profiles

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## File Structure
```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── sections/
│           ├── HeroSection.tsx
│           ├── AboutSection.tsx
│           ├── SkillsSection.tsx
│           ├── ProjectsSection.tsx
│           ├── CertificationsSection.tsx
│           └── ContactSection.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Need Help?
- Check the main README.md for detailed documentation
- Review the component files for customization options
- Ensure all dependencies are installed correctly
