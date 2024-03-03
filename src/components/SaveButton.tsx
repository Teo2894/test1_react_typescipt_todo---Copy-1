import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Tooltip } from '@mui/material';

export function Button() {
  return (
    <Tooltip title="Save note">
      <IconButton>
        <SaveIcon />
      </IconButton>
    </Tooltip>
  );
}
