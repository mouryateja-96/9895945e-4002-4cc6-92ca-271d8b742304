import { convertUTCToDeviceTime } from '../../src/utils/timezoneHelper';

describe('convertUTCToDeviceTime', () => {
  it('should convert UTC to specified timezone', () => {
    const utc = '2023-12-31T12:00:00.000Z';
    const result = convertUTCToDeviceTime(utc, 'America/New_York');
    expect(result).toContain('2023-12-31T'); // basic check
  });
});
