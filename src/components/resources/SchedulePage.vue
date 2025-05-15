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
    <div class="schedulePage--body">
      <div class="schedulePage--body-form">
        <div class="schedulePage--body-form-message">
          No schedule for this date
        </div>
        <ButtonComponent
          v-if="!isFormOpen"
          :type="ButtonType.PRIMARY"
          :text="'New'"
          :width="'100px'"
          @click="()=> isFormOpen = !isFormOpen"
        />
        <ScheduleForm v-if="isFormOpen" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Ref, ref, watch } from 'vue';
  import SelectDropdown from '../basicComponents/SelectDropdown.vue';
  import { convertNumberToMonth, generateDaysOptions, generateMonthsOptions, generateYearsOptionsByRange } from '@src/utils/dataGenerator';
  import IconComponent from '../basicComponents/IconComponent.vue';
  import { DropdownOption } from '@src/types/menus';
  import ScheduleForm from '../ScheduleForm.vue';
  import ButtonComponent from '../basicComponents/ButtonComponent.vue';
  import { ButtonType } from '@src/enums/buttonEnum';

  const yearsOptions = generateYearsOptionsByRange(20);
  const monthsOptions = generateMonthsOptions();
  const daysOptions: Ref<Array<DropdownOption>> = ref([]);

  const filters : Ref<{year: number | undefined, month: string | undefined, day: number | undefined}> = ref({
    year: undefined,
    month: undefined,
    day: undefined
  });

  const currentDateCheckbox = ref(false);

  const disableDayInput = ref(true);

  const disableDateFilters = ref(false);

  const isFormOpen = ref(false);

  /**
   * Set filter to current date
   */
  function setCurrentDate() {
    const currentDate = new Date();
    filters.value.year = currentDate.getFullYear();
    filters.value.month = convertNumberToMonth(currentDate.getMonth());
    filters.value.day = currentDate.getDate();
  }

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
    if(filters.value.month && filters.value.year) {
      daysOptions.value = generateDaysOptions(filters.value.month, filters.value.year);
      disableDayInput.value = false;
    }
  },{deep: true});

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
  .schedulePage--body-form-message {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .schedulePage--filter {
    width: auto;
    display: flex;
    align-items: center;
    gap: 3px;
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