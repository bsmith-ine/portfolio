import { Outlet, useLocation } from 'react-router-dom'

import { Container, Stack } from '@mui/material'

import { LayoutAppFooter } from 'components/LayoutAppFooter'
import { LayoutAppHeader } from 'components/LayoutAppHeader'
import { LayoutViewHeader } from 'components/LayoutViewHeader'

import {
  ROUTE_PATH_ABOUT,
  ROUTES_PATH_TO_LABEL_MAP,
} from 'constants/routes.constants'

export const LayoutHome = () => (
  <>
    <LayoutAppHeader />
    <Stack component="main" height="100%">
      <Outlet />
      <LayoutAppFooter />
    </Stack>
  </>
)

export const LayoutDefault = () => {
  const { pathname } = useLocation()

  const isWideLayout = [ROUTE_PATH_ABOUT].includes(pathname)
  const viewTitle = ROUTES_PATH_TO_LABEL_MAP?.[pathname] ?? '404 - Not Found'

  return (
    <>
      <LayoutAppHeader />
      <Stack component="main" height="100%">
        <LayoutViewHeader title={viewTitle} />
        <Container
          sx={{ py: 10, flexGrow: 1 }}
          disableGutters={isWideLayout}
          maxWidth={isWideLayout ? false : 'lg'}
        >
          <Outlet />
        </Container>
        <LayoutAppFooter />
      </Stack>
    </>
  )
}
