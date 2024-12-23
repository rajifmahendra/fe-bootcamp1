import Swal from 'sweetalert2';

// Default options for SweetAlert
const defaultOptions = {
  icon: 'info',
  confirmButtonText: 'OK',
  allowOutsideClick: false,
};

// Generic alert function
export const showAlert = (options) => {
  return Swal.fire({
    ...defaultOptions,
    ...options,
  });
};

// Custom success alert
export const showSuccess = (message) => {
  return showAlert({
    icon: 'success',
    title: 'Success',
    text: message,
  });
};

// Custom error alert
export const showError = (message) => {
  return showAlert({
    icon: 'error',
    title: 'Error',
    text: message,
  });
};

// Custom warning alert
export const showWarning = (message) => {
  return showAlert({
    icon: 'warning',
    title: 'Warning',
    text: message,
  });
};

// Custom buy confirmation alert
export const showBuyConfirmation = (product, formatCurrency) => {
  return Swal.fire({
    title: 'Are you sure?',
    text: `Do you want to buy ${product.name} for ${formatCurrency(product.price)}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, buy it!',
    cancelButtonText: 'No, cancel',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Purchased!',
        `You have successfully bought ${product.name} for ${formatCurrency(product.price)}`,
        'success'
      );
    } else {
      Swal.fire(
        'Cancelled',
        'Your purchase has been cancelled',
        'info'
      );
    }
  });
};
