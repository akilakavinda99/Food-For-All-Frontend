var errors = {};
// email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// phone validation pattern
const phonePattern = /^[0]{1}[0-9]{9}$/;
// can only contain numbers
const numberPattern = /^[0-9]*$/;

export const formValidationStep1 = (values) => {
    errors = {}

    if (!values.title) {
        errors.title = 'Title is required';
    } else if (values.title.length < 3) {
        errors.title = 'Title must be at least 3 characters';
    } else if (values.title.length > 50) {
        errors.title = 'Title must be less than 50 characters';
    }

    if (!values.target) {
        errors.target = 'Target is required';
    } else if (values.target.length < 10) {
        errors.target = 'Target must be at least 10 characters';
    }

    if (!values.description) {
        errors.description = 'Description is required';
    } else if (values.description.length < 10) {
        errors.description = 'Description must be at least 10 characters';
    }

    if (!values.budget) {
        errors.budget = 'Budget is required';
    } else if (!numberPattern.test(values.budget)) {
        errors.budget = 'Budget can only contain numbers';
    }

    return errors;
}

// validation for step 2
export const formValidationStep2 = (values) => {
    errors = {}

    if (!values.fundImage) {
        errors.fundImage = 'Fund Image is required';
    }

    if (!values.contactEmail) {
        errors.contactEmail = 'Contact Email is required';
    } else if (!emailPattern.test(values.contactEmail)) {
        errors.contactEmail = 'Invalid email address';
    }

    if (!values.contactNumber) {
        errors.contactNumber = 'Contact Number is required';
    } else if (!phonePattern.test(values.contactNumber)) {
        errors.contactNumber = 'Invalid phone number';
    }

    return errors;
}
