# Fabric Clothing

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Github.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Nidhish-D-Nayak/fabric-clothing/tree/main)


## About the Project

Welcome to Fabric Clothing! This application is built using React, Redux, Redux-Thunk, Redux-Toolkit, Firebase and Styled Components. It aims to provide users with an intuitive and seamless shopping experience for clothing items made from premium fabrics.

![Fabric Clothing](https://github.com/nidhish-nayak/fabric-clothing/assets/76598208/af396893-4e33-4565-a2b1-4f86b1e0cc83)

<p align="center">
  
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/nidhish-nayak/fabric-clothing" />
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/nidhish-nayak/fabric-clothing" />
  <img alt="" src="https://img.shields.io/github/repo-size/nidhish-nayak/fabric-clothing" />
  <img alt="GitHub Issues" src="https://img.shields.io/github/issues/nidhish-nayak/fabric-clothing" />
  <img alt="GitHub Closed Issues" src="https://img.shields.io/github/issues-closed/nidhish-nayak/fabric-clothing" />
  <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/nidhish-nayak/fabric-clothing" />
  <img alt="GitHub Closed Pull Requests" src="https://img.shields.io/github/issues-pr-closed/nidhish-nayak/fabric-clothing" />
  <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/nidhish-nayak/fabric-clothing" />
  <img alt="GitHub Commit Activity (Year)" src="https://img.shields.io/github/commit-activity/y/nidhish-nayak/fabric-clothing" />
  <img alt="Github License" src="https://img.shields.io/github/license/nidhish-nayak/fabric-clothing" />

</p>

## Features ✨

- **User Authentication**: Users can create accounts, log in, and securely access their personalized profiles.
- **Product Catalog**: Browse through a wide range of clothing items, organized into categories for easy navigation.
- **Product Details**: View detailed information about each product, including images and descriptions.
- **Shopping Cart**: Add desired items to the cart, adjust quantities, and proceed to checkout.
- **Checkout Menu**: Users can review and manage their orders and make any changes in the checkout menu.
- **Order History**: Users can view their order history to track previous purchases.
- **Razorpay Payment Gateway Integration**: Seamlessly integrate Razorpay as the payment gateway for secure and convenient transactions.
- **Responsive Design**: Enjoy a consistent and visually appealing experience across various devices.
- **User Experience**: You might notice initial load on opening new pages. This is intended for caching the page data for fast loads in the future.
- **Performance**: Better performance and accessibility.

![fabric-lighthouse](https://github.com/nidhish-nayak/fabric-clothing/assets/76598208/26718db1-1ef1-4bcc-865c-a1c39e643187)

## Installation 💻

To run the Fabric Clothing App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Nidhish-D-Nayak/fabric-clothing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fabric-clothing
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

4. Set up Firebase:

   - Create a Firebase project and obtain the necessary configuration credentials.
   - Copy the Firebase configuration object into the `src/utils/firebase/firebase.utils.js` file.
   - Enable the desired Firebase authentication methods (e.g., Email/Password, Google, etc.).

5. Start the development server:

   ```bash
   yarn start
   ```

6. Open your browser and visit `http://localhost:3000` to access the Fabric Clothing App.

## Folder Structure 📂

Here's an overview of the project's folder structure:

```
├── public/             # Public assets and HTML template
├── src/
│   ├── assets/         # Assets used in the application
│   ├── components/     # Reusable React components
│   ├── routes/         # Top-level application pages
│   ├── store/          # Redux store - redux actions, reducers, and store
|   ├── types/          # Custom and global types defined
│   └── utils/          # Utility functions and constants - Firebase & Reducer
└── ...
```

## Technologies Used 🔧

- React: JavaScript library for building user interfaces.
- Redux: State management tool for predictable state updates.
- Thunks: Middleware libraries for managing asynchronous actions in Redux.
- Redux Toolkit: A more opinionated state management tool for better developer experience.
- Styled Components: CSS-in-JS library for styling React components.
- Firebase: Backend-as-a-Service (BaaS) platform for authentication, database, and storage.
- Axios: Promise-based HTTP client for making API requests.
- Typescript: TypeScript checks a program for errors before execution, ensures better developer experience.

## How razorpay backend service works 🔌

- To get more insights on razorpay backend service you can refer to the repository which handles this service.
- Repository Link: https://github.com/nidhish-nayak/node-razorpay
- Please do not make multiple requests. Instead, you can clone the repo, create your own razorpay account to get KEY_ID and KEY_SECRET.
- You will be able to recreate this by running it on localhost:4000 using command `npm run dev`.
- When both fabric-clothing & node-razorpay are run on localhost, the payment should work seamlessly as I have configured the endpoints.
- If you need to make this work in production env, you can host node-razorpay on a free backend service and fabric-clothing on vercel/netlify. (Make sure to configure the endpoints & env variables on both services)

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=nidhish-nayak&repo=node-razorpay)](https://github.com/nidhish-nayak/node-razorpay)

## Contributing 🤝

We welcome contributions to the Fabric Clothing App project! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push the changes to your forked repository: `git push origin feature-name`.
5. Open a pull request to the main repository's `main` branch.

### Contributors

<a href="https://github.com/nidhish-nayak/fabric-clothing/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nidhish-nayak/fabric-clothing" />
</a>

## License 📝

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Contact 💬

<img src="https://myreadme.vercel.app/api/embed/nidhish-nayak?panels=userstatistics,toprepositories,toplanguages,commitgraph" alt="reimaginedreadme" />

If you have any questions, suggestions, or feedback, please don't hesitate to reach out. You can contact the project maintainer at [nidhibelthangady@gmail.com](mailto:nidhibelthangady@gmail.com).

Happy shopping with the Fabric Clothing App! 🛍️
