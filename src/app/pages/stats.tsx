import React, { useState } from 'react';
import StatsChart from '../components/stats/statschart';

const StatsPage = () => {
  const [goals, setGoals] = useState(4); // Example stat value for goals

  return (
    <div>
      <h1>Player Stats</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <StatsChart label="Goals" value={goals} />
        {/* Add more charts for assists, passes, etc., by passing different values */}
      </div>
    </div>
  );
};

export default StatsPage;
