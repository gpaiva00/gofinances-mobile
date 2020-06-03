function getBrazilFormatDate(date: Date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth()+1).toString().padStart(2, '0');
  // const year = date.getFullYear();

  return `${day}/${month}`;
}

export default function getFormatedDate(date: Date) {
  const today = new Date()
  const currentMonth = today.getMonth() + 1
  const otherMonth = date.getMonth() + 1

  if (currentMonth !== otherMonth) return getBrazilFormatDate(date);

  const dayDifference = today.getDate() - date.getDate()

  switch (dayDifference) {
    case 0:
      return "Hoje"
    case 1:
      return "Ontem"
    case 2:
      return "Anteontem"
    default:
      return getBrazilFormatDate(date)
  }
}
