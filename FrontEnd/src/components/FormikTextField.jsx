import { TextField } from '@mui/material';

const FormikTextField = (props) => {
    const { formik, name, placeHolder, ...otherProps } = props;

    return (
        <TextField
            placeholder={placeHolder}
            name={name}
            onChange={(e) => {
                e.target.value = e.target.value.trimStart();
                formik.handleChange(e);
            }}
            value={formik.values[name]}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            onBlur={formik.handleBlur}
            size='large'
            fullWidth
            {...otherProps}
        />
    );
};
export default FormikTextField;
