# Frontend Mentor - Audiophile-ecommerce website solution
This represents a resolution for the [Audiophile e-commerce website challenge provided by Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). The challenges presented by Frontend Mentor serve as a valuable means for enhancing your coding abilities by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal app layout based on their device's screen size :heavy_check_mark:
- View hover states for all interactive elements on the page :heavy_check_mark:
- Add or remove products from the shopping cart :heavy_check_mark:
- Modify product quantities within the cart :heavy_check_mark:
- Complete all required fields during the checkout process :heavy_check_mark:
- View accurate checkout totals based on the products within the cart :heavy_check_mark:
  - Ensure that an additional $50 is added for shipping to all orders :heavy_check_mark:
  - Calculate VAT as 20% of the product total, excluding shipping costs :heavy_check_mark:
- See an order confirmation modal displaying an order summary after successfully completing the checkout process :heavy_check_mark:

### Screenshot

![](./screenshot.png)

### Links

[Live Site URL]()

### Setup

To run this project locally:

```
npm install && npm run dev
```

## My process

### Built with

- React.js
- SASS/SCSS
- JavaScript
- HTML
- CSS
- Mobile-First workflow

### What I learned

#### React

I learned how to create small and reusable components in React. By breaking down the user interface into smaller pieces, I was able to easily manage and compose these components to build the complete project. This approach not only improved the modularity and maintainability of the code but also enhanced the overall user experience of the application.

#### SASS and BEM Methodology

I utilized SCSS (Sass) to apply the knowledge I learned and enhance the styling capabilities of my project. SCSS is a powerful CSS preprocessor that provides additional features and flexibility, such as variables, nesting, mixins, and more. With SCSS, I was able to write cleaner and more efficient stylesheets, reducing redundancy and improving code maintainability.

In conjunction with SCSS, I utilized the Block Element Modifier (BEM) methodology to create meaningful and structured class names for my CSS styles. BEM allowed me to achieve a consistent naming convention, making it easier to understand the purpose and scope of each CSS class. By following BEM, I could create reusable styles and avoid style collisions, resulting in more maintainable and scalable CSS code.

The combination of SCSS and BEM methodology proved to be a powerful duo, enabling me to write modular, maintainable, and efficient styles for my React components and the overall application.

#### 7-1 Pattern for Structuring SCSS Files

To organize my SCSS codebase effectively, I followed the 7-1 pattern. This pattern involves having seven different folders for partial Sass files and one main Sass file to import and compile these files into a single CSS stylesheet. The folder structure includes:

- base/: Contains global styles, such as resets, typography, and general styles.
- components/: Stores styles specific to individual components.
- layout/: Includes styles related to the overall layout structure.
- pages/: Contains styles specific to individual pages or views.
- themes/: Holds theme-specific styles.
- abstracts/: Includes abstract Sass code, such as variables, mixins, functions, and placeholders.
- vendors/: Stores third-party or external stylesheets.

This structure allowed me to keep my code organized, modular, and easily maintainable, making it simpler to collaborate with other developers and update the project in the future.
