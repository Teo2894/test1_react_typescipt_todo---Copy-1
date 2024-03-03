import PostAdd from '@mui/icons-material/PostAdd';
import { IconButton, Tooltip } from '@mui/material';

export function Button() {
  return (
    <Tooltip title="Add note">
      <IconButton>
        <PostAdd />
      </IconButton>
    </Tooltip>
  );
}
