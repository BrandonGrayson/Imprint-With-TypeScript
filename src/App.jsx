import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function App() {
	return (
		<Box>
			<Box
				sx={{
					w: '100%',
					h: '100%'
				}}
			>
        <Typography>
          Welcome to the Homepage
        </Typography>
      </Box>
			<BrowserRouter />
		</Box>
	);
}

export default App;
