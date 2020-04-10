import React, { createContext, useEffect, useState } from "react";
import WebMidi from "webmidi";
// import uniqid from "uniqid";

export const DeviceContext = createContext(null);

const DeviceContextProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);

  const addDevice = (device) => {
    console.log("addDevice", { devices, device });
    setDevices([...devices, device]);
    console.log({ devices });
  };

  const deleteDevice = (id) => {
    setDevices(devices.filter((device) => device.id !== id));
  };

  useEffect(() => {
    console.log("useEffect", { devices });
    WebMidi.enable((err) => {
      if (err) {
        console.log("WebMidi could not be enabled");
        console.error(err);
      } else {
        console.log("WebMidi enabled!");
        const { inputs, outputs } = WebMidi;
        console.log({ inputs, outputs });
        for (const device of [...inputs, ...outputs]) {
          // addDevice(device);
          setDevices([...devices, device]);
          console.log({ devices });
        }
      }
    });
  }, [devices]); // <- this empty array means this effect will only run once

  return (
    <DeviceContext.Provider value={{ devices, addDevice, deleteDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
