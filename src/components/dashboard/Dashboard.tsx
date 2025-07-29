import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { RevenueChart } from './RevenueChart';
import { ConversionsChart } from './ConversionsChart';
import { DeviceChart } from './DeviceChart';
import { CampaignTable } from './CampaignTable';
import { useRealTimeData } from '../../hooks/useRealTimeData';
import { RealTimeIndicator } from '../ui/RealTimeIndicator';
import { Button } from '../ui/Button';
import { CardSkeleton } from '../ui/LoadingSkeleton';

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const { 
    metrics, 
    chartData, 
    campaignData, 
    lastUpdate, 
    isUpdating,
    updateMetrics,
    updateChartData,
    updateCampaignData
  } = useRealTimeData();

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleManualRefresh = () => {
    updateMetrics();
    updateChartData();
    updateCampaignData();
  };
  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CardSkeleton />
          <CardSkeleton />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CardSkeleton />
          </div>
          <CardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your campaigns today.
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <RealTimeIndicator lastUpdate={lastUpdate} isUpdating={isUpdating} />
          <Button
            variant="ghost"
            size="sm"
            onClick={handleManualRefresh}
            disabled={isUpdating}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isUpdating ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.id} metric={metric} index={index} />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={chartData} />
        <ConversionsChart data={chartData} />
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CampaignTable data={campaignData} />
        </div>
        <DeviceChart />
      </div>
    </div>
  );
}