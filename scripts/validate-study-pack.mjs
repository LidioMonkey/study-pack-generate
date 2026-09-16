#!/usr/bin/env node

import fs from 'node:fs'

const REQUIRED_FIELDS = [
  'materialInventory',
  'coverageMap',
  'chapterKnowledgeTree',
  'priorityFocus',
  'confusingPairs',
  'glossary',
  'formulasAndFigures',
  'questionTypeMap',
  'practiceQuestions',
  'flashcards',
  'reviewPlan',
  'quickReviewSheet',
]

function readJson(filePath) {
  if (!filePath) {
    throw new Error('Usage: node scripts/validate-study-pack.mjs <json-file>')
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function isEmpty(value) {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim() === ''
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

function validateStudyPack(pack) {
  const missing = REQUIRED_FIELDS.filter((field) => isEmpty(pack?.[field]))
  const issues = []

  if (Array.isArray(pack?.practiceQuestions)) {
    const incompleteQuestions = pack.practiceQuestions.filter((question) => (
      isEmpty(question?.question)
      || isEmpty(question?.answer)
      || isEmpty(question?.analysis)
      || isEmpty(question?.topic)
    ))
    if (incompleteQuestions.length > 0) {
      issues.push(`${incompleteQuestions.length} practice question(s) missing question/answer/analysis/topic`)
    }
  }

  if (Array.isArray(pack?.flashcards)) {
    const incompleteCards = pack.flashcards.filter((card) => isEmpty(card?.front) || isEmpty(card?.back))
    if (incompleteCards.length > 0) {
      issues.push(`${incompleteCards.length} flashcard(s) missing front/back`)
    }
  }

  return {
    success: missing.length === 0 && issues.length === 0,
    missing,
    issues,
  }
}

try {
  const result = validateStudyPack(readJson(process.argv[2]))
  console.log(JSON.stringify(result, null, 2))
  process.exit(result.success ? 0 : 1)
} catch (error) {
  console.error(error?.message || error)
  process.exit(2)
}
