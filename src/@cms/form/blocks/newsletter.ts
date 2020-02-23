const NewsletterBlock = {
  label: 'Newsletter widget',
  fields: [
    {
      label: 'Forms endpoint',
      name: 'apiUrl',
      description: 'The endpoints used by newsletter form and contact forms (!!!)',
      component: 'text',
    },
    {
      label: 'Newsletter form label',
      name: 'title',
      description: 'The label on top of your newsletter form',
      component: 'text',
    },
    {
      label: 'Newsletter email error label',
      name: 'fieldErrorMessage',
      description: 'The error message displayed when email is invalid',
      component: 'text',
    },
    {
      label: 'Newsletter form error label',
      name: 'errorMessage',
      description: 'The error message when something fail on submit',
      component: 'text',
    },
    {
      label: 'Newsletter form success label',
      name: 'successMessage',
      description: 'The message displayed when the form submitted successfully',
      component: 'text',
    },
  ],
  defaultItem: {
    apiUrl: '',
    title: 'Newsletter',
    fieldErrorMessage: 'invalid email',
    errorMessage: 'something fail',
    successMessage: 'thank you !',
  },
};

export default NewsletterBlock;
