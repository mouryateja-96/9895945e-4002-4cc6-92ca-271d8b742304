import { Request, Response } from 'express';
import { loadDevices, loadDeviceSavings } from '../utils/dataLoader';
import { convertUTCToDeviceTime } from '../utils/timezoneHelper';

export const getDeviceSavings = async (req: Request, res: Response) => {
  try {
    const deviceId = parseInt(req.query.deviceId as string);
    const start = req.query.startDate ? new Date(req.query.startDate as string) : null;
    const end = req.query.endDate ? new Date(req.query.endDate as string) : null;

    if (isNaN(deviceId)) return res.status(400).json({ error: 'Invalid deviceId' });

    const [devices, savings] = await Promise.all([
      loadDevices(),
      loadDeviceSavings()
    ]);

    const device = devices.find(d => d.id === deviceId);
    if (!device) return res.status(404).json({ error: 'Device not found' });

    const filtered = savings.filter(entry => {
      const ts = new Date(entry.timestamp);
      return (
        entry.device_id === deviceId &&
        (!start || ts >= start) &&
        (!end || ts <= end)
      );
    });

    const response = filtered.map(entry => ({
      ...entry,
      device_timestamp: convertUTCToDeviceTime(entry.timestamp, device.timezone)
    }));

    res.json({
      device,
      data: response
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
