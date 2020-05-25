export default function getFormatedDate(date: Date) {
  const today = new Date()
  const currentMonth = today.getMonth() + 1
  const otherMonth = date.getMonth() + 1

  if (currentMonth !== otherMonth) return date.toLocaleDateString()

  const dayDifference = today.getUTCDate() - date.getUTCDate()

  switch (dayDifference) {
    case 0:
      return "Hoje"
    case 1:
      return "Ontem"
    case 2:
      return "Anteontem"
    default:
      return date.toLocaleDateString()
  }
}
