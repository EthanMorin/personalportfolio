# Portfolio Modular Structure

This portfolio has been refactored into a clean, modular architecture using Vue 3 Composition API, composables, and reusable components.

## 📁 Project Structure

```
app/
├── composables/
│   ├── usePortfolioData.ts    # Portfolio data (skills, projects, experience)
│   └── useNavigation.ts       # Navigation logic and state
├── components/
│   ├── PortfolioNavigation.vue    # Fixed navigation bar
│   ├── HeroSection.vue            # Hero/intro section
│   ├── AboutSection.vue           # About me and skills section
│   ├── ProjectCard.vue            # Individual project card component
│   ├── ProjectsSection.vue        # Projects showcase section
│   ├── ExperienceItem.vue         # Individual experience item
│   ├── ExperienceSection.vue      # Experience timeline section
│   ├── ContactSection.vue         # Contact form and info
│   └── PortfolioFooter.vue        # Footer component
└── pages/
    └── index.vue                   # Main page (now clean and minimal)
```

## 🔧 Composables

### `usePortfolioData.ts`

- **Purpose**: Centralized data management for portfolio content
- **Exports**: `skills`, `projects`, `experience`
- **Benefits**: Easy to update content, reusable across components

### `useNavigation.ts`

- **Purpose**: Navigation state and scroll functionality
- **Exports**: `currentSection`, `scrollToSection`
- **Benefits**: Centralized navigation logic, reusable across components

## 🧩 Components

### Layout Components

- **`PortfolioNavigation.vue`**: Fixed navigation with smooth scrolling
- **`PortfolioFooter.vue`**: Simple footer with copyright

### Section Components

- **`HeroSection.vue`**: Introduction with name, title, and CTA buttons
- **`AboutSection.vue`**: Skills showcase and "What I Do" section
- **`ProjectsSection.vue`**: Projects grid with `ProjectCard` components
- **`ExperienceSection.vue`**: Timeline with `ExperienceItem` components
- **`ContactSection.vue`**: Contact form and information

### Reusable Components

- **`ProjectCard.vue`**: Individual project card with image, description, tech stack
- **`ExperienceItem.vue`**: Individual experience entry with timeline styling

## ✨ Benefits of This Structure

### 1. **Maintainability**

- Each component has a single responsibility
- Easy to locate and modify specific sections
- Clear separation of concerns

### 2. **Reusability**

- Components can be reused in other pages
- Composables can be shared across components
- Consistent styling and behavior

### 3. **Scalability**

- Easy to add new sections or components
- Simple to extend functionality
- Clean imports and dependencies

### 4. **Developer Experience**

- Clean, readable code
- TypeScript support throughout
- Consistent naming conventions

### 5. **Performance**

- Components are lazy-loaded when needed
- Smaller bundle sizes per component
- Better tree-shaking

## 🚀 Usage

The main `index.vue` file is now extremely clean:

```vue
<template>
	<div class="min-h-screen bg-gray-50">
		<PortfolioNavigation />
		<HeroSection />
		<AboutSection />
		<ProjectsSection />
		<ExperienceSection />
		<ContactSection />
		<PortfolioFooter />
	</div>
</template>
```

## 🔄 Adding New Content

### To add a new project:

1. Update `usePortfolioData.ts` in the `projects` array
2. The `ProjectCard` component will automatically render it

### To add a new skill:

1. Update `usePortfolioData.ts` in the appropriate skills array
2. The `AboutSection` will automatically display it

### To add a new experience:

1. Update `usePortfolioData.ts` in the `experience` array
2. The `ExperienceItem` component will automatically render it

## 🎨 Customization

Each component can be easily customized:

- **Styling**: Modify Tailwind classes in individual components
- **Layout**: Adjust grid layouts and spacing
- **Content**: Update text and data in composables
- **Functionality**: Add new features to specific components

This modular structure makes the portfolio maintainable, scalable, and easy to work with!
