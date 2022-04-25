import { Visibility, Weather } from './enums'
import { NewDiaryEntry } from './types'

const isString = (param: any): boolean => {
  // return typeof string === 'string' || string instanceof String
  return typeof param === 'string'
}

const isNotEmpty = (param: any): boolean => {
  return param === '' || param === null || param === undefined
}

const isDate = (param: any): boolean => {
  return Boolean(Date.parse(param))
}

const isWeather = (param: any): boolean => {
  // return ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(string)
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const parseComment = (commentFromReq: any): string => {
  if (!isNotEmpty(commentFromReq)) {
    throw new Error('Missing comment')
  }
  if (!isString(commentFromReq)) {
    throw new Error('Incorrect comment')
  }

  return commentFromReq
}

const parseDate = (dateFromReq: any): string => {
  if (!isNotEmpty(dateFromReq)) {
    throw new Error('Missing date')
  }
  if (!isString(dateFromReq) || !isDate(dateFromReq)) {
    throw new Error('Incorrect date')
  }

  return dateFromReq
}

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isNotEmpty(weatherFromReq)) {
    throw new Error('Missing weather')
  }
  if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
    throw new Error('Incorrect weather')
  }

  return weatherFromReq
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
  if (!isNotEmpty(visibilityFromReq)) {
    throw new Error('Missing visibility')
  }
  if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
    throw new Error('Incorrect visibility')
  }

  return visibilityFromReq
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    visibility: parseVisibility(object.visibility),
    weather: parseWeather(object.weather)
  }

  return newEntry
}

export default toNewDiaryEntry
