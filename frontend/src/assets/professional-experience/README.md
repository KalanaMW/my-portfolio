# Professional experience photos & assets

Photos and company assets are configured in:
`src/app/components/professional-experience/professional-experience.component.ts`.

## Current assets in this folder

| File | Purpose | Status |
| --- | --- | --- |
| `agrithmics-office.jpg` | Kalana at Agrithmics (Cultive8) headquarters under the official neon wall branding (Slot 1 - Feature tile in gallery & lightbox) | **Active** |
| `cultive8-logo.png` | Official Cultive8 Technologies brand emblem / agritech identity (Used in company header logo lockup and Slot 2 in gallery) | **Active** |
| `agrithmics-logo.png` | Official Agrithmics wordmark logo (Used in company header logo lockup) | **Active** |

## Remaining photo slots you can provide

The gallery is a modern bento grid:
- **Slot 1 (Active):** `agrithmics-office.jpg` — Kalana at Agrithmics / Cultive8 headquarters.
- **Slot 2 (Active):** `cultive8-logo.png` — Cultive8 brand identity & ecosystem emblem.
- **Slot 3 (Placeholder):** `slspc-field-deployment-1.jpg` — You on-site during the SLSPC field deployment (1600 × 1000 px, landscape).
- **Slot 4 (Placeholder):** `agrithmics-workspace.jpg` — You collaborating at work, meeting or desk (1600 × 1000 px, landscape).
- **Slot 5 (Placeholder):** `slspc-field-deployment-2.jpg` — Supporting or training end users in the field (1600 × 1000 px, landscape).

## How to add or update photos

1. Place your photo in `src/assets/professional-experience/`.
2. In `professional-experience.component.ts`, set the corresponding item's `src` in the `photos` array (e.g. `src: 'assets/professional-experience/slspc-field-deployment-1.jpg'`).
3. You can optionally specify:
   - `objectPosition`: CSS object position (e.g. `'center 18%'`) for custom preview cropping.
   - `objectFit`: `'cover'` (default for photos) or `'contain'` (for logos/emblems).
   - `bg`: custom background color/gradient for contained graphics.

## Confidentiality reminder

Only use photos you have permission to share. Never include client credentials, production databases, confidential code, internal documents, or customer information.
