import { MetricCard, ChartData, TableData } from '../types/dashboard';

export const metricsData: MetricCard[] = [
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
];

export const revenueChartData: ChartData[] = [
  { name: 'Jan', revenue: 12000, users: 2400, conversions: 240 },
  { name: 'Feb', revenue: 19000, users: 1398, conversions: 198 },
  { name: 'Mar', revenue: 15000, users: 9800, conversions: 350 },
  { name: 'Apr', revenue: 27000, users: 3908, conversions: 420 },
  { name: 'May', revenue: 18000, users: 4800, conversions: 380 },
  { name: 'Jun', revenue: 23000, users: 3800, conversions: 450 },
  { name: 'Jul', revenue: 34000, users: 4300, conversions: 520 }
];

export const deviceData: ChartData[] = [
  { name: 'Desktop', value: 45, color: '#3B82F6' },
  { name: 'Mobile', value: 35, color: '#8B5CF6' },
  { name: 'Tablet', value: 20, color: '#10B981' }
];

export const campaignData: TableData[] = [
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
];