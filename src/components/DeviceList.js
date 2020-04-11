import React, { useContext } from "react";
import { DeviceContext } from "../contexts/DeviceContext";
import DeviceListItem from "./DeviceListItem";

const DeviceList = () => {
  const { devices } = useContext(DeviceContext);

  return (
    <div className="devices">
      <div className="section section-input-devices">
        <div className="container">
          <h6>Input Devices</h6>
          <ul>
            {devices.inputs.map((device) => (
              <DeviceListItem device={device} key={device.id} />
            ))}
          </ul>
        </div>
      </div>
      <div className="section section-output-devices">
        <div className="container">
          <h6>Output Devices</h6>
          <ul>
            {devices.outputs.map((device) => (
              <DeviceListItem device={device} key={device.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeviceList;
