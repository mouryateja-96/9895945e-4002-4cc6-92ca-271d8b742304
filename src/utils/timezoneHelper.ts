import { DateTime } from 'luxon';

export function convertUTCToDeviceTime(timestamp: string, timezone: string): string {
  return DateTime.fromISO(timestamp, { zone: 'utc' }).setZone(timezone).toISO() ?? '';
}
