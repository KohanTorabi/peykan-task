import { strings } from '@/resources/strings';
import { SignUpFormData, rawSignUpFormData } from './types';

export const validateForm = (data: SignUpFormData) => {
  const { username, email, password } = data;
  const errors: SignUpFormData = rawSignUpFormData;

  // Validate username
  if (!username) {
    errors.username = strings.username_required;
  }

  // Validate email
  if (!email) {
    errors.email = strings.email_required;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = strings.email_invalid_format;
  } else {
    errors.email = undefined;
  }

  // Validate password
  if (!password) {
    errors.password = strings.password_required;
  } else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z]).{8,}$/.test(password)) {
    errors.password = strings.password_invalid_format;
  } else {
    errors.password = undefined;
  }

  return errors;
};
