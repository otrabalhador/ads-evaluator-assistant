import templates from './models/templates'
import aspectRating from './models/aspectRating'
import overallRating from './models/overallRating'
import overalRatingQualifier from './models/overalRatingQualifier'

const randomFromList = (list) => {
  return list[Math.floor(Math.random() * list.length)]
}

const extractFromAspectRatingIndex = (aspectRatingObj) => {
  let tag = aspectRatingObj.tag
  let rate = aspectRatingObj.rate
  let text = aspectRating[tag][rate]
  let why = aspectRatingObj.why
  return {
    text: text,
    why: why
  }
}

export default {
  aboutAd: state => state.aboutAd,
  aspects: state => state.aspects,
  overallRating: state => state.overallRating,
  nthAspectSelectArray: (state) => {
    return index => {
      let aspect = state.aspectRating[index]
      return [aspect.tag]
    }
  },
  firstAspect: (state) => {
    return extractFromAspectRatingIndex(state.aspectRating[0])
  },
  secondAspect: (state) => {
    return extractFromAspectRatingIndex(state.aspectRating[1])
  },
  overallRatingText: (state) => {
    return randomFromList(overallRating[state.overallRating])
  },
  overallRatingTextQualifier: (state) => {
    return randomFromList(overalRatingQualifier[state.overallRating])
  },
  placeholders: (state, getters) => {
    return {
      '{{aboutAd}}': getters.aboutAd,
      '{{firstAspectText}}': getters.firstAspect.text,
      '{{firstAspectWhy}}': getters.firstAspect.why,
      '{{secondAspectText}}': getters.secondAspect.text,
      '{{secondAspectWhy}}': getters.secondAspect.why,
      '{{overallRatingText}}': getters.overallRatingText,
      '{{overallRatingTextQualifier}}': getters.overallRatingTextQualifier
    }
  },
  generatedComment: (state, getters) => {
    return randomFromList(templates).replace(/{{\w+}}/g, all => {
      return getters.placeholders[all] || all
    })
  }
}
