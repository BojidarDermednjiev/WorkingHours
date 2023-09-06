export function getDaysInMonth(year, month) {
    
    return Array.apply(null, Array(new Date(year, month, 0).getDate()));
  }
 export const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0;
  };