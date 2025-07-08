import getEmotionImage from './get-emotion-image';
export const emotionDateList = [
  {
    id: 1,
    src: getEmotionImage(1),
    text: '아주 좋아',
  },
  { id: 2, src: getEmotionImage(2), text: '좋아' },
  { id: 3, src: getEmotionImage(3), text: '보통이야' },
  {
    id: 4,
    src: getEmotionImage(4),
    text: '그저 그래',
  },
  { id: 5, src: getEmotionImage(5), text: '최악이야' },
];
