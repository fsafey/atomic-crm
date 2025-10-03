# Changelog

All notable changes to Scholar Admin Hub will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- CHANGELOG.md to track version history
- Git tagging strategy for version management

---

## [1.0.0-template] - 2025-10-03

### Template Baseline
This tag marks the original template state before Scholar-specific customizations.

**Atomic CRM Base Features:**
- Production-ready React SPA with full CRM capabilities
- React Admin framework integration
- Supabase backend with authentication
- Contact, company, and deal management
- Sales pipeline and kanban views
- TypeScript + Vite 7 + React Router 7

**arhamkhnz Dashboard Integration:**
- Theme system infrastructure (Zustand state management)
- ThemeProvider component
- 4 theme presets:
  - Default (Neutral) - Clean professional grayscale
  - Tangerine - Warm orange/gold (Islamic aesthetic)
  - Brutalist - High contrast, bold borders
  - Soft Pop - Gentle pastels, friendly
- shadcn/ui components + Tailwind CSS 4
- Mobile responsive design

**Development Infrastructure:**
- Demo mode with mock data (`npm run dev:demo`)
- Full mode with Supabase backend (`npm run dev`)
- TypeScript strict mode
- ESLint + Prettier configured
- Vitest for testing

### Reference
- **Template Branch**: `template-baseline` (frozen, never modified)
- **Tag**: `v1.0.0-template`
- **Base Projects**:
  - Atomic CRM: `/Users/farieds/Project/admin-dashboard-references/atomic-crm`
  - arhamkhnz Dashboard: `/Users/farieds/Project/admin-dashboard-references/arhamkhnz-dashboard`

---

## Version Strategy

```
v1.0.0-template    → Current state (frozen baseline)
v1.1.0             → Theme system fully integrated
v1.2.0             → Scholar dashboard features
v2.0.0             → Major architecture changes
```

### How to Compare Against Template

```bash
# See all changes since template baseline
git diff v1.0.0-template..HEAD

# Compare specific file
git diff v1.0.0-template..HEAD -- src/components/theme/ThemeSwitcher.tsx

# View template baseline branch
git checkout template-baseline
git checkout main  # Return to development
```

---

**Note**: All changes from v1.1.0 onwards will be Scholar Admin Hub specific customizations.
