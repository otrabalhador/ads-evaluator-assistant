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
  },
  setAspectRating: (state, payload) => {
    let index = payload.index
    let tag = payload.tag
    let rate = payload.rate
    state.aspectRating[index].tag = tag
    state.aspectRating[index].rate = rate
  }
}
