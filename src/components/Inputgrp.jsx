export default function Inputgrp({ name, label, onUserInput }) {
    return (
      <div className="input-group">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type="number"
          onChange={(e) => onUserInput(name, e.target.value)}
        />
      </div>
    );
  }  