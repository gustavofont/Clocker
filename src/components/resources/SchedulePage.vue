<template>
  <div class="schedulePage-container">
    <div class="schedulePage--header">
      <div class="schedulePage--filters">
        <div class="schedulePage--filter">
          <div class="schedulePage--filter-label">
            Year
          </div>
          <SelectDropdown
            :options="yearsOptions"
            :placeholder="'teste3'"
            :width="'200px'"
            :default="'2025'"
          />
        </div>
        <div class="schedulePage--filter">
          <div class="schedulePage--filter-label">
            Month
          </div>
          <SelectDropdown
            :options="[
              {
                label: 'teste1',
                value: 'value1'
              },
              {
                label: 'teste2',
                value: 'value2'
              }]"
            :placeholder="'November'"
            :width="'200px'"
          />
        </div>
        <div class="schedulePage--filter">
          <div class="schedulePage--filter-label">
            Day
          </div>
          <SelectDropdown
            :options="[
              {
                label: 'teste1',
                value: 'value1'
              },
              {
                label: 'teste2',
                value: 'value2'
              }]"
            :placeholder="'7'"
            :width="'200px'"
            :disabled="true"
          />
        </div>
        <div class="schedulePage--filters-today">
          <ButtonComponent
            :type="ButtonType.SECONDARY"
            :text="'Today'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SelectDropdown from '../basicComponents/SelectDropdown.vue';
  import ButtonComponent from '../basicComponents/ButtonComponent.vue';
  import { ButtonType } from '@src/enums/buttonEnum';
  import { generateYearsOptionsByRange } from '@src/utils/dataGenerator';

  const yearsOptions = generateYearsOptionsByRange(20);
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
  }
</style>