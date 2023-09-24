import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordTextFeild = (props) => {
    const { placeholder, size = 'large', formik, name, ...otherProps } = props;

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    return (
        <TextField
            placeholder={placeholder}
            variant='outlined'
            required
            type={showPassword ? 'text' : 'password'}
            name={name}
            onChange={(e) => {
                e.target.value = e.target.value.trimStart();
                formik.handleChange(e);
            }}
            value={formik.values[name]}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            onBlur={formik.handleBlur}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge='end'
                        >
                            {showPassword ? (
                                <VisibilityIcon />
                            ) : (
                                <VisibilityOffIcon />
                            )}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            fullWidth
            size={size}
            {...otherProps}
        />
    );
};

export default PasswordTextFeild;
