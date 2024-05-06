class FormValidation {
  constructor(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.isValid(form);
    });
  }

  isValid(form) {
    for (let i = 0; i < form.length; i++) {
      if (form[i].type === 'submit') continue;
      this.isEmpty(form[i]);
      if (form[i].dataset.input === 'email') this.isEmail(form[i]);
    }
  }

  isEmail(emailInput) {
    console.table('Email:', emailInput.value);
    const pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    return pattern.test(emailInput.value) ? this.removeError(emailInput) : this.setError(emailInput);
  }

  isEmpty(inputItem) {
    inputItem.value.trim().length ? this.removeError(inputItem) : this.setError(inputItem);
  }

  setError(input) {
    input.parentElement.classList.add('error');
  }

  removeError(input) {
    input.parentElement.classList.remove('error');
  }
}
