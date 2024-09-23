<template>
 <q-page padding>
    <!-- Table for displaying items -->
    <q-table
      :rows="items"
      :columns="columns"
      row-key="id"
      title="Items"
      separator="horizontal"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            icon="edit"
            color="primary"
            @click="openEditItemDialog(props.row)"
            flat
          />
        </q-td>
      </template>
    </q-table>
   </q-page> 
</template>

<script>
export default {
  data(){
   return{
    items: [],
    columns: [
      {name: 'id', label: 'Id', align: 'left', field: 'id'},
      {name: 'name', label: 'Name', align: 'left', field: 'name'},
      {name: 'description', label: 'Description', align: 'left', field: 'description'},

    ]

   }

  }
}
</script>
<style scoped>
.q-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>