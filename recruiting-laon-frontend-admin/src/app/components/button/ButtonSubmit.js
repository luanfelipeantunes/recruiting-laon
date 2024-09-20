import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

export default function ButtonSubmit({loading, handleClick, text}) {
    return (
        <>
            <LoadingButton
                onClick={handleClick}
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="center"
                variant="contained"
                style={{width: '100%', marginBottom: '20px'}}
            >
                {text}
            </LoadingButton>
        </>
    )
}