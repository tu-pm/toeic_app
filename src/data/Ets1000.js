export const data = {
  name: 'ETS LC + RC 1000 TOEIC TEST',
  n_tests: 5,
  scoreMapping: {
    listening: [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 85, 90, 95, 100, 105, 115, 125, 135, 140, 150, 160, 170, 175, 180, 190, 200, 205, 215, 220, 225, 230, 235, 245, 255, 260, 265, 275, 285, 290, 295, 300, 310, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 385, 395, 400, 405, 415, 420, 425, 430, 435, 440, 445, 455, 460, 465, 475, 480, 485, 490, 495, 495, 495, 495, 495, 495, 495, 495],
    reading: [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 15, 20, 25, 30, 35, 40, 45, 55, 60, 65, 70, 75, 80, 85, 90, 95, 105, 115, 120, 125, 130, 135, 140, 145, 155, 160, 170, 175, 185, 195, 205, 210, 215, 220, 230, 240, 245, 250, 255, 260, 270, 275, 280, 285, 290, 295, 295, 300, 310, 315, 320, 325, 330, 335, 340, 345, 355, 360, 370, 375, 385, 390, 395, 405, 415, 420, 425, 435, 440, 450, 455, 460, 470, 475, 485, 485, 490, 495]
  },
  answers: [
    [4,3,2,1,1,1,3,2,4,2,1,2,2,1,2,3,1,3,1,1,3,2,3,3,2,2,1,2,3,3,1,3,2,1,3,2,2,1,3,1,4,1,2,3,2,4,4,2,3,1,1,3,2,3,1,1,4,2,1,4,3,1,3,4,2,3,4,2,3,4,1,4,2,1,3,4,3,2,1,1,4,2,4,2,1,3,1,4,1,3,4,3,2,2,4,2,3,1,3,3,1,3,4,1,3,4,2,4,2,1,3,3,3,2,1,4,2,4,2,1,2,4,1,3,2,4,2,1,1,4,3,3,4,4,3,4,2,1,2,1,4,1,3,1,3,4,1,1,2,4,4,1,1,2,3,2,2,4,3,2,2,3,1,2,2,3,1,3,4,2,1,3,1,4,4,1,1,4,4,3,3,1,1,4,3,1,4,2,2,4,3,4,1,3,2,2,4,2,3,1],
    [1,4,2,3,4,2,2,1,4,3,2,1,2,2,3,3,2,1,1,1,2,3,3,1,1,1,3,3,2,2,1,3,3,3,1,3,2,1,2,1,2,2,1,3,4,3,4,1,2,1,3,1,3,1,4,2,1,4,3,3,2,4,1,4,4,2,2,3,1,1,4,2,4,2,3,3,1,2,4,3,1,3,4,3,2,4,2,1,1,3,2,4,2,1,3,2,1,1,1,4,2,2,1,4,4,3,3,1,3,2,4,1,4,4,3,1,3,3,1,4,2,3,2,1,1,2,3,1,4,1,3,4,3,2,3,1,2,2,1,4,2,1,3,4,1,2,4,1,3,4,1,2,1,3,1,3,4,2,3,1,4,3,2,1,4,4,2,1,4,3,4,1,2,1,4,4,1,3,2,1,2,4,1,3,4,1,2,3,3,2,4,4,3,2,1,2,4,1,1,3],
    [3,4,3,1,4,2,2,1,1,2,4,2,2,1,2,3,1,3,2,2,1,2,3,3,1,3,1,2,2,2,1,1,2,3,2,1,2,1,3,3,3,2,4,2,1,3,2,3,4,4,1,3,3,2,1,4,2,3,1,2,3,2,4,1,2,4,1,1,4,3,4,2,1,2,3,1,2,3,1,3,4,1,3,2,2,2,3,1,1,2,4,2,3,4,2,4,3,3,2,4,4,4,3,1,2,3,1,2,3,4,4,3,2,2,1,1,3,4,1,2,2,3,1,4,2,3,1,2,1,4,4,2,4,3,3,4,2,1,3,4,1,4,1,2,1,3,4,2,3,4,3,2,4,2,2,3,4,3,1,2,1,2,3,4,4,3,1,2,4,1,3,2,4,2,3,3,2,1,1,4,3,2,4,1,2,1,4,1,3,4,2,4,1,3,3,2,4,2,3,1],
    [4,1,1,3,2,4,4,2,2,3,3,1,2,3,2,3,1,1,3,2,3,2,2,2,1,3,1,3,3,1,2,2,2,1,3,1,1,1,3,2,1,2,3,3,1,4,3,4,2,3,2,4,4,3,1,4,2,1,2,1,3,3,1,2,3,1,2,2,4,1,1,4,2,4,3,1,2,1,3,3,2,1,1,4,3,2,1,3,4,1,2,3,1,2,2,3,1,3,3,4,1,1,3,4,1,1,3,4,2,2,4,3,4,1,4,2,3,1,1,2,4,1,4,2,2,3,4,2,1,3,3,1,2,2,4,1,3,4,1,2,1,4,2,4,3,3,2,4,3,1,4,1,1,3,2,4,3,2,4,2,1,2,1,4,3,1,1,2,4,4,2,4,3,2,3,1,2,2,4,3,2,3,2,2,4,3,2,4,2,4,1,2,1,4,3,2,1,2,3,3],
    [3,1,2,4,3,1,2,4,3,4,3,1,3,3,2,3,2,2,1,1,2,1,2,3,1,2,3,3,3,2,3,1,2,1,1,2,1,3,1,1,2,1,4,2,1,3,1,4,3,2,4,2,1,4,3,3,4,1,2,1,3,3,3,2,3,4,1,3,2,1,4,3,1,3,1,1,3,1,2,3,2,3,4,1,4,3,3,4,1,4,3,2,3,4,2,1,1,2,1,2,1,2,1,4,2,3,4,3,1,2,1,3,3,4,1,1,4,2,1,3,3,1,3,4,2,1,3,4,2,2,4,3,4,2,3,2,1,3,4,1,2,3,4,1,3,2,2,4,1,4,1,2,1,2,2,4,3,3,4,1,4,2,4,4,2,1,4,3,2,3,1,3,4,2,1,4,3,1,4,2,2,3,4,1,2,3,2,1,1,4,3,1,3,2,3,4,2,4,1,2],
  ]
};

