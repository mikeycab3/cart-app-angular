export interface AlertMessage {
  type: 'success' | 'danger' | 'warning' | 'info';
  message: string;
}
