<template>
  <v-app>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="itemsPerPage"
        :sort-by.sync="sortField"
        :sort-desc.sync="sortDesc"
        :loading="loading"
        @update:items-per-page="updateItemsPerPage"
        @update:sort-by="updateSortField"
        @update:sort-desc="updateSortOrder"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.txt }}</td>
            <td>{{ item.cc }}</td>
            <td>{{ item.rate }}</td>
            <td>{{ item.exchangedate }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import apiUrl from './links.js';

export default {
  data() {
    return {
      headers: [
        { text: 'Text', value: 'txt' },
        { text: 'Currency Code', value: 'cc' },
        { text: 'Exchange Rate', value: 'rate' },
        { text: 'Date', value: 'exchangedate' },
      ],
      loading: true,
      items: [],
    };
  },
  computed: {
    ...mapState([
      'itemsPerPage',
      'sortField',
      'sortDesc',
    ]),
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapMutations([
      'setItemsPerPage',
      'setSortField',
      'setSortOrder',
    ]),
    fetchData() {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.items = data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          this.loading = false;
        });
    },
    updateItemsPerPage(value) {
      this.setItemsPerPage(value);
      localStorage.setItem('itemsPerPage', value);
    },
    updateSortField(value) {
      this.setSortField(value);
      localStorage.setItem('sortField', value);
    },
    updateSortOrder(value) {
      this.setSortOrder(value ? 'desc' : 'asc');
      localStorage.setItem('sortOrder', value ? 'desc' : 'asc');
    },
  },
};
</script>
