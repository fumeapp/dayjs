<script lang="ts" setup>
import { useNuxtApp } from '#app'
const { $dayjs: dayjs } = useNuxtApp()
</script>

<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Code</th>
        <th>Result</th>
      </tr>
      <tr>
        <td>Current time</td>
        <td> $dayjs()</td>
        <td>{{ dayjs() }}</td>
      </tr>
      <tr>
        <td>Relative Time</td>
        <td> dayjs("2023-01-01").FromNow()</td>
        <td> {{ dayjs("2023-01-01").fromNow() }} </td>
      </tr>
      <tr>
        <td>UTC Time</td>
        <td>dayjs().utc</td>
        <td> {{ dayjs().utc() }}</td>
      </tr>
    </table>
  </div>
</template>

<style>
.row  {
  display: flex;
}
.row > label, .row > time {
  font-size: 1.2em;
  color: #333;
  padding: 20px;
}

.row > label {
  width: 400px;
  text-align: right;
}
</style>
