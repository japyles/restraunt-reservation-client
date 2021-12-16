import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import NewReservation from '../dashboard/NewReservation'
import EditReservation from '../dashboard/EditReservation'
import NewTable from '../tables/NewTable'
import Seating from '../seating/Seating'
import Search from '../search/Search'
import NotFound from './NotFound'
import { today } from '../utils/data-time'

function Routes() {
    
    return (
        <Switch>
            <Route exact={true} path='/'>
                <Redirect to={'/dashboard'} />
            </Route>
            <Route exact={true} path='/reservations/:reservation_id/seat'>
                <Seating />
            </Route>
            <Route exact={true} path='/reservations/new'>
                <NewReservation date={today()} />
            </Route>
            <Route exact={true} path='/reservations'>
                <Redirect to={'/dashboard'} />
            </Route>
            <Route exact={true} path='/reservations/:reservation_id/edit'>
                <EditReservation />
            </Route>
            <Route exact={true} path='/tables/new'>
                <NewTable />
            </Route>
            <Route exact={true} path={'/search'}>
                <Search />
            </Route>
            <Route exact={true} path='/dashboard'>
                <Dashboard />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes