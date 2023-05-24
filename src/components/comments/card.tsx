import React from 'react';
import { Paper, Grid, Avatar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Comment } from './types';

const CommentCardContainer = styled(Paper)`
  padding: 40px 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => {
  const { text, author } = comment;
  return (
    <CommentCardContainer>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt={author}>{author.charAt(0)}</Avatar>
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography gutterBottom fontWeight={600}>{author}</Typography>
          <Typography>{text}</Typography>
        </Grid>
      </Grid>
    </CommentCardContainer>
  );
};

export default CommentCard;
