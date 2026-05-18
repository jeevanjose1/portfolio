'use client'

/**
 * This route is responsible for the Sanity Studio.
 * It's nested in /studio to separate it from the rest of the site.
 */

import { NextStudio } from 'next-sanity/studio'

import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
