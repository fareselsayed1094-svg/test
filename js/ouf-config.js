/* OUF / عوف — Shared Tailwind Configuration */
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f9f9f9', 'on-primary-container': '#858383', 'on-tertiary-container': '#9a805b',
        'surface-dim': '#dadada', 'primary-fixed': '#e5e2e1', 'secondary-container': '#dfe0df',
        'on-secondary-fixed': '#1a1c1c', 'primary-container': '#1c1b1b', error: '#ba1a1a',
        tertiary: '#000000', 'error-container': '#ffdad6', 'secondary-fixed-dim': '#c6c7c6',
        'on-primary': '#ffffff', 'on-error': '#ffffff', primary: '#000000',
        'on-secondary-fixed-variant': '#454747', secondary: '#5d5f5e', surface: '#f9f9f9',
        'inverse-primary': '#c9c6c5', 'inverse-on-surface': '#f1f1f1', 'on-primary-fixed-variant': '#474646',
        'surface-bright': '#f9f9f9', 'outline-variant': '#c4c7c7', 'on-surface-variant': '#444748',
        'surface-container': '#eeeeee', 'inverse-surface': '#2f3131', 'on-secondary-container': '#616362',
        'on-secondary': '#ffffff', 'secondary-fixed': '#e2e2e2', 'surface-container-high': '#e8e8e8',
        'surface-container-low': '#f3f3f3', 'on-surface': '#1a1c1c', 'on-tertiary-fixed-variant': '#584323',
        'on-primary-fixed': '#1c1b1b', 'tertiary-fixed-dim': '#e0c298', 'on-background': '#1a1c1c',
        'on-error-container': '#93000a', 'surface-variant': '#e2e2e2', 'surface-tint': '#5f5e5e',
        outline: '#747878', 'surface-container-highest': '#e2e2e2', 'surface-container-lowest': '#ffffff',
        'on-tertiary': '#ffffff', 'primary-fixed-dim': '#c9c6c5', 'on-tertiary-fixed': '#281800',
        'tertiary-container': '#281800', 'tertiary-fixed': '#fedeb2'
      },
      borderRadius: { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
      spacing: {
        unit: '8px', 'section-gap': '120px', gutter: '24px',
        'margin-desktop': '64px', 'container-max': '1440px', 'margin-mobile': '20px'
      },
      fontFamily: {
        'display-lg-mobile': ['Bodoni Moda'], 'label-caps': ['Inter'], 'arabic-body': ['Amiri'],
        'headline-md': ['Bodoni Moda'], 'display-lg': ['Bodoni Moda'], 'arabic-display': ['Amiri'],
        'body-lg': ['Inter'], 'body-md': ['Inter']
      },
      fontSize: {
        'display-lg-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '0.05em', fontWeight: '300' }],
        'label-caps': ['12px', { lineHeight: '1', letterSpacing: '0.15em', fontWeight: '500' }],
        'arabic-body': ['20px', { lineHeight: '1.8', fontWeight: '400' }],
        'headline-md': ['32px', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '400' }],
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '0.05em', fontWeight: '300' }],
        'arabic-display': ['48px', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }]
      }
    }
  }
};
