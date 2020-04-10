import React, { useContext } from "react";
import { DeviceContext } from "../contexts/DeviceContext";
import keyboard from "../assets/keyboard.png";

const DeviceList = () => {
  const { devices, deleteDevice } = useContext(DeviceContext);

  return (
    <div className="section section-devices">
      <div className="container">
        <h6>Devices</h6>
        <ul>
          {devices.map((device) => (
            <li key={device.id}>
              <div className="card device">
                <div className="device-image">
                  <img src={keyboard} alt="MIDI Keyboard" />
                </div>
                <div className="device-details">
                  <div className="device-make">{device.make}</div>
                  <div className="device-model">{device.model}</div>
                  <div className="device-description">{device.description}</div>
                  <div
                    onClick={() => deleteDevice(device.id)}
                    className="device-delete"
                  >
                    <i className="material-icons">delete</i>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeviceList;
