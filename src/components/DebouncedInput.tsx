import { useState, useEffect, InputHTMLAttributes } from 'react';
import { FaSearch } from 'react-icons/fa';

export function DebouncedInput({
	value: initialValue,
	onChange,
	debounce = 500,
	...props
}: {
	value: string | number;
	onChange: (value: string | number) => void;
	debounce?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value);
		}, debounce);

		return () => clearTimeout(timeout);
	}, [value]);

	return (
		<div className="relative border-gray-200 border rounded-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
				{...props}
				value={value}
				onChange={(e) => setValue(e.target.value)}
        className="block w-full pl-10 p-2.5 rounded-full"
			/>    
      </div>
	);
}
