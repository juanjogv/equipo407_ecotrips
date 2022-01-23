<template>
	<form>
		<div class="form-inner">
			<h2>Registrarse</h2>
			<div class="form-group">
				<label htmlFor="name">Nombre:</label>
				<input ref="name" type="text" name="first-name" id="first-name" v-model="user_first_name" />
			</div>
			<div class="form-group">
				<label htmlFor="name">Apellido:</label>
				<input ref="lastname" type="text" name="last-name" id="last-name" v-model="user_last_name" />
			</div>
			<div class="form-group">
				<label htmlFor="name">Documento de Identidad:</label>
				<input ref="id" type="text" name="idUser" id="idUser" v-model="user_id" />
			</div>
			<div class="form-group">
				<label htmlFor="email">Correo electrónico:</label>
				<input ref="email" type="email" name="email" id="emailSignin" v-model="user_email" />
			</div>
			<div class="form-group">
				<label htmlFor="password">Contraseña:</label>
				<input type="password" ref="password" name="password" id="passwordSignin" v-model="user_password" />
			</div>
			<div class="row">
				<div class="col botonIzq">
					<input type="submit" value="Registrarse" @click.prevent="submit" />
				</div>
				<div class="col botonDer">
					<input type="button" value="Iniciar Sesión" @click="changeVisibility" />
				</div>
			</div>
		</div>
	</form>
</template>
<script>
import axios from "axios";
import router from "@/router/index";
import { mapActions } from "vuex";
export default {
	props: {
		method: { type: Function },
	},
	data() {
		return {
			user_first_name: "",
			user_last_name: "",
			user_id: "",
			user_email: "",
			user_password: "",
		};
	},
	watch: {
		user_first_name: function () {
			if (this.$refs.name.classList !== "") {
				this.$refs.name.classList = "";
			}
		},
		user_last_name: function () {
			if (this.$refs.lastname.classList !== "") {
				this.$refs.lastname.classList = "";
			}
		},
		user_id: function () {
			if (this.$refs.id.classList !== "") {
				this.$refs.id.classList = "";
			}
		},
		user_email: function () {
			if (this.$refs.email.classList !== "") {
				this.$refs.email.classList = "";
			}
		},
		user_password: function () {
			if (this.$refs.password.classList !== "") {
				this.$refs.password.classList = "";
			}
		},
	},
	methods: {
		...mapActions(["changeShowAuthErrRegister"]),
		handleChangeValidatingInformation() {
			console.log("e");
		},
		//method for validate information
		verification() {
			let sw = true;
			if (this.user_first_name === "") {
				this.$refs.name.classList = "error_no_write";
				sw = false;
			}
			if (this.user_last_name === "") {
				this.$refs.lastname.classList = "error_no_write";
				sw = false;
			}
			if (this.user_id === "") {
				this.$refs.id.classList = "error_no_write";
				sw = false;
			}
			if (this.user_email === "") {
				this.$refs.email.classList = "error_no_write";
				sw = false;
			}
			if (this.user_password === "") {
				this.$refs.password.classList = "error_no_write";
				sw = false;
			}
			return sw;
		},
		submit() {
			if (this.verification()) {
				let newUser = {
					user_first_name: this.user_first_name,
					user_last_name: this.user_last_name,
					user_id: this.user_id,
					user_email: this.user_email,
					user_password: this.user_password,
				};
				axios.post(`${process.env.VUE_APP_BACKEND_URL}/signin`, newUser).then((res) => {
					if (res.data.valid) {
						localStorage.setItem("user_email", this.user_email);
						router.push("/home");
					} else {
						alert(res.data.msg);
					}
				});
			} else {
				this.changeShowAuthErrRegister();
			}
		},
		changeVisibility() {
			this.method();
		},
	},
};
</script>
<style scoped>
@import "../Styles/AuthForms.css";
</style>
