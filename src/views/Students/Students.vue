<template>
  <v-app>

    <v-sheet max-height="700">

      <v-simple-table dense>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Avatar
            </th>
            <th class="text-left">
              First Name
            </th>
            <th class="text-left">
              Last Name
            </th>
            <th class="text-left">
              User Name
            </th>
            <th class="text-left">
              Subjects
            </th>
            <th class="text-left">
              Sratus
            </th>
            <th class="text-left">
              Result
            </th>
            <th class="text-left">
              Actions
            </th>

          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in desserts"
              :key="item.key"
          >
            <td>
              <v-list-item-avatar>
                <img src="../../assets/Acer-Nitro-5-DB-749x800-1591861689.png">
              </v-list-item-avatar>
            </td>
            <td>{{ item.Firstname }}</td>
            <td>{{ item.lastname }}</td>
            <td>{{ item.Username }}</td>
            <td>{{ item.Subjcts }}</td>
            <td>
              <v-chip
                  class="ma-2"
                  color="red"
                  text-color="white"
              >
                {{ item.Status }}
              </v-chip>
            </td>
            <td>{{ item.Resault }}</td>
            <td>
              <v-btn
                  dark
                  icon
                  color="red"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </td>

          </tr>
          </tbody>
        </template>
      </v-simple-table>

    </v-sheet>

  </v-app>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      desserts: [
        {
          key:1,
          Avatarimg: 'Frozen Yogurt',
          Firstname: 'Eljahon',
          lastname: 'sdfgh',
          Username: 'oybek',
          Subjcts: 'fanalr',
          Status: "100%",
          Resault: 'salom',
          Actions: 'salom'
        },
        {
          key:2,
          Avatar: 'Frozen Yogurt',
          Firstname: 'Eljahon',
          lastname: 'sdfgh',
          Username: 'oybek',
          Subjcts: 'fanalr',
          Status: "100%",
          Resault: 'salom',
          Actions: 'salom'
        },
        {key:3,
          Avatar: 'Frozen Yogurt',
          Firstname: 'Eljahon',
          lastname: 'sdfgh',
          Username: 'oybek',
          Subjcts: 'fanalr',
          Status: "100%",
          Resault: 'salom',
          Actions: 'salom'
        },
        {key:4,
          Avatar: 'Frozen Yogurt',
          Firstname: 'Eljahon',
          lastname: 'sdfgh',
          Username: 'oybek',
          Subjcts: 'fanalr',
          Status: "100%",
          Resault: 'salom',
          Actions: 'salom'
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>