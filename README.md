> [!NOTE]
> This is a project progress for Web Development (FrontEnd) Course

---

# Neva Trans Company Web Application

This repository contains the source code for the **Neva Trans Company** website, which provides information on transportation services, pricing, FAQ, and a contact management system. The project includes HTML pages and JavaScript scripts for interactivity, a login-protected area for viewing contacts, and theme management.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Contributors](#contributors)

## Project Overview
The Neva Trans Company website serves as an informational portal for logistics services in Kazakhstan, offering insights into company operations, pricing, FAQ, and contact management. Users can request quotes, contact the company, and view other services. Admin features include viewing and managing contacts.

## Features
1. **About Neva Trans**: Information on services and company vision.
2. **Pricing**: Detailed cost breakdown for services based on cargo type and distance.
3. **FAQ**: Frequently asked questions and accordion-style answers.
4. **Contact Management**: A form for submitting inquiries, saved locally.
5. **Login System**: A restricted area to view submitted contacts with sorting options.
6. **Theme Toggle**: Switch between light and dark themes.
7. **Table Sorting**: Admins can sort contacts by name, phone, email, and preferred time.
8. **Accordion FAQ**: Interactive, collapsible FAQ for simplified user experience.
9. **World Clock**: Displays local time and times in China, the UK, and the USA.
10. **Form Validation**: Validates required fields and email format in the contact form.

## File Structure
- **HTML Files**
  - `index.html`: Introduction and service overview.
  - `pricing.html`: Service pricing and quote request form.
  - `FAQ.html`: Frequently asked questions section.
  - `contact.html`: Contact information and login-protected contacts table.

- **JavaScript Files**
  - `inputCleaner.js`: Clears input fields in the contact form.
  - `popup_script.js`: Manages login popup display.
  - `tableSort.js`: Sorts contact table by different fields.
  - `themeChange.js`: Toggles light and dark themes, saving user preference.
  - `auth_popup.js`: Manages authentication and contact display upon login.
  - `dataParser.js`: Saves contact form submissions locally and alerts users on success.
  - `formValidation.js`: Validates form fields, ensuring required fields and proper email format.
  - `accordeon_script.js`: Toggles FAQ accordion display for a smooth UX.
  - `clock.js`: Updates and displays the current time in multiple time zones.

- **Media and Assets**
  - `style.css`: Main stylesheet for the website.
  - `media/aitu-logo.png`, `media/aitu-logo-dark.png`: Logos for light and dark themes.

## Technologies Used
- **HTML5** and **CSS** for structure and styling.
- **JavaScript** for interactive functionality:
  - **LocalStorage**: Stores contacts and theme settings.
  - **DOM Manipulation**: Handles form submissions, popups, sorting, validation, and more.

## Usage
1. **Launching the Project**
   - Open any HTML file in a browser to explore the website features.

2. **Website Interaction**
   - **Contact Form**: Accessible on the `pricing.html` page; users can submit inquiries, which are stored locally.
   - **Login to View Contacts**: The login popup on the `contact.html` page is accessed via "Login to View Contacts." Login with `admin` as both username and password.
   - **Theme Toggle**: Available on every page.
   - **Sorting Contacts**: Admins can sort contacts by name, phone, email, or preferred time.
   - **FAQ Accordion**: Interactive accordion in the `FAQ.html` page.
   - **Time Display**: The `footer` in each page displays the local time and the time in China, the UK, and the USA.

## Contributors
- **Medeu Ametay**
- **Vladislav Goncharov**

---

> [!NOTE]
> This project stores data on the user’s local browser via LocalStorage, with no backend or server integration.
