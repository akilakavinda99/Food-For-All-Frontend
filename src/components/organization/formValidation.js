var errors = {}

// email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// phone validation pattern
const phonePattern = /^[0]{1}[0-9]{9}$/;
// can only contain numbers
const numberPattern = /^[0-9]*$/;
// can only contain letters and spaces
const letterPattern = /^[a-zA-Z ]*$/;

export const formValidationStep1 = (values) => {
    errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    }

    if (!values.address) {
        errors.address = 'Address is required';
    }

    if (!values.country) {
        errors.country = 'Country is required';
    } else if (!letterPattern.test(values.country)) {
        errors.country = 'Country can only contain letters';
    }

    if (!values.zipCode) {
        errors.zipCode = 'Zip Code is required';
    } else if (!numberPattern.test(values.zipCode)) {
        errors.zipCode = 'Zip Code can only contain numbers';
    }

    if (!values.contactNumber) {
        errors.contactNumber = 'Contact Number is required';
    } else if (!phonePattern.test(values.contactNumber)) {
        errors.contactNumber = 'Invalid phone number';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.registrationNumber) {
        errors.registrationNumber = 'Registration Number is required';
    }

    return errors;
}

export const formValidationStep3 = (values) => {
    errors = {};

    if (!values.registrationCertificate) {
        errors.registrationCertificate = 'Registration Certificate is required';
    }

    return errors;
}
export const formValidationStep2 = (values) => {
    errors = {};

    if (!values.presidentName) {
        errors.presidentName = 'President Name is required';
    } else if (!letterPattern.test(values.presidentName)) {
        errors.presidentName = "President's name can only contain letters";
    }

    if (!values.presidentEmail) {
        errors.presidentEmail = 'President Email is required';
    } else if (!emailPattern.test(values.presidentEmail)) {
        errors.presidentEmail = 'Invalid email address';
    }

    if (!values.presidentContactNumber) {
        errors.presidentContactNumber = 'President mobile number is required';
    } else if (!phonePattern.test(values.presidentContactNumber)) {
        errors.presidentContactNumber = 'Invalid phone number';
    }

    if (!values.secretaryName) {
        errors.secretaryName = 'Secretary Name is required';
    } else if (!letterPattern.test(values.secretaryName)) {
        errors.secretaryName = "Secretary's name can only contain letters";
    }

    if (!values.secretaryEmail) {
        errors.secretaryEmail = 'Secretary Email is required';
    } else if (!emailPattern.test(values.secretaryEmail)) {
        errors.secretaryEmail = 'Invalid email address';
    }

    if (!values.secretaryContactNumber) {
        errors.secretaryContactNumber = 'Secretary mobile number is required';
    } else if (!phonePattern.test(values.secretaryContactNumber)) {
        errors.secretaryContactNumber = 'Invalid phone number';
    }

    return errors;
}

export const formValidationStep4 = (values) => {
    errors = {};

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }

    if (!values.repassword) {
        errors.repassword = 'Re-type Password is required';
    } else if (values.repassword !== values.password) {
        errors.repassword = 'Passwords do not match';
    }

    if (!values.terms) {
        errors.terms = 'You must agree to the terms and conditions';
    }

    return errors;
}