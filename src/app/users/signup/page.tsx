'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import { SignupFormData } from './signupComp/SignupTypes';
import { Link } from 'lucide-react';


const SignupPage: React.FC = () => {
    const [formData, setFormData] = useState<SignupFormData>({ name: '', email: '', password: '', retypePassword: '' });
    const [errors, setErrors] = useState<SignupFormData>({ name: '', email: '', password: '', retypePassword: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [serverError, setServerError] = useState<string>('');

    const validateForm = (): boolean => {
        let isValid = true;
        let newErrors = { name: '', email: '', password: '', retypePassword: '' };

        if (!formData.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        }
        if (!formData.password || formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            isValid = false;
        }
        if (formData.password !== formData.retypePassword) {
            newErrors.retypePassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear specific error on input change
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setServerError('');

        try {
            const response = await fetch('http://localhost:5050/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to register');
            }

            console.log('Registration successful:', data);
            setFormData({ name: '', email: '', password: '', retypePassword: '' });  // Clear form on success
        } catch (error: any) {
            setServerError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    function handleClick() {
        event.preventDefault();
    }


    return (
        <>
            <Head>
                <title>Sign Up - Waste Management Services</title>
            </Head>
            <div className="flex min-h-screen bg-green-50 items-center justify-center">
                <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-900">Create an Account</h2>
                    {serverError && <p className="text-red-500 text-center">{serverError}</p>}
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">Full Name</label>
                                <input type="text" name="name" id="name" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email Address</label>
                                <input type="email" name="email" id="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input type="password" name="password" id="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Password (min 8 characters)" value={formData.password} onChange={handleChange} />
                                {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                            </div>
                            <div>
                                <label htmlFor="retypePassword" className="sr-only">Retype Password</label>
                                <input type="password" name="retypePassword" id="retypePassword" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Retype Password" value={formData.retypePassword} onChange={handleChange} />
                                {errors.retypePassword && <p className="text-red-500 text-xs italic">{errors.retypePassword}</p>}
                            </div>
                        </div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Sign Up
                        </button>
                        <div className="mt-4 text-center">
                            <p>Already have an account?</p>

                            <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in duration-200">
                                <a href='/users/login' >About
                                    Login
                                </a>
                            </span>
                        </div>
                    </form>
                    {/* Link to login page */}
                </div>
            </div>
        </>
    );
};

export default SignupPage;
