export const main = {
  appName: 'FancySurvey'
}

export const pages = {
  rootSlug: '/',
  admin: {
    slug: 'admin'
  },
  survey: {}
}

export default {
  ...{main},
  ...{pages}
}
