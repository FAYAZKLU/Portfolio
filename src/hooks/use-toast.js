export const toast = ({ title, description }) => {
  if (typeof window !== 'undefined') {
    const msg = [title, description].filter(Boolean).join('\n');
    window.alert(msg);
  }
};
