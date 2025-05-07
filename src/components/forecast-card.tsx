import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { ForecastData } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastData[];
}

export const ForecastCard = ({ forecast }: ForecastCardProps) => {
  return (
    <Card className="w-full max-w-md">
      <CardBody>
        <div className="grid grid-cols-5 gap-4">
          {forecast.map((day) => (
            <div key={day.date} className="flex flex-col items-center gap-2">
              <p className="text-small text-default-500">{day.date}</p>
              <Icon icon={`lucide:${day.icon}`} className="w-8 h-8 text-primary-500" />
              <p className="text-sm font-semibold">{day.temperature}°C</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
