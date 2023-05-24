export interface SignUpFormData {
  email?: string;
  password?: string;
  username?: string;
}

export const rawSignUpFormData: SignUpFormData = {
  email: undefined,
  password: undefined,
  username: undefined,
};

export type onSignUpFinish = (data: SignUpFormData) => void;

export interface SignUpProps {
  onSignUpFinish: onSignUpFinish;
}
