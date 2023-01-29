export const handleMultiselect = () => {
  const multiselects = document.querySelectorAll('[data-multiselect]');

  if (multiselects.length === 0) {
    return;
  }

  multiselects.forEach((select) => {
    const wrapper = select.querySelector('.wpcf7-checkbox');
    const options = select.querySelectorAll('.wpcf7-list-item');
    const selected = document.createElement('div');
    const optionsModified = document.createElement('div');
    const optionValues = select.querySelectorAll('input[type="checkbox"]');

    selected.classList.add('multiselect-selected');
    optionsModified.classList.add('multiselect-options');

    wrapper.appendChild(selected);
    wrapper.appendChild(optionsModified);

    options.forEach((option) => {
      optionsModified.appendChild(option);
    });

    let selectedOptions = [];

    optionValues.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked === true && !selectedOptions.includes(checkbox.value)) {
          selectedOptions.push(checkbox.value);
        } else {
          selectedOptions = selectedOptions.filter((value) => value !== checkbox.value);
        }

        selected.innerHTML = selectedOptions.join(', ');
      });
    });

    selected.addEventListener('click', () => {
      select.classList.toggle('--active');
    });
  });
};

export const handleSelect = () => {
  const selects = document.querySelectorAll('[data-select]');

  if (selects.length === 0) {
    return;
  }

  selects.forEach((select) => {
    const wrapper = select.querySelector('.wpcf7-form-control-wrap');
    const options = select.querySelectorAll('option');
    const selected = document.createElement('div');
    const optionsModified = document.createElement('div');

    selected.classList.add('select-selected');
    optionsModified.classList.add('select-options');

    wrapper.appendChild(selected);
    wrapper.appendChild(optionsModified);

    options.forEach((option) => {
      optionsModified.appendChild(option);
    });

    selected.addEventListener('click', () => {
      select.classList.toggle('--active');
    });

    options.forEach((option) => {
      option.addEventListener('click', () => {
        selected.innerHTML = option.value;
        select.classList.remove('--active');
      });
    });
  });
};

export const closeCustomSelects = () => {
  const customSelects = document.querySelectorAll('[data-custom-select]');

  if (customSelects.length === 0) {
    return;
  }

  customSelects.forEach((select) => {
    document.addEventListener('click', (e) => {
      const currentSelect = e.target.closest('[data-custom-select]');
      const currentSelectActive = e.target.closest('[data-custom-select].--active');

      select.classList.remove('--active');

      if (currentSelect) {
        currentSelect.classList.add('--active');
      }

      if (currentSelectActive) {
        currentSelectActive.classList.remove('--active');
      }
    });
  });
};
