import React, { useEffect, useState } from 'react'

function DateTime() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => {
            clearInterval(interval);
        };
    }, []);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDateTime = currentDateTime.toLocaleDateString(undefined, options);
     
  return (
    <div>
      <p className='text-center mt-4'>{formattedDateTime}</p>
    </div>
  )
}

export default DateTime