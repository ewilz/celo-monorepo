import * as React from 'react'
import Page, { CIRCLES_PATH, ROUTE_TO_TITLE } from 'src/experience/eventkit/Page'
import Section from 'src/experience/eventkit/Section'
import { NameSpaces, useTranslation } from 'src/i18n'
import { hashNav } from 'src/shared/menu-items'

const sections = [hashNav.eventCircles.overview].map((id) => {
  return {
    id,
    children: <Section content={require(`src/experience/eventkit/content/circles/${id}.md`)} />,
  }
})
export default function Ambassador() {
  const { t } = useTranslation(NameSpaces.eventskit)
  return (
    <Page
      title={ROUTE_TO_TITLE[CIRCLES_PATH]}
      path={CIRCLES_PATH}
      metaDescription={t('flavor.introduction')}
      sections={sections}
    />
  )
}