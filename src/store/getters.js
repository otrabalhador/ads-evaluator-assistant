const templates = [
  'This ad is about {{aboutAd}}. ' +
  'I find it {{firstAspectText}} because {{firstAspectWhy}}. ' +
  'I also find it {{secondAspectText}} because {{secondAspectWhy}}. ' +
  'Therefore, I {{overallRatingText}}.',

  'I {{overallRatingText}} about {{aboutAd}}. ' +
  'It\'s {{firstAspectText}}, since {{firstAspectWhy}}. ' +
  'I find it to be {{secondAspectText}} because {{secondAspectWhy}}.'
]

export default {
  aboutAd: state => state.aboutAd,
  firstAspect: () => {
    return {
      text: 'not relevant',
      why: 'I don\'t have a dog'
    }
  },
  secondAspect: () => {
    return {
      text: 'not relevant',
      why: 'I don\'t have a dog'
    }
  },
  overallRatingText: () => {
    return 'don\'t mind seeing this ad'
  },
  overallRatingTextQualifier: () => {
    return 'cool'
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
    let randomNumber = Math.floor(Math.random() * templates.length)
    return templates[randomNumber].replace(/{{\w+}}/g, all => {
      return getters.placeholders[all] || all
    })
  }
}
