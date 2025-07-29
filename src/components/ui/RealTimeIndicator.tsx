import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock } from 'lucide-react';

interface RealTimeIndicatorProps {
  lastUpdate: Date;
  isUpdating: boolean;
}

export function RealTimeIndicator({ lastUpdate, isUpdating }: RealTimeIndicatorProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="flex items-center space-x-3 text-sm">
      <div className="flex items-center space-x-2">
        <motion.div
          animate={isUpdating ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5, repeat: isUpdating ? Infinity : 0 }}
          className={`w-2 h-2 rounded-full ${isUpdating ? 'bg-green-500' : 'bg-gray-400'}`}
        />
        <span className={`font-medium ${isUpdating ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
          {isUpdating ? 'Updating...' : 'Live'}
        </span>
      </div>
      
      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
        <Clock className="w-3 h-3" />
        <span>Last update: {formatTime(lastUpdate)}</span>
      </div>
      
      <motion.div
        animate={{ rotate: isUpdating ? 360 : 0 }}
        transition={{ duration: 1, repeat: isUpdating ? Infinity : 0, ease: "linear" }}
      >
        <Activity className={`w-4 h-4 ${isUpdating ? 'text-green-500' : 'text-gray-400'}`} />
      </motion.div>
    </div>
  );
}