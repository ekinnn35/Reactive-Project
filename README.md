# Sport Center React Project

This project is a Sport Center website built using React. It features different sections that represent various aspects of the center, such as services, schedules, trainers, and more. Each section is implemented as a separate React component, and each section component contains at least three other components to maintain functionality and design.

## Features

- **Responsive Design**: The site is fully responsive and adjusts based on screen size.
- **Modular Components**: Each section of the website is a separate component, which in turn contains multiple smaller components.
- **Interactive UI**: The website features interactive components like forms, schedules, and service lists.
- **Functionality**: The project maintains its design and functionality through the React library, ensuring the user experience is smooth and intuitive.

## Components Overview

### Header
- **Header.js**: Displays the main navigation bar, including links to the home page, services, schedules, trainers, and contact sections.

### Footer
- **Footer.js**: Contains the footer section with additional links, copyright information, and social media buttons.

### Service Section
- **ServiceList.js**: Displays a list of available services at the sport center.
- **ServiceCard.js**: Shows individual services with brief details like name, description, and pricing.
- **ServiceDetails.js**: Provides detailed information about a specific service when clicked.

### Schedule Section
- **ScheduleList.js**: Displays the list of available time slots and activities.
- **DaySchedule.js**: Shows the schedule for a particular day or time.
- **ScheduleForm.js**: A form that allows users to book a time slot or ask for more information.

### Trainer Section
- **TrainerList.js**: Displays a list of trainers available at the sport center.
- **TrainerCard.js**: Shows individual trainers with their name, bio, and area of expertise.
- **TrainerDetails.js**: Provides more detailed information about a specific trainer when clicked.

### Contact Section
- **ContactForm.js**: A form where users can submit inquiries or contact the center.
- **AddressMap.js**: Displays a map showing the sport center's location.
- **ContactInfo.js**: Provides the contact details of the sport center, including phone number and email.
