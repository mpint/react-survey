export const main = {
  appName: 'ReactSurvey'
}

export const pages = {
  rootSlug: '/',
  credits: {
    slug: 'credits',
    title: 'Credits'
  },
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
