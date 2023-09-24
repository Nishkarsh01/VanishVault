import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Typography,
    Stack,
} from '@mui/material';

const MessageDialog = (props) => {
    const { open, setOpen, message,setId, setMsg } = props;
    const handleBackdropClick = () => {
        setId('');
        setMsg('');
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleBackdropClick}>
            <DialogContent sx={{ maxWidth: '450px' }} dividers>
                <Stack
                    spacing={1}
                    alignItems='center'
                    textAlign='center'
                    sx={{ maxWidth: '500px' }}
                >
                    <Typography>
                        Please Make sure you do not share this information to
                        untrusted sources.
                    </Typography>
                    <Typography>{message}</Typography>
                </Stack>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
                <Button
                    fullWidth
                    onClick={handleBackdropClick}
                    sx={{
                        border: '2px solid #00549a',
                        color: 'black',
                    }}
                    variant='outlined'
                >
                    Understood
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MessageDialog;
