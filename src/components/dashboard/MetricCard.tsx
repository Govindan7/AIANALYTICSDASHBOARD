import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, BarChart3 } from 'lucide-react';
import { MetricCard as MetricCardType } from '../../types/dashboard';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  BarChart3,
};

interface MetricCardProps {
  metric: MetricCardType;
  index: number;
}

export function MetricCard({ metric, index }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap] || BarChart3;
  const isPositive = metric.changeType === 'increase';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover className="p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {metric.title}
          </p>
          <div className={`p-2 rounded-lg ${metric.color}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {metric.value}
          </p>
          
          <div className="flex items-center space-x-1">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span 
              className={`text-sm font-medium ${
                isPositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {isPositive ? '+' : ''}{metric.change}%
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              vs last month
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}