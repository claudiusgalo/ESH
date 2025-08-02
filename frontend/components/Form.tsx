import { ContactForm } from '@/interfaces/form';
import React from 'react';
import './footer.module.css';

export default function Form({
	handleSubmit,
	phoneNumber,
	handlePhoneNumberChange,
}: ContactForm) {
	const inputCss =
		'p-1 w-full text-black bg-transparent border-b-2 border-black text-[16px] placeholder:text-black placeholder:text-[12px] focus:outline-none';

	const areaCss =
		'p-1 w-[400px] h-[200px] text-black bg-transparent border-[1px] border-black text-[16px] placeholder:text-black placeholder:text-[12px] focus:outline-none';
	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col justify-center items-center gap-2 max-w-sm'>
			<input
				type='text'
				placeholder='Name'
				className={inputCss}
			/>
			<input
				type='tel'
				value={phoneNumber}
				onChange={handlePhoneNumberChange}
				placeholder='Phone number'
				className={inputCss}
			/>

			<input
				type='email'
				placeholder='Email Address'
				className={inputCss}
			/>
			<textarea
				className={areaCss}
				placeholder='Enter Message'
			/>
			<div className='flex flex-col justify-center items-center'>
				<button
					type='submit'
					className='text-white p-2 bg-orange-400 w-[100px]'>
					Submit
				</button>
			</div>
		</form>
	);
}
