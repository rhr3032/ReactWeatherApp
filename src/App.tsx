import React from 'react';
import { Input, Button, Spinner } from '@heroui/react';
import { Icon } from '@iconify/react';
import { WeatherCard } from './components/weather-card';
import { ForecastCard } from './components/forecast-card';
import type { WeatherData, ForecastData } from './types/weather';

export default function App() {
  const [city, setCity] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [weather, setWeather] = React.useState<WeatherData | null>(null);
  const [forecast, setForecast] = React.useState<ForecastData[]>([]);

  // Simulated weather data fetch
  const fetchWeather = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setWeather({
        location: city,
        temperature: 22,
        description: 'partly cloudy',
        humidity: 65,
        windSpeed: 12,
        icon: 'cloud',
      });
      setForecast([
        { date: 'Mon', temperature: 23, description: 'Sunny', icon: 'sun' },
        { date: 'Tue', temperature: 21, description: 'Cloudy', icon: 'cloud' },
        { date: 'Wed', temperature: 20, description: 'Rain', icon: 'cloud-rain' },
        { date: 'Thu', temperature: 22, description: 'Sunny', icon: 'sun' },
        { date: 'Fri', temperature: 24, description: 'Sunny', icon: 'sun' },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background p-8 flex flex-col items-center gap-8">
      <div className="w-full max-w-md flex gap-2">
        <Input
          placeholder="Enter city name"
          value={city}
          onValueChange={setCity}
          startContent={<Icon icon="lucide:search" className="text-default-400" />}
        />
        <Button
          color="primary"
          isLoading={loading}
          onPress={fetchWeather}
          isDisabled={!city}
        >
          Search
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : (
        weather && (
          <>
            <WeatherCard weather={weather} />
            <ForecastCard forecast={forecast} />
          </>
        )
      )}
    </main>
  );
}
