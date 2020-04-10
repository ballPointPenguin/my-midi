import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';

export const DeviceContext = createContext();

const DeviceContextProvider = ({ children }) => {
  const [devices, setDevices] = useState([
    {
      id: 1,
      make: 'Novation',
      model: 'LaunchControl',
      desciription: 'pads and knobs'
    },
    {
      id: 2,
      make: 'Korg',
      model: 'nanoKey2',
      description: '2-octave keyboard'
    }
  ]);

  const addDevice = device => {
    setDevices([...devices, { ...device, id: uniqid() }]);
  };

  const deleteDevice = id => {
    setDevices(devices.filter(device => device.id !== id));
  };

  return (
    <DeviceContext.Provider value={{ devices, addDevice, deleteDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;