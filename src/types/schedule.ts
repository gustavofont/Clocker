import { TagType } from '@src/enums/tagEnum'

export type Schedule = {
  id?: number,
  title: string,
  startTime: string,
  endTime: string,
  description: string,
  tag: TagType,
  allDay: boolean,
  notify: boolean,
}

export type CalendarDay = {
  schedule_date : string,
  schedules: Schedule[]
}

export type CalendarMonth = Array<CalendarDay>