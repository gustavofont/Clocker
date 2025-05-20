<template>
  <div class="schedulePage-container">
    <div class="schedulePage--header">
      <div class="schedulePage--filters">
        <div class="schedulePage--filter">
          <div class="schedulePage--filter-label">
            Year
          </div>
          <SelectDropdown
            v-model="filters.year"
            :options="yearsOptions"
            :placeholder="'2025'"
            :width="'200px'"
            :disabled="disableDateFilters"
          />
        </div>
        <div class="schedulePage--filter">
          <div class="schedulePage--filter-label">
            Month
          </div>
          <SelectDropdown
            v-model="filters.month"
            :options="monthsOptions"
            :placeholder="'November'"
            :width="'200px'"
            :disabled="disableDateFilters"
          />
        </div>
        <div class="schedulePage--filter">
          <div class="schedulePage--filter-label">
            Day
          </div>
          <SelectDropdown
            v-model="filters.day"
            :options="daysOptions"
            :placeholder="'7'"
            :width="'200px'"
            :disabled="disableDayInput || disableDateFilters"
          />
        </div>
        <div class="schedulePage--filters-today">
          <IconComponent 
            :icon-name="currentDateCheckbox ? 'check_box': 'check_box_outline_blank'" 
            @click="handleCurrentDateCheckbox()"
          />
          <div class="schedulePage--filters-today-label">
            Current date
          </div>
        </div>
      </div>
    </div>
    <div class="schedulePage--body-newSchedule">
      <ButtonComponent
        :type="ButtonType.PRIMARY"
        :text="'New'"
        :width="'100px'"
        @click="()=> isFormOpen = true"
      />
    </div>
    <div class="schedulePage--body">
      <div class="schedulePage--body-form">
        <div
          v-if=" !isFormOpen"
          class="schedulePage--body-form-message"
        >
          No schedule for this date
        </div>
        <ScheduleForm
          v-if="isFormOpen"
          @close-form="() => isFormOpen = false"
          @send-form="createSchedule"
        />

        <div
          v-for="(schedule, key) in schedules"
          :key="key"
          class="schedulePage--body--form-schedules"
        >
          <ScheduleCard :schedule-data="schedule" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, Ref, ref, watch } from 'vue';
  import SelectDropdown from '../basicComponents/SelectDropdown.vue';
  import { buildISODateString, convertNumberToMonth, generateDaysOptions, generateMonthsOptions, generateYearsOptionsByRange } from '@src/utils/dataGenerator';
  import IconComponent from '../basicComponents/IconComponent.vue';
  import { DropdownOption } from '@src/types/menus';
  import ScheduleForm from '../ScheduleForm.vue';
  import ButtonComponent from '../basicComponents/ButtonComponent.vue';
  import { ButtonType } from '@src/enums/buttonEnum';
  import { Schedule } from '@src/types/schedule';
  import request from '@src/utils/request';
  import { NotificationType } from '@src/enums/notificationEnum';
  import notify from '@src/notifications/notify';
  import ScheduleCard from '../ScheduleCard.vue';

  const yearsOptions = generateYearsOptionsByRange(20);
  const monthsOptions = generateMonthsOptions();
  const daysOptions: Ref<Array<DropdownOption>> = ref([]);

  const filters : Ref<{year: number, month: string, day: number}> = ref({
    year: 2025,
    month: 'May',
    day: 15
  });

  const currentDateCheckbox = ref(false);

  const disableDayInput = ref(false);

  const disableDateFilters = ref(false);

  const isFormOpen = ref(false);

  const schedules: Ref<Array<Schedule>> = ref([]);

  async function updateSchedules() {
    const requestFilters = {
      startTime: {
        start: buildISODateString(
        '00:01',
        filters.value.day, 
        filters.value.month, 
        filters.value.year
      ),
        end: buildISODateString(
        '23:59',
        filters.value.day, 
        filters.value.month, 
        filters.value.year
      ),
      }
    };

    try {
      const res = await request.get('schedule/all', {params: {filters: requestFilters}});
      if(res.status === 200) {
        notify(NotificationType.SUCCESS, 'Schecdules loaded');
        schedules.value = res.data;
      } else {
        notify(NotificationType.INFO, res.data);
      }

    } catch (error: any) {
      notify(NotificationType.ERROR, error.message);
      console.log(error);
    }

  }

  /**
   * Set filter to current date
   */
  function setCurrentDate() {
    const currentDate = new Date();
    filters.value.year = currentDate.getFullYear();
    filters.value.month = convertNumberToMonth(currentDate.getMonth());
    filters.value.day = currentDate.getDate();
  }

  /**
   * handle actions from current date checkbox
   */
  function handleCurrentDateCheckbox() {
    currentDateCheckbox.value = !currentDateCheckbox.value;
    if(currentDateCheckbox.value) {
      setCurrentDate();
      disableDateFilters.value = true;
    } else {
      disableDateFilters.value = false;
    }
  }

  watch(filters, () => {
    daysOptions.value = generateDaysOptions(filters.value.month, filters.value.year);
    updateSchedules();
  },{deep: true});

  /**
   * Validates schedule form
   * @param form 
   */
  function validateForm(form: Schedule) : string | undefined {
    let validated;
    Object.keys(form).forEach((fieldKey) => {
      const field =form[fieldKey as keyof Schedule];

      if(field === null || field === undefined) {
        validated = 'Missing Field';
      }
      if(typeof(field) === 'string') {
        if (field === '')
          validated = 'Missing Field';
      }
    });

    if(form.startTime > form.endTime) {
      validated = 'StartTime bigger than EndTime';
    }

    return validated;
  }

  /**
   * Sends rquest to create a new schedule
   * @param form 
   */
  async function createSchedule(form: Schedule) {
    const validation = validateForm(form);
    if(!validation) {
      
      form.startTime = buildISODateString(
        form.startTime,
        filters.value.day, 
        filters.value.month, 
        filters.value.year
      ); 
      form.endTime = buildISODateString(
        form.endTime,
        filters.value.day, 
        filters.value.month, 
        filters.value.year
      );

      try {
        const res = await request.post('/schedule', {form});
        if(res.status === 200) {
          notify(NotificationType.SUCCESS, 'Schecdule created !');
          isFormOpen.value = false;
          updateSchedules();
        } else {
          notify(NotificationType.INFO, res.data);
        }

      } catch (error: any) {
        notify(NotificationType.ERROR, error.message);
        console.log(error);
      }
    } else {
      notify(NotificationType.ERROR, validation);
    }
  }

  onMounted(() => {
    daysOptions.value = generateDaysOptions(filters.value.month, filters.value.year);
    updateSchedules();
  });

</script>

<style lang="scss">
  .schedulePage-container {
    height: 100%;
    font-family: $font-default;
  }
  .schedulePage--header {
    padding: 20px;
  }
  .schedulePage--filters {
    border-style: solid;
    border-radius: 5px;
    border-color: $light-grey-4;
    border-width: thin;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
    gap: 40px
  }
  .schedulePage--body {
    padding: 20px;
  }
  .schedulePage--body-form {
    border-style: solid;
    border-radius: 5px;
    border-color: $light-grey-4;
    border-width: thin;
    height: 100%;
    padding: 15px;
    gap: 40px
  }
  .schedulePage--body-newSchedule {
    display: flex;
    justify-content: end;
    padding-right: 20px;
  }
  .schedulePage--body-form-message {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .schedulePage--filter {
    width: auto;
  }
  .schedulePage--filter-label {
    font-size: 14px;
  }
  .schedulePage--filters-today {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>