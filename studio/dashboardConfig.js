export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de2ccbd85e199583b8175d8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zb6apxvi',
                  apiId: '4fb245dd-3395-49a0-8151-5259e2e2e97a'
                },
                {
                  buildHookId: '5de2ccbd85e199c34f8175fe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d5mkntc4',
                  apiId: 'db99db1b-0e05-4a5c-ae39-5b8e1c6f7d43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/agraver/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d5mkntc4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
