// __tests__/login.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Login from '../pages/login';
import { useRouter } from 'next/router';
import { waitFor } from '@testing-library/react';


jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Login', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      replace: jest.fn(),
    });
  });

  it('renders the login form correctly', () => {
    render(<Login />);
    expect(screen.getByLabelText(/Email or Username:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('handles user input and form submission', async () => {
    render(<Login />);
    const identifierInput = screen.getByLabelText(/Email or Username:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
  
    await userEvent.type(identifierInput, 'testuser');
    await userEvent.type(passwordInput, 'testpassword');
  
    await waitFor(() => {
      expect(identifierInput).toHaveValue('testuser');
      expect(passwordInput).toHaveValue('testpassword');
    });
  
    fireEvent.submit(screen.getByRole('button', { name: /Login/i }));
  });
});
