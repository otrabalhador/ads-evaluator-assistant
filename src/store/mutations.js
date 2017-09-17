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
  },
  setAspectRatingWhy: (state, payload) => {
    let index = payload.index
    let why = payload.why
    state.aspectRating[index].why = why
  },
  reset: state => {
    state.aboutAd = ''
    state.overallRating = ''
    state.aspectRating = [{'rate': '', 'tag': '', 'why': ''}, {'rate': '', 'tag': '', 'why': ''}]
  }
}
