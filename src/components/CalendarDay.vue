<template>
  <div class="calendarDay">
    <div class="calendarDay--header">
      {{ day }}
    </div>
    <div class="calendarDay--body">
      <ul class="calendarDay--body-scheduleList">
        <li
          v-for="(schedule, index) in schedulesData.schedules"
          :key="index"
        >
          <Menu
            :placement="'right'"
            class="calendarDay--body-scheduleList-menu"
          >
            <div class="calendarDay--body-scheduleList-schedule">
              <p class="calendarDay--body-scheduleList-schedule-startTime">
                {{ timeFormatter(schedule?.startTime) }}
              </p>
              <p class="calendarDay--body-scheduleList-schedule-title">
                {{ schedule?.title }}
              </p>
            </div>
            <template #popper>
              <div class="calendarDay--body-scheduleList-schedule-popper">
                <div class="calendarDay--body-scheduleList-schedule-popper-header">
                  <div class="calendarDay--body-scheduleList-schedule-popper-header-title">
                    {{ schedule.title }}
                  </div>
                  <div class="calendarDay--body-scheduleList-schedule-popper-header-tag" />
                </div>
                <div class="calendarDay--body-scheduleList-schedule-popper-body">
                  <div class="calendarDay--body-scheduleList-schedule-popper-body-description">
                    <p>{{ schedule.description }}</p>
                  </div>
                  <div class="calendarDay--body-scheduleList-schedule-popper-body-time">
                    <div class="calendarDay--body-scheduleList-schedule-popper-body-time-start">
                      {{ timeFormatter(schedule?.startTime) }}
                    </div>
                    <div class="calendarDay--body-scheduleList-schedule-popper-body-time-end">
                      {{ timeFormatter(schedule?.endTime) }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Menu>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarDay } from '@src/types/schedule';
import { PropType } from 'vue';
import { Menu } from 'floating-vue';

const props = defineProps({
  schedulesData: {
    type: Object as PropType<CalendarDay>,
    required: true, 
  },
  day: {
    type: Number,
    required: true,
  },
});

function timeFormatter(date: string) {
  return date.substring(0, 5);
}

</script>

<style lang="scss">
.calendarDay {
  height: 140px;
  width: 215px;
  border-style: solid;
  border-radius: 5px;
  border-color: $light-grey-4;
  border-width: thin;
  overflow-y: auto;
  overflow-x: auto;
}

.calendarDay--body-scheduleList {
  list-style-type: none;
  margin: 0px;
  padding: 0px;

  li {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
.calendarDay--body-scheduleList-schedule {
  margin-bottom: 2px;
  width: 90%;
  border-radius: 5px;
  background-color: $light-grey-4;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.calendarDay--body-scheduleList-schedule-startTime {
  margin: 0px;
}
.calendarDay--body-scheduleList-schedule-title {
  margin: 0px;
}
.calendarDay--body-scheduleList-schedule-popper {
  width: 200px;
  height: 150px;
  font-family: $font-default;
  padding: 10px;
  overflow-y: auto;
  overflow-x: auto;
}
.calendarDay--body-scheduleList-schedule-popper-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

.calendarDay--body-scheduleList-schedule-popper-header-tag {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: $light-grey-4;
}

.calendarDay--body-scheduleList-schedule-popper-body-time {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.calendarDay--body-scheduleList-schedule-popper-body-description {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calendarDay--body-scheduleList-menu {
  display: flex;
  justify-content: center;
}
</style>