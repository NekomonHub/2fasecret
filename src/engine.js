import { spawn } from 'child_process';
import os from 'os';
const clearCmd = os.platform() === 'win32' ? 'cls' : 'clear';
export function clear(){spawn(clearCmd, { stdio: 'inherit' });}
export const wait = (ms) => {return new Promise(r => setTimeout(r, ms));}
