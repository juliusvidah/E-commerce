import React, { Suspense } from 'react'
import { routeData } from './routes'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Suspense  fallback={<div>loading...</div>}>
        <Routes>
            {
             routeData.map(each=> (
                <Route key={each.id} path={each.to} element={each.element}/>
             ))   
            }
        </Routes>
    </Suspense>
  )
}

export default Router