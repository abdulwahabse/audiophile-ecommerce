# Frontend Mentor - Audiophile-ecommerce website solution
This represents a solution for the [Audiophile e-commerce website challenge provided by Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). The challenges presented by Frontend Mentor serve as a valuable means for enhancing your coding abilities by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Setup](#setup)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Further Work and Improvements](#further-work-and-improvements)
- [Author](#author)

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

[Live Site URL](https://fastidious-conkies-e9daf4.netlify.app)

### Setup

To run this project locally:

```
npm install && npm run dev
```

## My process

### Built with

- React.js
- Sass/SCSS
- JavaScript
- HTML
- CSS
- Mobile-First workflow

### What I learned

#### React

Throughout the development of this project, I not only learned how to create modular React components but also how to effectively manage the routing of different pages within a Single Page Application (SPA). To accomplish this, I made use of React Router, a popular routing library for React.

React Router allowed me to define and configure routes for different pages or views in my application. By mapping URLs to specific components, I was able to create a seamless navigation experience for users, ensuring that the appropriate content is rendered based on the current URL.

By incorporating React Router into my project, I gained valuable knowledge in managing routing in a React-based SPA, enhancing the overall user experience and making the application feel more like a traditional multi-page website.

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

### Further Work and Improvements

While completing this project, I identified some areas for further work and potential improvements that I would like to address in the future. These include:

#### Enhanced Component Modularity

If time permits, I would further divide and refine the React components to enhance their modularity and reusability. By breaking down complex components into smaller, focused ones, I can improve code maintainability and reusability.

#### Form Input Validation

Currently, the form in the application includes required inputs, but there is no extensive validation implemented. To improve the user experience, I would focus on implementing validation for each input, ensuring that the entered values meet specific criteria.

#### Error Handling and Feedback

Improving error handling and feedback mechanisms is crucial. Clear error messages and visual cues, such as highlighting erroneous fields or displaying inline validation messages, would help users identify and correct errors more effectively.

#### Performance Optimization

As the project grows, optimizing performance becomes important. Techniques such as code splitting, lazy loading, and optimizing rendering can ensure smooth and responsive user interactions.

#### Accessibility Enhancements

Making the application more accessible is a priority. Adhering to accessibility best practices, such as providing keyboard navigation, descriptive alt text for images, and semantic markup, will ensure a better user experience for all users.

By addressing these areas of improvement, I aim to enhance the functionality, usability, and maintainability of the project, providing a better experience for users and facilitating future development iterations.

## Author

- Abdul Wahab - [@abdulwahabse](https://github.com/abdulwahabse)
