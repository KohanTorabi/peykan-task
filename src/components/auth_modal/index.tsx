import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import SignUp from '../auth_forms/signUp';
import { onSignUpFinish } from '../auth_forms/types';

export default function AuthModal({
  open,
  handleClose,
  onSignUpFinish,
}: {
  open: boolean;
  handleClose: () => void;
  onSignUpFinish: onSignUpFinish;
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <SignUp onSignUpFinish={onSignUpFinish} />
      </DialogContent>
    </Dialog>
  );
}
