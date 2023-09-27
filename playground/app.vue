<script lang="ts" setup>
import { useNuxtApp } from './.nuxt/imports'

const { $dayjs: dayjs } = useNuxtApp()
// const dayjs = useDayjs()
const card = false
const icon = false
</script>

<template>
  <div>
    <module-icon v-if="icon" />
    <module-card v-else-if="card" />
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Current time</td>
          <td> dayjs().format('dd, DD MMM YYYY HH:mm:ss')</td>
          <td>{{ dayjs().format('dd, DD MMM YYYY HH:mm:ss') }}</td>
        </tr>
        <tr>
          <td>Relative Time</td>
          <td> dayjs("2023-01-01").FromNow()</td>
          <td> {{ dayjs("2023-01-01").fromNow() }} </td>
        </tr>
        <tr>
          <td>UTC Time</td>
          <td>dayjs().utc().format('dd, DD MMM YYYY HH:mm:ss')</td>
          <td> {{ dayjs().utc().format('dd, DD MMM YYYY HH:mm:ss') }}</td>
        </tr>
        <tr>
          <td>Week Start</td>
          <td>dayjs().startOf('week').format('dddd')</td>
          <td> {{ dayjs().startOf('week').format('dddd') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  font-size: 1.2em;
  color: #333;
  margin: 20px auto;
  padding: 30px;
  border: 1px solid #ccc;
}
table tr {
  border: 1px solid #ccc;
}

table td {
  width: 300px;
  padding: 10px;
}

.row > label {
  width: 400px;
  text-align: right;
}
</style>
