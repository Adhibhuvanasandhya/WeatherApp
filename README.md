
# Weather App

This is a weather app built using **React.js** and **TailwindCSS**. It allows users to search for a city and view the current weather, including temperature, humidity, wind speed, and sunrise/sunset times. It also displays hourly weather updates for the next 24 hours.

## Features
- Current weather data: Temperature, humidity, wind speed, weather description.
- Hourly updates for weather.
- Dynamic time display and background images based on weather conditions.
- Sunrise and sunset times for the selected city.
- Search for any city worldwide.

## Technologies Used
- **React.js** for building the user interface.
- **TailwindCSS** for styling.
- **Axios** for fetching weather data from the OpenWeatherMap API.
- **date-fns** for date formatting.
- **OpenWeatherMap API** for weather data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Adhibhuvanasandhya/weatherApp.git
   ```

2. Navigate to the project folder:

   ```bash
   cd weatherapp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app:

   ```bash
   npm start
   ```

5. Open the browser and go to `http://localhost:3000` to see the app in action.



## How it works

The app uses the OpenWeatherMap API to fetch weather data. The user can search for a city by typing in the search bar, and the app will display the current weather, hourly updates, and sunrise/sunset times for the city.

- **Current Weather**: Shows the temperature, humidity, wind speed, and weather description.
- **Hourly Weather**: Displays weather updates at specific times throughout the day (6 AM, 9 AM, 12 PM, 3 PM, 6 PM, and 9 PM).
- **Background**: The background changes dynamically depending on the weather condition (e.g., clear skies, rain, etc.).
- **Real-time Updates**: The current time is updated every second and displayed in the app.

## Contributing

Feel free to fork the repository, make changes, and open pull requests if you have any improvements or fixes!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```


