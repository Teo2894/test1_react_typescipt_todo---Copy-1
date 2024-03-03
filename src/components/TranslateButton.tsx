import TranslateIcon from '@mui/icons-material/Translate';
import { IconButton, Tooltip } from '@mui/material';

export function Button() {
  return (
    <Tooltip title="Translate case">
      <IconButton>
        <TranslateIcon />
      </IconButton>
    </Tooltip>
  );
}
