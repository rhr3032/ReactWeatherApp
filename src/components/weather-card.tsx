import React from 'react';
import { Card, CardBody, CardHeader } from '@heroui/react';
import { Icon } from '@iconify/react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{weather.location}</p>
          <p className="text-small text-default-500">Current Weather</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Icon icon={`lucide:${weather.icon}`} className="w-16 h-16 text-primary-500" />
            <div className="text-4xl font-semibold">{weather.temperature}°C</div>
          </div>
          <p className="text-xl capitalize">{weather.description}</p>
          <div className="flex gap-8 text-default-500">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:droplets" />
              <span>{weather.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="lucide:wind" />
              <span>{weather.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
