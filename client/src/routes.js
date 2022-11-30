import React from 'react'

const TablesJson = React.lazy(() => import('./views/json/JsonListe'))
const JsonShow = React.lazy(() => import('./views/json/JsonShow'))
const JsonNew = React.lazy(() => import('./views/json/JsonNew'))
const JsonEdit = React.lazy(() => import('./views/json/JsonEdit'))
const ReportingList = React.lazy(() => import('./views/reporting/ReportingList'))
const Training = React.lazy(() => import('./views/training/Training.js'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/json', name: 'Json Liste', element: TablesJson },
  { path: '/json/new', name: 'New Json', element: JsonNew },
  { path: '/json/:_id', name: 'Json details', element: JsonShow },
  { path: '/json/:_id/edit', name: 'Edite Json', element: JsonEdit },
  { path: '/reporting', name: 'Rapport', element: ReportingList },
  { path: '/training', name: 'Entrainement', element: Training },
]

export default routes
