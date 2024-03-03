import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip } from '@mui/material';

export function Button() {
  return (
    <Tooltip title="Edit case">
      <IconButton>
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
}
