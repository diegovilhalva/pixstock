# PixStock

PixStock is a web application that allows users to search for high-quality photos and videos using the Pexels API. Users can explore curated collections, view detailed information about media, and save favorites.

## Features

- 🔍 **Search for Photos & Videos**: Find high-quality media based on keywords.
- 📁 **Curated Collections**: Discover collections of beautiful images.
- ❤️ **Favorites System**: Save your favorite photos and videos for easy access.
- 🎨 **Dynamic UI**: Responsive design with smooth animations.

## Technologies Used

- **Vite**: Fast build and development setup.
- **Vanilla JavaScript**: Lightweight and efficient.
- **Pexels API**: Provides high-quality images and videos.
- **LocalStorage**: Used for saving favorite items.
- **CSS**: Styling and responsiveness.

## Installation & Setup

To run PixStock locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/diegovilhalva/pixstock.git
   cd pixstock
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file in the root directory** and add your Pexels API key:
   ```sh
   VITE_PEXELS_API_KEY=your_api_key_here
   VITE_PEXELS_API_URL=https://api.pexels.com
   ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```
5. **Build for production:**
   ```sh
   npm run build
   ```
6. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Deployment

PixStock is deployed on Vercel. To deploy your own version:

1. Push the repository to GitHub.
2. Connect the repository to [Vercel](https://vercel.com/).
3. Add the Pexels API key in the environment variables section.
4. Deploy the project!

## Live Demo

Check out the live version: [PixStock](https://pixstock-three.vercel.app)

## License

This project is licensed under the [MIT License](LICENSE).

