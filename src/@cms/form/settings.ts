const settingsForm = {
  fields: [
    {
      label: 'Forms endpoint',
      name: 'rawJson.apiUrl',
      description: 'The endpoints used by newsletter form and contact forms (!!!)',
      component: 'text',
    },
    {
      label: 'Newsletter form label',
      name: 'rawJson.newsletterLabel',
      description: 'The label on top of your newsletter form',
      component: 'text',
    },
    {
      label: 'Newsletter email error label',
      name: 'rawJson.newsletterEmailErrorLabel',
      description: 'The error message displayed when email is invalid',
      component: 'text',
    },
    {
      label: 'Newsletter form error label',
      name: 'rawJson.newsletterErrorLabel',
      description: 'The error message when something fail on submit',
      component: 'text',
    },
    {
      label: 'Newsletter form success label',
      name: 'rawJson.newsletterSuccessLabel',
      description: 'The message displayed when the form submitted successfully',
      component: 'text',
    },
  ],
};

export default settingsForm;
