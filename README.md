# Multi-Step Form App

This project is a multi-step form developed as a frontend coding challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).

## Introduction

The project involves building a multi-step form that resembles the provided design as closely as possible. The app allows users to fill out a series of form steps, navigate back and forth between them, view a summary of their entries on the last step, and confirm their selections. The app includes form validation and presents error messages for incomplete fields, incorrectly formatted email addresses, and steps submitted without a selection.

This project was built using [Next.js](https://nextjs.org/) for the frontend framework, [Tailwind CSS](https://tailwindcss.com/) for the styling, and the state management was handled using React's Context API and useReducer Hook.

## Features

- Users can complete each step of the sequence
- Users can go back to a previous step to update their selections
- Users can see a summary of their selections on the final step and confirm their order
- Responsive design that adapts to the user's device screen size
- Interactive elements include hover and focus states
- Form validation error messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

## File Structure

The project has the following folder structure:

```
.
├── next.config.js
├── package.json
├── tailwind.config.js
├── yarn-error.log
├── next-env.d.ts
├── package-lock.json
├── postcss.config.js
├── tsconfig.json
├── yarn.lock
├── app
│   └── globals.css
├── pages
│   ├── _app.tsx
│   └── index.tsx
├── public
│   ├── assets
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── components
│   ├── constants.tsx
│   ├── contexts
│   ├── hooks
│   └── types.ts
└── styles
    ├── fonts.css
    └── globals.css

```

The contexts folder contains the main logic for the form wizard using the context API of React.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

```

Secondly, to run the tests:

```bash
npm run test
# or
yarn test

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can edit the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

## Feedback

Any feedback is appreciated. If you have any, feel free to email hi[at]frontendmentor[dot]io.

## License

MIT

## Acknowledgments

Thanks to Frontend Mentor for providing this frontend coding challenge.
