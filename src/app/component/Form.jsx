import React from 'react';

const Form = ({ formData, onChange }) => {
	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		onChange({ [name]: type === 'checkbox' ? checked : value });
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
			<h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
			<form className="space-y-4">
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={formData.name || ''}
					onChange={handleInputChange}
					className="w-full p-2 border rounded"
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email || ''}
					onChange={handleInputChange}
					className="w-full p-2 border rounded"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password || ''}
					onChange={handleInputChange}
					className="w-full p-2 border rounded"
				/>
				<div className="flex items-center">
					<input 
						type="checkbox" 
						name="agreeTerms"
						checked={formData.agreeTerms || false}
						onChange={handleInputChange}
						className="mr-2" 
					/>
					<label className="text-sm">
						I agree to the Terms and Privacy Policy.
					</label>
				</div>
				<button type="button" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Form;
