import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const TablesJson = React.lazy(() => import('./views/json/JsonListe'))
const JsonShow = React.lazy(() => import('./views/json/JsonShow'))
const JsonNew = React.lazy(() => import('./views/json/JsonNew'))
const JsonEdit = React.lazy(() => import('./views/json/JsonEdit'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/dashboard/json', name: 'Json Liste', element: TablesJson },
  { path: '/dashboard/json/new', name: 'New Json', element: JsonNew },
  { path: '/dashboard/json/:_id', name: 'Json details', element: JsonShow },
  { path: '/dashboard/json/:_id/edit', name: 'Edite Json', element: JsonEdit },
]

export default routes
