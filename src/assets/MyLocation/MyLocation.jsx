import React, { useEffect } from 'react'
import { useState } from 'react'
import useGeolocation from './hook/useLocation'

const MyLocation = () => {
    const {
        isLoading,
        position: { lat, long },
        error,
        getPosition
      } = useGeolocation();
    
      const [countClicks, setCountClicks] = useState(0);
    
      function handleClick() {
        setCountClicks((count) => count + 1);
        getPosition();
      }
    
      return (
        <div>
          <button onClick={handleClick} disabled={isLoading}>
            Get my position
          </button>
    
          {isLoading && <p>Loading position...</p>}
          {error && <p>{error}</p>}
          {!isLoading && !error && lat && long && (
            <p>
              Your GPS position:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.openstreetmap.org/#map=16/${lat}/${long}`}
              >
                {lat}, {long}
              </a>
            </p>
          )}
    
          <p>You requested position {countClicks} times</p>
        </div>
      );
}

export default MyLocation