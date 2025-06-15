export const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const value = e.currentTarget.value;
  const key = e.key;
  
  if (!/[\d.]/.test(key)) {
    e.preventDefault();
    return;
  }

  if (key === '.') {
    if (value.includes('.')) {
      e.preventDefault();
      return;
    }
    if (value === '') {
      e.preventDefault();
      return;
    }
  }

  if (/\d/.test(key)) {
    if (value.includes('.')) {
      const decimalPlaces = value.split('.')[1]?.length || 0;
      if (decimalPlaces >= 2) {
        e.preventDefault();
        return;
      }
    }
  }
};

export const validateAmount = (value: string) => {
  if (!value) return true;
  return /^\d+\.\d{2}$/.test(value) || 'Please enter a valid amount';
};