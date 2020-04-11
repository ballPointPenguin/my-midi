import React, { createContext, useEffect, useState } from "react";
import WebMidi from "webmidi";

export const DeviceContext = createContext(null);

const DeviceContextProvider = ({ children }) => {
  const [devices, setDevices] = useState({
    inputs: [],
    outputs: [],
  });

  useEffect(() => {
    console.log("useEffect");
    WebMidi.enable((err) => {
      if (err) {
        console.log("WebMidi could not be enabled");
        console.error(err);
      } else {
        console.log("WebMidi enabled!");
        const { inputs, outputs } = WebMidi;
        console.log({ inputs, outputs });

        setDevices({
          inputs,
          outputs,
        });
      }
    });
  }, []); // <- this empty array means this effect will only run once

  return (
    <DeviceContext.Provider value={{ devices }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
