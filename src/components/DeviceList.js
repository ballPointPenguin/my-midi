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
            <li key={`${device.type}::${device.id}`}>
              <div className="card device">
                <div className="device-image">
                  <img src={keyboard} alt="MIDI Keyboard" />
                </div>
                <div className="device-details">
                  <div className="device-type">{device.type}</div>
                  <div className="device-name">{device.name}</div>
                  <div className="device-manufacturer">
                    {device.manufacturer}
                  </div>
                  <div className="device-connection">{device.connection}</div>
                  <div className="device-id">{device.id}</div>
                  <div className="device-state">{device.state}</div>
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
