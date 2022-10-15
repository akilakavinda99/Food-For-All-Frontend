var errors = {};
// email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// phone validation pattern
const phonePattern = /^[0]{1}[0-9]{9}$/;
// can only contain numbers
const numberPattern = /^[0-9]*$/;


export const formValidationStep1 = (values) => {
    errors = {}

    if (!values.fname) {
        errors.fname = 'First name is required';
    }

    if (!values.lname) {
        errors.lname = 'Last name is required';
    }

    if (!values.tpno) {
        errors.telephoneNo = 'Contact Number is required';
    } else if (!phonePattern.test(values.tpno)) {
        errors.telephoneNo = 'Invalid phone number';
    }

    if (!values.country) {
        errors.country = 'country is required';
    }

    if (!values.zipcode) {
        errors.zipcode = 'zipcode is required';
    } else if (!numberPattern.test(values.zipcode)) {
        errors.zipcode = 'zipcode can only contain numbers';
    }

    if (!values.address) {
        errors.address = 'Address is required';
    }

    if (!values.email) {
        errors.email = 'Contact Email is required';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.contactno) {
        errors.contactNo = 'Contact Number is required';
    } else if (!phonePattern.test(values.contactno)) {
        errors.contactNo = 'Invalid phone number';
    }

    return errors;
}

// validation for step 2
export const formValidationStep2 = (values) => {
    errors = {}

    if (!values.requestImage) {
        errors.requestImage = 'Request Image is required';
    }

    if (!values.description) {
        errors.description = 'Request description is required';
    }

    if (!values.title) {
        errors.title = 'Title is required';
    }


    return errors;
}
