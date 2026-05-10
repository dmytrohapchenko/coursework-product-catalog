export const categoryLabels = {
  All: 'Усі',
  Mice: 'Миші',
  Keyboards: 'Клавіатури',
  Headphones: 'Навушники',
  Microphones: 'Мікрофони',
  Webcams: 'Вебкамери',
  Speakers: 'Колонки',
  Monitors: 'Монітори',
  'Mouse Pads': 'Килимки для миші',
  'USB Hubs': 'USB-хаби',
  'Docking Stations': 'Док-станції',
  Routers: 'Роутери',
  Gamepads: 'Геймпади',
}

export function getCategoryLabel(category) {
  return categoryLabels[category] || category
}
