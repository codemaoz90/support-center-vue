<template>
  <main class="faq container">
    <h1 class="text-center">Frenquently Asked Questions</h1>

    <!-- if we get an error! -->
    <div v-if="error" class="alert alert-danger" role="alert">
      Can't load the questions
    </div>

    <!--  Loading, while wait our fake data! -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border text-secondary tex-center" role="status">
        <span class="sr-only"></span>
      </div>
    </div>

    <section class="list mt-5">
      <article v-for="(question, index) of questions" :key="index">
        <h6 v-html="question.id + '. ' + question.title"></h6>
        <p v-html="question.body"></p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      error: null,
      loading: false
    }
  },
  created() {
    // fetch url jsonplacholder to return fake data =)
    this.loading = true
    setTimeout(async () => {
      this.loading = true
      try {
        this.questions = await this.$fetch("posts")
      } catch (e) {
        this.error = e
      }
      this.loading = false
    }, 1000)
  }
}
</script>

<style></style>
