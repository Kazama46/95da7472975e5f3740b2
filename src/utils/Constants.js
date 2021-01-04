const Constants = {
  URLS: {
    asteroid_api: {
      BASE_URL: 'https://api.nasa.gov/neo/rest/v1/neo',
      API_KEY: 'gHr13HtDLZcnOvrFbsPQOCwHMehqPclDAM8wDt5Z'
    },
    random_api: {
      BASE_URL: ' https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY',
    },
  },
  NAVIGATION: {
    routes: {
      Screens: {
        HOME: 'Home',
        ASTEROID: 'Asteroid',
      },
      Tabs: {
        HOME_TAB: 'Home',
      },
    },
    headers: {
      Tabs: {
        HOME_TAB: 'HOME',
      },
    },
  },
};

export default Constants;
