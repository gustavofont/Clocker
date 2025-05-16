<template>
  <div class="scheduleForm">
    <div class="scheduleForm--header">
      <IconComponent
        class="scheduleForm--header-closeButton"
        :icon-name="'close'"
        @click="()=> emit('close-form')"
      />
    </div>
    <div class="scheduleForm--container-title">
      New Schedule
    </div>
    <div class="scheduleForm--container">
      <div class="scheduleForm--container-main">
        <div class="scheduleForm--container-field">
          <div class="scheduleForm--container-field-label">
            Title
          </div>
          <div class="scheduleForm--container-field-input">
            <InputComponent v-model="form.title" />
          </div>
        </div>
        <div class="scheduleForm--container-field">
          <div class="scheduleForm--container-field-label">
            Start
          </div>
          <div class="scheduleForm--container-field-input">
            <InputComponent v-model="form.startTime" />
          </div>
        </div>
        <div class="scheduleForm--container-field">
          <div class="scheduleForm--container-field-label">
            End
          </div>
          <div class="scheduleForm--container-field-input">
            <InputComponent v-model="form.endTime" />
          </div>
        </div>
        <div class="scheduleForm--container-field">
          <div class="scheduleForm--container-field-label">
            Description
          </div>
          <div class="scheduleForm--container-field-input">
            <InputComponent v-model="form.description" />
          </div>
        </div>
      </div>
      <div class="scheduleForm--container-sideFields">
        <div class="scheduleForm--container-field">
          <div class="scheduleForm--container-field-label">
            Tag
          </div>
          <SelectDropdown
            v-model="form.tag"
            :options="tagOptions"
            :placeholder="'Google Calendar'"
            :width="'200px'"
          />
        </div>
        <div class="scheduleForm--container-checkbox">
          <CheckboxComponent @update:model-value="(value) => form.allDay = value" />
          <div class="scheduleForm--container-field-label">
            AllDay
          </div>
        </div>
        <div class="scheduleForm--container-checkbox">
          <CheckboxComponent @update:model-value="(value) => form.notify = value" />
          <div class="scheduleForm--container-field-label">
            Notify
          </div>
        </div>
        <div>
          {{ form }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Ref, ref } from 'vue';
  import CheckboxComponent from './basicComponents/CheckboxComponent.vue';
  import SelectDropdown from './basicComponents/SelectDropdown.vue';
  import { DropdownOption } from '@src/types/menus';
  import { Schedule } from '@src/types/schedule';
  import IconComponent from './basicComponents/IconComponent.vue';
  import InputComponent from './basicComponents/InputComponent.vue';

  const emit = defineEmits(['close-form']);

  const form: Ref<Schedule> = ref({
    title: '',
    startTime: '',
    endTime: '',
    description: '',
    tag: '',
    allDay: false,
    notify: false,
  });

  const tagOptions : DropdownOption[] = [
    {
      label: 'Outlook',
      value: 'Outlook',
    },
  ];

</script>

<style lang="scss">
 .scheduleForm--container {
  width: 100%;
  display: flex;
  font-size: 14px;
 }

 .scheduleForm--header {
  width: 100%;
  display: flex;
  justify-content: right;
 }

 .scheduleForm--header-closeButton:hover {
  background-color: $light-grey-1;
 }

 .scheduleForm--container-title {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
 }

 .scheduleForm--container-main {
  width: 60%;
 }

 .scheduleForm--container-sideFields {
  width: 40%;
 }

 .scheduleForm--container-checkbox {
  display: flex;
  align-items: center;
 }

 .scheduleForm--container-selectDropdown {
  display: flex;
  align-items: center;
  gap: 5px;
 }
</style>