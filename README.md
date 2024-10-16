
# Orivoid

**Orivoid** is a modern React-based project leveraging `three.js` and `@react-three/fiber` for 3D graphics, with animations powered by `framer-motion` and `gsap`. Built with TypeScript, Vite, and leveraging powerful visualization and animation libraries, this project offers a dynamic and interactive user experience.

## Features

- **3D Rendering**: Create and manipulate 3D scenes with `three.js` and `@react-three/fiber`.
- **Smooth Animations**: Utilizes `framer-motion` and `gsap` for fluid animations and transitions.
- **Efficient Development**: Built with Vite for fast build times and HMR.
- **TypeScript Support**: Strongly-typed codebase for improved development experience and reliability.
- **Linting**: Ensures code quality and consistency with `eslint` and TypeScript support.

## Tech Stack

- **Frontend**: React, TypeScript
- **3D Rendering**: `three.js`, `@react-three/fiber`, `@react-three/drei`
- **Animation**: `framer-motion`, `gsap`
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support
- **Other Libraries**: `gltfjsx` for GLTF JSX component conversion, `react-image-gallery` for image galleries, `split-type` for text manipulation

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/orivoid.git
   ```

2. Navigate to the project directory:

   ```bash
   cd orivoid
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The app will be accessible at `http://localhost:3000`.

### Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist` directory, ready for deployment.

### Previewing Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Linting

To run ESLint and ensure code quality:

```bash
npm run lint
# or
yarn lint
```

## Dependencies

- **Core**: `react`, `react-dom`
- **3D**: `three`, `@react-three/fiber`, `@react-three/drei`
- **Animation**: `framer-motion`, `gsap`
- **Gallery**: `react-image-gallery`
- **Text**: `split-type`
- **SVG**: `vite-plugin-svgr`
- **Type Checking**: TypeScript, `@types/react`, `@types/react-dom`
- **Linting**: `eslint`, `@typescript-eslint`

## License

This project is private and not licensed for public distribution. For usage permissions, please contact the repository owner.
