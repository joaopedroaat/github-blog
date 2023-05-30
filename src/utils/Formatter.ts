import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDateByDistance = (date: Date) => {
  return formatDistance(date, Date.now(), {
    locale: ptBR,
    addSuffix: true,
  })
}
