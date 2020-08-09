<template>
  <div class="main">

    <h1>This is a Button & Icons page</h1>
    <v-container>
      <v-row align="center">
        <!-- ボタン -->
        <!--  size prop  -->
        <v-col class="text-center">
          <div class="my-2">
            <v-btn small>small</v-btn>
          </div>
          <div class="my-2">
            <v-btn>default</v-btn>
          </div>
          <div class="my-2">
            <v-btn large>large</v-btn>
          </div>
        </v-col>

        <!--  Text prop  -->
        <v-col class="text-center">
          <div class="my-2">
            <v-btn text>text</v-btn>
          </div>
          <div class="my-2">
            <v-btn text color="primary">text primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn text color="error">text error</v-btn>
          </div>
        </v-col>

        <!--   depressed prop   -->
        <v-col class="text-center">
          <div class="my-2">
            <v-btn depressed>depressed</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed color="primary">depressed primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed color="error">depressed error</v-btn>
          </div>
        </v-col>

        <v-col class="text-center">
          <div class="my-2">
            <v-btn fab>fab</v-btn>
          </div>
          <div class="my-2">
            <v-btn fab depressed class="grey">fab depressed grey</v-btn>
          </div>
          <div class="my-2">
            <v-btn fab>
              <v-icon>usb</v-icon>
            </v-btn>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>