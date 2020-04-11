import React from "react";
import keyboard from "../assets/keyboard.png";

const DeviceListItem = ({device}) => (
  <li key={`${device.type}-${device.id}`}>
    <div className="card device">
      <div className="device-image">
        <img src={keyboard} alt="MIDI Keyboard" />
      </div>
      <div className="device-details">
        <div className="device-name">{device.name}</div>
        <div className="device-manufacturer">
          {device.manufacturer}
        </div>
        <div className="device-id">{device.id}</div>
        <div className="device-details">
          {device.type} :: {device.connection} :: {device.state}
        </div>
      </div>
    </div>
  </li>
);

export default DeviceListItem;
