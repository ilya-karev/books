import { Backdrop, CircularProgress } from '@mui/material';

const CommonBackdrop = ({ isLoading }: { isLoading: boolean }) => (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={isLoading}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default CommonBackdrop
