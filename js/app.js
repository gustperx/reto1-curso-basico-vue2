const app = new Vue({
  el: "#app",
  data() {
    return {
      courses: [],
      title: "",
      time: 1,
    };
  },
  computed: {
    totalTime() {
      let total = 0;
      this.courses.forEach((course) => {
        total += parseInt(course.time);
      });
      return total;
    },
  },
  methods: {
    addCourse() {
      this.courses.push({
        title: this.title,
        time: this.time,
      });
      this.title = "";
      this.time = 1;
    },
    removeCourse(index) {
      const course = this.courses.splice(index, 1);
    },
  },
});
