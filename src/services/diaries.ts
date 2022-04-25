import { NewDiaryEntry, DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diariesData from './diariesData.json'

const diaries: DiaryEntry[] = diariesData as DiaryEntry[]

export const getDiaries = (): DiaryEntry[] => diaries

export const getDiariesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return ({
      id,
      date,
      weather,
      visibility
    })
  })
}

export const findDiaryById = (id: number): DiaryEntry | null => {
  return diaries.find(diary => diary.id === id) ?? null
}

export const findByIdWithoutSensitiveInfo = (id: number): NonSensitiveInfoDiaryEntry | null => {
  const diaryEntry = diaries.find(diary => diary.id === id) ?? null
  if (diaryEntry !== null) {
    const { comment, ...restOfDiary } = diaryEntry
    return restOfDiary
  }

  return null
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    ...newDiaryEntry,
    id: Math.max(...diaries.map(d => d.id)) + 1
    // id: diariesData.length
  }
  diariesData.push(newDiary)

  return newDiary
}
