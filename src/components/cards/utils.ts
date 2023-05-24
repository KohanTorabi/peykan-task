/**
 * Returns the color code associated with a given service status.
 * @param {string} status - The status of the service.
 * @returns {string} - The color code representing the service status.
 */
export const getServiceStatusTagColor = (status: string) => {
  let result = '#000';
  switch (status) {
    case 'easy-label':
      result = '#129141';
      break;
    case 'medium-label':
      result = '#ffa800';
      break;
    case 'hard-label':
      result = '#a32100';
      break;
    case 'impossible-label':
      result = '#000';
      break;
    default:
      break;
  }
  return result;
};
