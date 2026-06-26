import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const path = (rel) => fileURLToPath(new URL(rel, import.meta.url))
const read = (rel) => readFileSync(path(rel), 'utf8')

const doc = new JSDOM(read('../src/index.html')).window.document

// JSDOM does not compute layout, so the grid/flex rules are graded from the
// stylesheet text. Comments are stripped (so the TODO hints don't count) and
// whitespace removed so "display: grid" and "display:grid" both match.
const cssPath = path('../src/styles.css')
const cssFlat = (existsSync(cssPath) ? readFileSync(cssPath, 'utf8') : '')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, '')
  .toLowerCase()

describe('Activity 2 – Projects grid + components-as-classes', () => {
  it('links styles.css and the stylesheet has rules in it', () => {
    expect(doc.querySelector('link[rel="stylesheet"][href]'), 'Keep styles.css linked from the head').not.toBeNull()
    expect(cssFlat.length, 'styles.css looks empty').toBeGreaterThan(0)
  })

  it('uses the stylesheet only (no style="" attributes)', () => {
    expect(doc.querySelectorAll('[style]').length, 'No inline style="" - put it in styles.css').toBe(0)
  })

  it('has a .projects container with at least three .card components', () => {
    const grid = doc.querySelector('.projects')
    expect(grid, 'Keep the <section class="projects"> container').not.toBeNull()
    expect(
      grid.querySelectorAll('.card').length,
      'Copy the card so you have at least three class="card" projects',
    ).toBeGreaterThanOrEqual(3)
  })

  it('every card keeps the same component structure (image, title, link)', () => {
    const cards = [...doc.querySelectorAll('.projects .card')]
    expect(cards.length, 'Add your cards first').toBeGreaterThanOrEqual(3)
    for (const c of cards) {
      const ok = c.querySelector('img') &&
        c.querySelector('h1,h2,h3,h4,h5,h6') &&
        c.querySelector('a[href]')
      expect(ok, 'Each .card needs an image, a heading, and a link - copy the whole block').toBeTruthy()
    }
  })

  it('.projects is a responsive grid (display:grid)', () => {
    expect(cssFlat, 'Make .projects a grid: display:grid').toContain('display:grid')
  })

  it('the grid columns fit automatically and reflow (repeat + minmax + auto-fit/fill)', () => {
    expect(cssFlat, 'Define the columns with grid-template-columns').toContain('grid-template-columns:')
    expect(cssFlat, 'Repeat the column track with repeat()').toContain('repeat(')
    expect(cssFlat, 'Set a min/max track size with minmax()').toContain('minmax(')
    expect(/auto-fit|auto-fill/.test(cssFlat), 'Let columns fit on their own with auto-fit (or auto-fill)').toBe(true)
  })

  it('the card stacks its contents with flexbox (flex column + gap)', () => {
    expect(cssFlat, 'Make .card a flex container: display:flex').toContain('display:flex')
    expect(cssFlat, 'Stack the card vertically: flex-direction:column').toContain('flex-direction:column')
    expect(cssFlat, 'Space items with a gap').toContain('gap:')
  })
})

describe('Student info (student.json)', () => {
  const info = JSON.parse(read('../student.json'))
  it('student.json is filled in', () => {
    for (const field of [
      'classCode', 'fullName', 'studentNumber',
      'studentEmail', 'personalEmail', 'githubAccount',
    ]) {
      expect(info[field], `Set "${field}" in student.json`).toBeTruthy()
    }
  })
})
