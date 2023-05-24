import React, { useState } from 'react';
import { TextField, Button, Box, List, ListItem } from '@mui/material';
import { Comment } from './types';
import CommentCard from './card';
import { fakeComments } from './data';
import { strings } from '@/resources/strings';

const CommentsList: React.FC<{ username: string }> = ({ username }) => {
  const [comments, setComments] = useState<Comment[]>(fakeComments);

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const comment: Comment = {
        id: Date.now(),
        text: newComment,
        author: username,
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <Box>
      <TextField
        label={strings.write_comment}
        value={newComment}
        onChange={handleCommentChange}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
        {strings.add_comment}
      </Button>
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id}>
            <CommentCard comment={comment} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CommentsList;
