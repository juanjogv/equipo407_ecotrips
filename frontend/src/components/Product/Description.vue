<template>
	<div>
		<h3>Descripción general</h3>
		<p>
			{{ productToShow.desc || SampleText }}
		</p>
	</div>
</template>

<script>
import * as Constants from '@/Constants';
export default {
	name: "Description",
  props: ["productToShow"],
	data() {
		return {
			SampleText: Constants.SAMPLE_TEXT_1,
		};
	}
};
</script>

<style>
p {
	font-size: 17px;
	margin-top: 30px;
}
</style>
