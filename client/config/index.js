export const main = {
  appName: 'FancySurvey'
}

export const pages = {
  rootSlug: '/',
  admin: {
    root: {
      slug: 'admin',
      title: 'Admin'
    },
    create: {
      slug: 'create',
      title: 'New Question'
    },
    list: {
      slug: 'list',
      title: 'List Responses'
    },
  },
  survey: {}
}

export default {
  ...{main},
  ...{pages}
}
