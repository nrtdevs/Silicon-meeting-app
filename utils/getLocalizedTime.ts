import * as Localization from 'expo-localization';

/**
 * Converts an ISO date string into a localized time string.
 *
 * @param {string} isoString - The ISO date string, for example: "2025-04-14T12:42:00.000Z".
 * @returns {string} - The localized time string.
 */
function getLocalizedTime(isoString:string) {
  // Convert the ISO string into a Date object
  const date = new Date(isoString);
  
  // Format the time based on the device locale and timezone
  const localTime = date.toLocaleTimeString(Localization.locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: Localization.timezone // uses the device's timezone
  });
  
  return localTime;
}

// Example usage:
const isoDateString = "2025-04-14T12:42:00.000Z";
console.log("Localized time:", getLocalizedTime(isoDateString));

export default getLocalizedTime;
