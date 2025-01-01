import React from 'react'
import { Toaster } from 'react-hot-toast'

const CustomToaster = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName="custom-toast-container"
            containerStyle={{
                zIndex: 9999,
                padding: '10px',
            }}
            toastOptions={{
                // Default options for all toasts
                duration: 3000,
                removeDelay: 1000,
                className: 'custom-toast',
                style: {
                    background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', // Gradient background
                    color: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    padding: '16px',
                    fontSize: '14px',
                },

                // Custom options for success toasts
                success: {
                    duration: 4000,
                    style: {
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)', // Green gradient
                        color: '#fff',
                        border: '1px solid #16a34a',
                        fontWeight: 'bold',
                    },
                    iconTheme: {
                        primary: '#4ade80',
                        secondary: '#1e3a8a',
                    },
                },

                // Custom options for error toasts
                error: {
                    duration: 4000,
                    style: {
                        background: 'linear-gradient(135deg, #ef4444, #b91c1c)', // Red gradient
                        color: '#fff',
                        border: '1px solid #b91c1c',
                        fontWeight: 'bold',
                    },
                    iconTheme: {
                        primary: '#f87171',
                        secondary: '#000',
                    },
                },

                // Custom options for loading toasts
                loading: {
                    style: {
                        background: 'linear-gradient(135deg, #f59e0b, #d97706)', // Yellow gradient
                        color: '#fff',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                    },
                },
            }}
        />

    )
}

export default CustomToaster
