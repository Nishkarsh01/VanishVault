import { Button } from '@mui/material';

const NotificationTab = (props) => {
    const { sender, index, setId, ...otherProps } = props;

    return (
        <Button
            fullWidth
            variant='contained'
            onClick={(e) => {
                console.log(sender['_id']);
                setId(sender['_id']);
            }}
            sx={{
                p: 2,
                mr: 1,
                mt: 1,
                mb: 1,
                textAlign: 'left',
                bgcolor: '#00549a',
                '&:hover': { bgcolor: '#2995F0' },
                textTransform: 'none',
            }}
        >
            {index}. You have a message sent by {sender['sender']['name']}
        </Button>
    );
};

export default NotificationTab;
