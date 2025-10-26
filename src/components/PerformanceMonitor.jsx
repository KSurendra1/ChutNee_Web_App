import React, { useEffect } from 'react';

function PerformanceMonitor() {
  useEffect(() => {
    // Observer for Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime, 'ms');
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Observer for First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime, 'ms');
      });
    }).observe({ entryTypes: ['first-input'] });

    // Observer for Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      let cumulativeScore = 0;
      for (const entry of entryList.getEntries()) {
        cumulativeScore += entry.value;
      }
      console.log('CLS:', cumulativeScore);
    }).observe({ entryTypes: ['layout-shift'] });

    // First Paint and First Contentful Paint
    const paint = performance.getEntriesByType('paint');
    paint.forEach(entry => {
      console.log(entry.name + ':', entry.startTime, 'ms');
    });
  }, []);

  return null;
}

export default PerformanceMonitor;