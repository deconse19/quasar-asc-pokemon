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

    <!-- Button to open Add Item dialog -->
    <q-btn label="Add Item" color="primary" @click="openAddItemDialog" />

    <!-- Dialog for Add/Edit Item -->
    <q-dialog v-model="dialogVisible" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ isEditMode ? 'Edit Item' : 'Add Item' }}</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="itemForm.name"
            label="Item Name"
            outlined
            :rules="[val => !!val || 'Name is required']"
          />
          <q-input
            v-model="itemForm.description"
            label="Description"
            outlined
            type="textarea"
            :rules="[val => !!val || 'Description is required']"
            style="margin-top: 1rem;"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancel" color="secondary" flat @click="dialogVisible = false" />
          <q-btn label="Save" color="primary" @click="saveItem" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { api } from 'boot/axios';

export default {
  data() {
    return {
      items: [], // List of items
      dialogVisible: false, // Visibility of the dialog
      itemForm: { // Form data for item
        id: null,
        name: '',
        description: ''
      },
        isEditMode: false, // Indicates if in edit mode
      columns: [ // Table columns
        { name: 'id', label: 'ID', align: 'left', field: 'id' },
        { name: 'name', label: 'Name', align: 'left', field: 'name' },
        { name: 'description', label: 'Description', align: 'left', field: 'description' },
        { name: 'actions', label: 'Actions', align: 'center' }
      ]
    };
  },
  methods: {
    // Fetch all items from Spring Boot backend
    async fetchItems() {
      try {
        const response = await api.get('/items');
        this.items = response.data;
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },

    // Open the dialog to add a new item
    openAddItemDialog() {
      this.isEditMode = false;
      this.itemForm = { id: null, name: '', description: '' };
      this.dialogVisible = true;
    },

    // Open the dialog to edit an item
    openEditItemDialog(item) {
      this.isEditMode = true;
      this.itemForm = { ...item };
      this.dialogVisible = true;
    },

    // Save the item (either create or update)
    async saveItem() {
      if (this.isEditMode) {
        await this.updateItem();
      } else {
        await this.createItem();
      }
      this.dialogVisible = false;
      this.fetchItems(); // Refresh the list
    },

    // Create a new item
    async createItem() {
      try {
        await api.post('/create/item', {
          name: this.itemForm.name,
          description: this.itemForm.description
        });
      } catch (error) {
        console.error('Error creating item:', error);
      }
    },

    // Update an existing item
    async updateItem() {
      try {
        await api.put(`/update/item/${this.itemForm.id}`, {
          name: this.itemForm.name,
          description: this.itemForm.description
        });
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }
  },
  mounted() {
    this.fetchItems(); // Fetch items when the page loads
  }
};
</script>

<style scoped>
.q-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
