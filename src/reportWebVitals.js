import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

function reportWebVitals(metric) {
  console.log(metric);
}

// Set up event listeners for each web vital metric
onCLS(reportWebVitals);
onFCP(reportWebVitals);
onFID(reportWebVitals);
onLCP(reportWebVitals);
onTTFB(reportWebVitals);

export default reportWebVitals;
