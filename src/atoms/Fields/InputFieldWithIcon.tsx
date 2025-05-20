import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputFieldWithIcon() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="What do you think?" variant="standard" />
        
      </Box>
    </Box>
  );
}