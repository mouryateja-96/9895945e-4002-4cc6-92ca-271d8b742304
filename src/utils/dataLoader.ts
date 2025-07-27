import fs from 'fs/promises';
import path from 'path';
import { Device, DeviceSaving } from '../types';

export const loadDevices = async (): Promise<Device[]> => {
  const filePath = path.join(__dirname, '../../data/devices.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

export const loadDeviceSavings = async (): Promise<DeviceSaving[]> => {
  const filePath = path.join(__dirname, '../../data/device-savings.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};
