export default {
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>
  `,
  setup() {
    let count = 0; // Reactive variable for button clicks

    const increment = () => {
      count++
    }

    return {
      count,
      increment
    }
  }
}
