export interface Device {
  id: number;
  name: string;
  timezone: string;
}

export interface DeviceSaving {
  device_id: number;
  timestamp: string;          // UTC timestamp
  device_timestamp: string;   // Local time (for frontend display)
  carbon_saved: number;
  fueld_saved: number;
}
