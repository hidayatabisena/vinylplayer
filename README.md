# Vinyl Player App

![Kafkaway picture](https://res.cloudinary.com/moyadev/image/upload/v1729002425/sena/kafkaway_h4lkmf.png)

## Overview

The Vinyl Player App is a web application that simulates a vinyl record player experience. It allows users to play audio tracks while displaying animated vinyl and cover art. The app is built using Next.js, React, and Howler.js for audio management.

## Features

- Play and pause audio tracks by clicking on the vinyl record.
- Animated vinyl rotation while the audio is playing.
- Display of album cover art with a slight overlap on the vinyl.
- Responsive design with a modern UI.
- Uses Google Fonts for typography.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **Howler.js**: A JavaScript audio library for managing audio playback.
- **Next/Image**: Optimized image component for better performance.
- **CSS**: For styling and animations.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hidayatabisena/vinyl-player-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vinyl-player-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Add your audio file (`if.mp3`) and SVG assets (`vinyl.svg`, `cover.svg`) to the `public` directory.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Click on the vinyl record to play or pause the audio.
- The vinyl will rotate while the audio is playing, and the album cover will be displayed slightly overlapping the vinyl.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of [Next.js](https://nextjs.org/) and [Howler.js](https://howlerjs.com/) for their amazing libraries.
- Special thanks to the designers of the vinyl and cover SVG assets.
