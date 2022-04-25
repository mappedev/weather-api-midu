import { Router } from 'express'
import * as diariesService from '../services/diaries'
import toNewDiaryEntry from '../utils'

const router = Router()

router.get('/', (_, res) => {
  return res.send(diariesService.getDiariesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const diary = diariesService.findDiaryById(+id)

  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diariesService.addDiary(newDiaryEntry)

    return res.send(addedDiaryEntry)
  } catch (e: any) {
    return res.status(400).send(e.message)
  }
})

export default router
