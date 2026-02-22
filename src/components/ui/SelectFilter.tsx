import React from 'react';

const SelectFilter = ({name, options, value, onChange}:SelectFilterProps) => {
    return (
        <div className="relative w-[256px]">
            <label className="block text-xs font-bold uppercase text-neutral-04 mb-2">
                {name}
            </label>

            <div className="relative">
                <select defaultValue={name}
                        value={value}
                        onChange={event => onChange(event.target.value)}
                    className="w-full appearance-none bg-transparent border border-neutral-04 rounded-md px-4 py-2.5 pr-10 text-sm font-semibold text-neutral-07 focus:border-neutral-07 outline-none cursor-pointer transition-colors capitalize">
                    <option disabled>{name}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option} className="bg-white text-neutral-07">
                            {option}
                        </option>
                    ))}
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="#6C7275" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SelectFilter;