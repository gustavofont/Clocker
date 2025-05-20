<template>
  <div class="scheduleCard">
    <div class="scheduleCard--header">
      <div class="scheduleCard--header-title">
        {{ scheduleData.title }}
      </div>
      <div class="scheduleCard--header-tag">
        <TagComponent :tag="scheduleData.tag" />
      </div>
    </div>
    <div class="scheduleCard--body">
      <div class="schedulecard--body-col1">
        <p class="schedulecard--body-col1-text">
          {{ scheduleData.description }}
        </p>
      </div>
      <div class="scheduleCard--body-col2">
        <div class="scheduleCard--body-col2-info">
          Start : {{ timeFormatter(scheduleData.startTime) }}
        </div>
        <div class="scheduleCard--body-col2-info">
          End : {{ timeFormatter(scheduleData.endTime) }}
        </div>
      </div>
      <div class="scheduleCard--body-col3">
        {{ dateFormatter(scheduleData.startTime) }}
        <div class="scheduleCard--body-col3-deleteSchedule">
          <IconComponent
            :icon-name="'delete'"
            class="scheduleCard--body-col3-deleteSchedule-icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Schedule } from '@src/types/schedule';
import { PropType } from 'vue';
import IconComponent from './basicComponents/IconComponent.vue';
import TagComponent from '@src/components/TagComponent.vue';


defineProps({
  scheduleData: {
    type: Object as PropType<Schedule>,
    required: true,
  },
});

function timeFormatter(date: string) {
  const gtmDate = new Date(date).toString();

  const splitedDate = gtmDate.split(' ');

  return `${splitedDate[4]}`;
}

function dateFormatter(date: string) {
  const gtmDate = new Date(date).toString();

  const splitedDate = gtmDate.split(' ');

  return `${splitedDate[1]} ${splitedDate[2]}th, ${splitedDate[3]}.`;
}

</script>

<style lang="scss">
.scheduleCard {
  border-style: solid;
  border-radius: 5px;
  border-color: $light-grey-4;
  border-width: thin;
  width: 100%;
  height: 100px;
  margin-top: 10px;
}

.scheduleCard--header {
  display: flex;
}

.scheduleCard--header-title{
  width: 50%;
  margin-top: 5px;
  margin-left: 10px;
  font-weight: bold;

}

.scheduleCard--header-tag {
  width: 50%;
  display: flex;
  justify-content: end;
  margin-top: 5px;
  margin-right: 20px;
}

.scheduleCard--header-tag-tagCicle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: $light-grey-4;
}

.scheduleCard--body {
  width: auto;
  height: 70px;
  margin: 10px;
  display: flex;
  
}

.schedulecard--body-col1 {
  width: 50%;
}

.schedulecard--body-col1-text {
  margin: 0px;
}

.scheduleCard--body-col2 {
  width: 25%;
  display: grid;
  justify-content: center;
}

.scheduleCard--body-col2-info {
  margin-bottom: 10px;
  margin-left: 40px;
}

.scheduleCard--body-col3 {
  width: 25%;
  display: grid;
  justify-content: end;
}

.scheduleCard--body-col3-deleteSchedule {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  width: 100%;
  justify-content: end;
}

.scheduleCard--body-col3-deleteSchedule-icon:hover {
  background-color: $light-grey-3;
}

</style>