<template>
  <div class="home">
    <h1>This is a Text & Colors page</h1>

    <!--  クラス名に色を記入することで要素の色を指定できる  -->
    <p class="red">red</p>
    <!--  クラス名に {色名}--text と記入することでテキスト色を指定できる  -->
    <p class="red--text">red--test</p>
    <!-- lighten-{数字}で明るさを上げられ、darken-{数字}で明るさを下げられる -->
    <p class="red lighten-4 red--text text--darken-4">red lighten-4 red--text text--darken-4</p>

    <!--  display-{数字}で文字サイズを変更できる（その他キーワード有）  -->
    <h1 class="display-4">display-4</h1>
    <h4 class="display-1">display-1</h4>
    <p class="headline">headline</p>
    <p class="subheading">subheading</p>
    <p class="caption">caption</p>

    <!--  クラス名のテーマに沿った色が用意されている  -->
    <p class="success">success</p>
    <p class="warning">warning</p>
    <p class="error">error</p>
    <p class="info">info</p>
  </div>
</template>