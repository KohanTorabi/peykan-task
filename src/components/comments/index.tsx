import { useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AuthModal from '../auth_modal';
import styled from '@emotion/styled';
import { strings } from '@/resources/strings';
import CommentsList from './list';
import { SignUpFormData } from '../auth_forms/types';

const CustomizedAlert = styled(Alert)`
  cursor: pointer;
`;

const ContentContainer = styled.div`
  padding-top: 32px;
`;

export default function HomeComments() {
  const [username, setUsername] = useState<string>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSignUpFinish = (data: SignUpFormData) => {
    setUsername(data.username);
    setIsModalOpen(false);
  };
  return (
    <Box paddingBottom={8}>
      <Divider component="div" role="presentation">
        <Typography variant="h5">{strings.comments}</Typography>
      </Divider>
      <ContentContainer>
        {username ? (
          <CommentsList username={username} />
        ) : (
          <CustomizedAlert
            variant="filled"
            severity="info"
            onClick={() => setIsModalOpen(true)}>
            {strings.sign_up_comment}
          </CustomizedAlert>
        )}
        <AuthModal
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          onSignUpFinish={onSignUpFinish}
        />
      </ContentContainer>
    </Box>
  );
}
