document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
      nav.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  }

  const filters = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-tech]');
  const filterStatus = document.querySelector('#filter-status');
  filters.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach(item => {
      item.classList.toggle('is-active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    let visible = 0;
    projects.forEach(project => {
      const show = selected === 'todos' || project.dataset.tech.split(' ').includes(selected);
      project.hidden = !show;
      if (show) visible += 1;
    });
    if (filterStatus) filterStatus.textContent = `${visible} proyectos visibles para ${selected}.`;
  }));

  const form = document.querySelector('#contact-form');
  if (form) {
    const status = document.querySelector('#form-status');
    const fields = ['nombre', 'correo', 'mensaje'];
    const validate = (field) => {
      const input = form.elements.namedItem(field);
      const error = document.querySelector(`#error-${field}`);
      const value = input.value.trim();
      let message = '';
      if (!value) message = 'Este campo es obligatorio.';
      else if (field === 'correo' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Escribe un correo válido.';
      error.textContent = message;
      input.setAttribute('aria-invalid', String(Boolean(message)));
      return !message;
    };
    fields.forEach(field => form.elements.namedItem(field).addEventListener('input', () => validate(field)));
    form.addEventListener('submit', event => {
      event.preventDefault();
      const results = fields.map(validate);
      if (results.every(Boolean)) {
        status.className = 'form-success';
        status.textContent = 'Formulario validado correctamente. Esta demostración no envía mensajes.';
        form.reset();
        fields.forEach(field => form.elements.namedItem(field).removeAttribute('aria-invalid'));
      } else {
        status.className = 'form-failure';
        status.textContent = 'Revisa los campos marcados para continuar.';
        form.elements.namedItem(fields[results.indexOf(false)]).focus();
      }
    });
  }
});
