import * as R from 'ramda'

export const required = (value) => (R.isNil(value) || R.isEmpty(value)) && "Это поле обязательно для заполнения";

export const phone = (value) => value.length !== 11 && "Пожалуйста, введите телефон";