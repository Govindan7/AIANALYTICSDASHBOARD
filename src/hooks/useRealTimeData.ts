import { useState, useEffect, useCallback } from 'react';
import { MetricCard, ChartData, TableData } from '../types/dashboard';

// Simulate real-time data updates
export function useRealTimeData() {
  const [metrics, setMetrics] = useState<MetricCard[]>([
    {
      id: '1',
      title: 'Total Revenue',
      value: '$124,592',
      change: 12.5,
      changeType: 'increase',
      icon: 'DollarSign',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      title: 'Active Users',
      value: '8,245',
      change: 8.2,
      changeType: 'increase',
      icon: 'Users',
      color: 'bg-purple-500'
    },
    {
      id: '3',
      title: 'Conversions',
      value: '1,429',
      change: -2.1,
      changeType: 'decrease',
      icon: 'TrendingUp',
      color: 'bg-green-500'
    },
    {
      id: '4',
      title: 'Growth Rate',
      value: '23.4%',
      change: 5.7,
      changeType: 'increase',
      icon: 'BarChart3',
      color: 'bg-orange-500'
    }
  ]);

  const [chartData, setChartData] = useState<ChartData[]>([
    { name: 'Jan', revenue: 12000, users: 2400, conversions: 240 },
    { name: 'Feb', revenue: 19000, users: 1398, conversions: 198 },
    { name: 'Mar', revenue: 15000, users: 9800, conversions: 350 },
    { name: 'Apr', revenue: 27000, users: 3908, conversions: 420 },
    { name: 'May', revenue: 18000, users: 4800, conversions: 380 },
    { name: 'Jun', revenue: 23000, users: 3800, conversions: 450 },
    { name: 'Jul', revenue: 34000, users: 4300, conversions: 520 }
  ]);

  const [campaignData, setCampaignData] = useState<TableData[]>([
    {
      id: '1',
      campaign: 'Summer Sale 2024',
      revenue: 45230,
      users: 12540,
      conversions: 892,
      ctr: 3.2,
      status: 'active',
      date: '2024-01-15'
    },
    {
      id: '2',
      campaign: 'Black Friday Special',
      revenue: 78945,
      users: 18200,
      conversions: 1456,
      ctr: 4.8,
      status: 'completed',
      date: '2024-01-10'
    },
    {
      id: '3',
      campaign: 'New Year Boost',
      revenue: 23456,
      users: 8900,
      conversions: 567,
      ctr: 2.9,
      status: 'active',
      date: '2024-01-12'
    },
    {
      id: '4',
      campaign: 'Valentine\'s Day',
      revenue: 15678,
      users: 5600,
      conversions: 345,
      ctr: 2.1,
      status: 'paused',
      date: '2024-01-08'
    },
    {
      id: '5',
      campaign: 'Spring Collection',
      revenue: 34567,
      users: 11200,
      conversions: 789,
      ctr: 3.7,
      status: 'active',
      date: '2024-01-14'
    }
  ]);

  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isUpdating, setIsUpdating] = useState(false);

  const generateRandomChange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const updateMetrics = useCallback(() => {
    setIsUpdating(true);
    
    setTimeout(() => {
      setMetrics(prev => prev.map(metric => {
        const changeAmount = generateRandomChange(-5, 15);
        const isPositive = changeAmount > 0;
        
        let newValue: string | number = metric.value;
        
        if (typeof metric.value === 'string' && metric.value.includes('$')) {
          const currentValue = parseInt(metric.value.replace(/[$,]/g, ''));
          const newAmount = Math.max(0, currentValue + Math.floor(generateRandomChange(-2000, 5000)));
          newValue = `$${newAmount.toLocaleString()}`;
        } else if (typeof metric.value === 'string' && metric.value.includes('%')) {
          const currentValue = parseFloat(metric.value.replace('%', ''));
          const newAmount = Math.max(0, currentValue + generateRandomChange(-2, 5));
          newValue = `${newAmount.toFixed(1)}%`;
        } else if (typeof metric.value === 'string') {
          const currentValue = parseInt(metric.value.replace(/,/g, ''));
          const newAmount = Math.max(0, currentValue + Math.floor(generateRandomChange(-100, 500)));
          newValue = newAmount.toLocaleString();
        }

        return {
          ...metric,
          value: newValue,
          change: Math.round(changeAmount * 10) / 10,
          changeType: isPositive ? 'increase' : 'decrease'
        };
      }));

      setLastUpdate(new Date());
      setIsUpdating(false);
    }, 1000);
  }, []);

  const updateChartData = useCallback(() => {
    setChartData(prev => prev.map(item => ({
      ...item,
      revenue: Math.max(5000, item.revenue + Math.floor(generateRandomChange(-3000, 8000))),
      users: Math.max(500, item.users + Math.floor(generateRandomChange(-500, 2000))),
      conversions: Math.max(50, item.conversions + Math.floor(generateRandomChange(-50, 200)))
    })));
  }, []);

  const updateCampaignData = useCallback(() => {
    setCampaignData(prev => prev.map(campaign => ({
      ...campaign,
      revenue: Math.max(1000, campaign.revenue + Math.floor(generateRandomChange(-2000, 5000))),
      users: Math.max(100, campaign.users + Math.floor(generateRandomChange(-200, 1000))),
      conversions: Math.max(10, campaign.conversions + Math.floor(generateRandomChange(-20, 100))),
      ctr: Math.max(0.1, Math.round((campaign.ctr + generateRandomChange(-0.5, 1.0)) * 10) / 10)
    })));
  }, []);

  // Real-time updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      updateMetrics();
      updateChartData();
      updateCampaignData();
    }, 5000);

    return () => clearInterval(interval);
  }, [updateMetrics, updateChartData, updateCampaignData]);

  return {
    metrics,
    chartData,
    campaignData,
    lastUpdate,
    isUpdating,
    updateMetrics,
    updateChartData,
    updateCampaignData
  };
}