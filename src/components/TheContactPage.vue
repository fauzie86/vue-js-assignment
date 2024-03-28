<template>
  <h1>Contact Us</h1>
  <p>Use the form below to drop us an e-mail</p>
  <div id="app">
    <form>
      <tr>
        <td><label for="firstName"></label>
          <input type="text" id="firstName" v-model="formData.firstName" placeholder="First Name*" required/>
        </td>
        <td>
          <label for="lastName"></label>
          <input type="text" id="lastName" v-model="formData.lastName" placeholder="Last Name*" required />
        </td>
      </tr>
      <tr>
        <td>
          <label for="email"></label>
          <input type="email" id="email" v-model="formData.email" placeholder="Email*" required/>
        </td>
        <td>
          <label for="mobile"></label>
          <input type="tel" id="mobile" v-model="formData.mobile" placeholder="Phone Number" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="website"></label>
          <input type="text" id="website" v-model="formData.website" placeholder="Website" />
        </td>
        <td>
          <label for="company"></label>
          <input type="text" id="company" v-model="formData.company" placeholder="Company" />
        </td>
      </tr>
      <tr>
        <label for="message">What Can We Do For You?</label>
        <textarea id="message" v-model="formData.message" placeholder="What Can We Do For You?"></textarea><br>
        <button type="submit">Send It</button>
      </tr>
    </form>

    <div v-if="submitted">
      <p>Thank you for reaching out! We'll get back to you soon.</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        website: '',
        company: '',
        message: '',
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        website: '',
        company: '',
        message: '',
      };
      this.submitted = true;
    }
  }
};
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: auto;
    background-color: aliceblue;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
input, textarea {
    width: 100%;
    padding: 1rem;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button{
    padding: 1rem;
    font-size: 20px;
  }
</style>
