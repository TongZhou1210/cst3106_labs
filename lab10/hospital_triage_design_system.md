# Hospital Triage App – Design System

## 1. Design Overview
The Hospital Triage App aims to provide an intuitive, friendly, and easy-to-use triage management experience for both patients and administrative staff.  
The overall visual style is inspired by the Appletree Medical Group patient portal, emphasizing:

- Simplicity
- Ease of use
- Visual comfort
- Professionalism and trustworthiness in a medical environment

---

## 2. Typography

### Primary Font – Arial
Used for:
- Page titles
- Button text
- Module names
- Important UI labels

Reason: Modern, clean, and highly legible on digital screens.

### Secondary Font – Times New Roman
Used for:
- Long descriptive paragraphs
- Body text

Reason: Provides high reading comfort and visual contrast with Arial.

---

## 3. Colour Palette

### 🎨 Primary Accent Color – Soft Coral Red (`#DD6B5C`)
This color closely matches Appletree’s button styling.

Benefits:
- Not harsh
- Patient-friendly
- Soft and professional
- Suitable for key actions and urgent indicators

| Usage | Color | Hex | Description |
|-------|--------|------|------------------------------|
| Primary action buttons / Admin alerts | Soft Coral Red | `#DD6B5C` | Gentle red for important actions |
| Hover / Pressed state | Deeper Coral Red | `#C85D50` | Indicates interaction state |
| Disabled button | Light Coral Red | `#E9B3AC` | Non-interactive state |

---

### User Interface Palette (Patients)

- **Calming Blue (`#4A90E2`)**  
  Used for main buttons, links, and headings.

- **Neutral Grey (`#F2F2F2` / `#DDDDDD`)**  
  Applied to backgrounds, cards, and input areas.

---

### Admin Interface Palette (Staff)

- **Dark Grey (`#444444`)**  
  Used for admin dashboards, panels, and data sections.

- **Soft Coral Red (`#DD6B5C`)**  
  Used for urgency indicators, priority controls, and delete actions.

---

## 4. App Components

### Page Titles
- “Hospital Triage – User”
- “Hospital Triage – Admin”
- Styled in large, bold, centered Arial text.

### Description / Subtitle
Examples:
- “Please submit your injury details so we can prioritize your care.”
- “Review and manage the patient triage queue.”

Styled in Times New Roman.

---

### Buttons (Appletree Style)
- Rounded rectangle (approx. 40px radius)
- Background: Soft Coral Red `#DD6B5C`
- Font: Arial Bold
- Padding: 16–20px
- Hover: `#C85D50`
- Disabled: `#E9B3AC`

---

### Input Fields
- Outlined
- 12–16px padding
- Clear placeholders
- Consistent vertical spacing

---

### Patient Questionnaire (User Page)
Includes:
- Injury type selection
- Pain level (1–10)
- Submit button in Soft Coral Red

Data flows to the Admin page upon submission.

---

### Admin Summary (Admin Page)
Displays:
- Patient list (injury, pain level, time submitted)
- Urgency indicators (Soft Coral Red)
- Actions: Increase priority, decrease priority, remove patient, sort list

---

## 5. Layout and Navigation

### Layout
- Responsive grid system
- Generous white space
- Grey backgrounds + white cards
- Clean, uncluttered design

### Navigation
- **Mobile:** Bottom navigation
- **Desktop:** Top navigation or sidebar

### Flow Structure
- **User:** Questionnaire → Submit → Confirmation
- **Admin:** View list → Adjust priority → Resolve or remove cases

---

## 6. Consistency
- Unified color palette (Soft Coral Red as key accent)
- Consistent typography
- Standardized button styling
- Standard spacing system (8 / 12 / 16 / 24px)
- Form validation and dialogs follow consistent patterns

Benefits:
- Improved usability
- Reduced learning curve
- A more professional, cohesive experience

---

## 7. Component Integration
- User Page form feeds into Admin Page list
- Shared colors, spacing, and button patterns
- A complete workflow similar to Appletree’s “submit → review” system

---

## 8. User Experience (UX)

### User Side
- Simple, calm questionnaire
- Clear action buttons
- Intuitive progression

### Admin Side
- Clean data visualization
- Clear urgency indicators
- Fast sorting and decision-making

Designed to perform well in high-stress clinical environments.

---

## 9. Team
- Zhou Tong  