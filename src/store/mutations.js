export default {
  aboutAd: (state, input) => {
    state.aboutAd = input
  },
  overallRating: (state, rate) => {
    state.overallRating = rate
  },
  aspectRating: (state, content) => {
    state.aspectRating[content.index] = {
      rate: content.rate,
      tag: content.tag,
      why: content.tag
    }
  }
}
