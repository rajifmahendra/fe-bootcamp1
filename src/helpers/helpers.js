// Email validation regex helper function
export const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
};

export const formatCurrency = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
        return 'Rp 0'; // Return default value if input is not a valid number
    }

    // Format the value as an integer without decimals
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Do not show decimals
        maximumFractionDigits: 0, // Do not show decimals
    }).format(value);
};