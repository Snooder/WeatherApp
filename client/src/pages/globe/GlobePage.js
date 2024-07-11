import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const GlobePicker = () => {
    const globeEl = useRef();
    const [gData, setGData] = useState([]);

    useEffect(() => {
        const N = 300;
        const data = [...Array(N).keys()].map(() => ({
            lat: (Math.random() - 0.5) * 160,
            lng: (Math.random() - 0.5) * 360,
            weight: Math.random()
        }));
        setGData(data); // Set the generated data to the state
    }, []);

    return (
        <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            heatmapData={gData} // Pass the state data to the Globe component
            heatmapPointLat="lat"
            heatmapPointLng="lng"
            heatmapPointWeight="weight"
            heatmapTopAltitude={0.7}
            heatmapsTransitionDuration={3000}
            enablePointerInteraction={false}
        />
    );
};

export default GlobePicker;
