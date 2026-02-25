import React from 'react'
import CornersMenu from '@/components/Menu/CornersMenu'
import Projects from '@/components/Projects'
import { projects } from '../page'

function ContactPage() {
  return (
    <main className=' min-h-screen'>
        <CornersMenu />
        <Projects projects={projects} />
    </main>
  )
}

export default ContactPage