<template>
  <div>
    <h3>Descripción general</h3>
    <p>
      {{ productToShow.desc || Lorem }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Description",
  data() {
    return {
      Lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo lorem eget imperdiet bibendum. Mauris et dui accumsan, pulvinar elit a, porttitor diam. Pellentesque volutpat metus eget libero efficitur faucibus. Sed eu nisi in neque tristique ullamcorper sit amet a leo. Sed vestibulum gravida nisl, nec condimentum augue ornare maximus. Morbi nisi nibh, efficitur a laoreet id, mollis vitae magna. Cras vel viverra purus. Vestibulum quis molestie ipsum, scelerisque luctus metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lacus tortor, porta nec odio a, hendrerit convallis massa. Proin diam tortor, tincidunt et posuere non, tempor sit amet libero. Aliquam vitae lectus metus. Donec id mi nec quam placerat luctus sed et justo. Pellentesque posuere pretium diam, sed porttitor metus consectetur ut. Maecenas sed turpis vel urna aliquet lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed venenatis varius diam maximus blandit. Test Text`,
    };
  },
  props: ["productToShow"],
};
</script>

<style>
p{
  font-size: 17px;
  margin-top: 30px;
}

</style>
