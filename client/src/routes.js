import React from 'react'

const TablesJson = React.lazy(() => import('./views/json/JsonListe'))
const JsonShow = React.lazy(() => import('./views/json/JsonShow'))
const JsonNew = React.lazy(() => import('./views/json/JsonNew'))
const JsonEdit = React.lazy(() => import('./views/json/JsonEdit'))
const ReportingList = React.lazy(() => import('./views/reporting/ReportingList'))
const Training = React.lazy(() => import('./views/training/Training.js'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/json', name: 'Tags Liste', element: TablesJson },
  { path: '/json/new', name: 'Nouveau Tag', element: JsonNew },
  { path: '/json/:_id', name: 'Detail Tag', element: JsonShow },
  { path: '/json/:_id/edit', name: 'Modification Tag', element: JsonEdit },
  { path: '/reporting', name: 'Historique', element: ReportingList },
  { path: '/training', name: 'Entrainement', element: Training },
]

export default routes
