import React from 'react';

export const Input = (props) => {
  const { className, type, label, placeholder, onChange, value, error } = props;
  return (
    <label className={className}>
      <span className="block text-sm font-medium text-slate-700">{ label }</span>
      <input
        className="peer px-3 py-2 border rounded hover:bg-slate-100 focused:border-slate-400"
        type={ type }
        placeholder={ placeholder }
        onChange={ onChange }
        value={ value }
      />
      <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
        { error }
      </p>
    </label>
  );
};