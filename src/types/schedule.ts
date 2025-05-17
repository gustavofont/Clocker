export type Schedule = {
  id?: number,
  title: string,
  startTime: string,
  endTime: string,
  description: string,
  tag: string,
  allDay: boolean,
  notify: boolean,
}