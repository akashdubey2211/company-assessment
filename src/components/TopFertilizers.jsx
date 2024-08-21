const TopFertilizers = ({ data, type }) => {
    const sortedData = [...data].sort((a, b) => 
      type === 'most' ? b.requirement - a.requirement : a.availability - b.availability
    );
    const top5 = sortedData.slice(0, 5);
  
    return (
      <ul>
        {top5.map((fertilizer, index) => (
          <li key={index}>{fertilizer.state}: {type === 'most' ? fertilizer.requirement : fertilizer.availability}</li>
        ))}
      </ul>
    );
  };
  
  export default TopFertilizers;
  