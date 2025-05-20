<template>
  <div class="dashboardPage">
    <div class="dashboardPage--header">
      <div class="dashboardPage--header-filters">
        <div class="dashboardPage--filter">
          <div class="dashboardPage--filter-label">
            Year
          </div>
          <SelectDropdown
            v-model="filters.year"
            :options="yearsOptions"
            :placeholder="'2025'"
            :width="'200px'"
          />
        </div>
        <div class="dashboardPage--filter">
          <div class="dashboardPage--filter-label">
            Month
          </div>
          <SelectDropdown
            v-model="filters.month"
            :options="monthsOptions"
            :placeholder="'November'"
            :width="'200px'"
          />
        </div>
      </div>
    </div>
    <div class="dashboardPage--body">
      <div class="dashboardPage--body-calendar">
        <div
          v-for="(schedules, index) in schedulesCalendar"
          :key="index +1"
          class="dashboardpage--body-calendar-dayCard"
        >
          <CalendarDay 
            :day="index+1"
            :schedules-data="schedules"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, Ref, ref, watch } from 'vue';
  import SelectDropdown from '../basicComponents/SelectDropdown.vue';
  import { convertMonthToDateFormat, generateMonthsOptions, generateYearsOptionsByRange } from '@src/utils/dataGenerator';
  import CalendarDay from '../CalendarDay.vue';
  import request from '@src/utils/request';
  import { CalendarMonth } from '@src/types/schedule';
  import notify from '@src/notifications/notify';
  import { NotificationType } from '@src/enums/notificationEnum';

  const filters = ref({
    year: 2025,
    month: 'May'
  });

  const yearsOptions = generateYearsOptionsByRange(20);
  const monthsOptions = generateMonthsOptions();

  const schedulesCalendar: Ref<CalendarMonth> = ref([]);

  async function getSchedules() {
    try {
      const res = await request.get('schedule/calendar', {
        params: {
          filters: {
            year: filters.value.year,
            month: convertMonthToDateFormat(filters.value.month)
          }
        }
      });
      if(res.status === 200) {
        schedulesCalendar.value = res.data;
      } else {
        notify(NotificationType.INFO, res.data);
      }

    } catch (error: any) {
      console.log(error);
    }
  }

  watch(
    filters,
    () => {
      getSchedules();
    },
    { deep: true }
  );

  onMounted(()=> {
    getSchedules();
  });

</script>

<style lang="scss">
.dashboardPage {
  height: 100%;
  width: 100%;
  font-family: $font-default;
}
.dashboardPage--header {
  padding: 20px;
}

.dashboardPage--header-filters {
  border-style: solid;
  border-radius: 5px;
  border-color: $light-grey-4;
  border-width: thin;
  height: 100%;
  padding: 15px;
  display: flex;
  gap: 40px;
}

.dashboardPage--body {
  padding: 20px;
}

.dashboardPage--body-calendar {
  border-style: solid;
  border-radius: 5px;
  border-color: $light-grey-4;
  border-width: thin;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}

</style>