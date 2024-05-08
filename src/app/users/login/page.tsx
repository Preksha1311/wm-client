'use client'
// http://localhost:5050/api/users/login

import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { LoginForm, LoginResponse } from './loginComp/loginTypes';

// Importing custom components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch('http://localhost:5050/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data: LoginResponse = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to log in');
      }
      
      console.log('Login successful:', data); // Optionally handle the token here
      router.push('/'); // Redirect to the homepage
    } catch (error: any) {
      setError(error.message || 'An unexpected error occurred');
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <Card className="p-10 bg-white shadow-lg rounded-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Sign in to your account</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email-address">Email address</Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                className="w-full"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="w-full"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            <CardFooter>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
