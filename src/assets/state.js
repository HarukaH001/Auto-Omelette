export const node = [
    { key: 1, loc: "0 0", category: "Start" },
    { key: 2, loc: "1000 0", category: "End" },
    { text: "20 บาท", key: 3, loc: "200 -200" },
    { text: "30 บาท", key: 4, loc: "200 100" },
    { text: "40 บาท", key: 5, loc: "200 300" },
    { text: "20 บาท ไม่มีเครื่อง", key: 6, loc: "400 -200" },
    { text: "30 บาท ไม่มีเครื่อง", key: 7, loc: "400 -100" },
    { text: "ไข่ 1", key: 8, loc: "400 100" },
    { text: "ไข่ 2", key: 9, loc: "400 300" },
    { text: "หมูสับ 1", key: 10, loc: "600 100" },
    { text: "ไก่สับ 1", key: 11, loc: "600 170" },
    { text: "หมูสับ 2", key: 12, loc: "600 300" },
    { text: "ไก่สับ 2", key: 13, loc: "600 370" },
    { text: "หมูสับ 1.2", key: 14, loc: "800 100" },
    { text: "ไก่สับ 1.2", key: 15, loc: "800 170" },
    { text: "หมูสับ 2.2", key: 16, loc: "800 300" },
    { text: "ไก่สับ 2.2", key: 17, loc: "800 370" },
    { text: "Trash", key: 18, loc: "1000 -200", color: 'lightyellow', category: "Trap" },
    { text: "Hide", key: 997, loc: "0 0", category: "Hidden" },
    { text: "Hide", key: 998, loc: "1150 -500", category: "Hidden" },
    { text: "Hide", key: 999, loc: "-300 500", category: "Hidden" }
]
// font: "600 14px Barlow, Athiti, sans-serif"
export const links = [
    // Layer 1
    { from: 997, to: 1, text: "", margin: 0, segmentIndex: 0, segmentFraction: 0, "points": [-150, 47.5, 0, 47.5] },
    { from: 1, to: 1, text: "1 ฟอง, 2 ฟอง,\nหมูสับ, ไก่สับ,\nConfirm, Reset", segmentIndex: 1, segmentFraction: 0.5, "points": [37.5, 0, 37.5, -60, -30, -60, -30, 27.5, 0, 27.5] },
    { from: 1, to: 3, text: "20", segmentIndex: 2, segmentFraction: 0.5, "points": [75, 27.5, 120, 27.5, 120, -170, 200, -170] },
    { from: 1, to: 4, text: "30", segmentIndex: 2, segmentFraction: 0.5, points: [75, 37.5, 120, 37.5, 120, 130, 200, 130] },
    { from: 1, to: 5, text: "40", segmentIndex: 2, segmentFraction: 0.5, points: [75, 47.5, 100, 47.5, 100, 310, 200, 310] },

    // Layer 2
    { from: 3, to: 4, text: "30 ", segmentIndex: 2, segmentFraction: 0.5, points: [245, -160.5, 245, 100] },
    { from: 3, to: 5, text: "40 ", segmentIndex: 2, segmentFraction: 0.5, points: [200, -180, -75, -180, -75, 320, 200, 320] },
    { from: 3, to: 6, text: "1 ฟอง", segmentIndex: 2, segmentFraction: 0.5 },
    { from: 3, to: 3, text: "20, หมูสับ, ไก่สับ,\nConfirm, Reset", segmentIndex: 1, segmentFraction: 0.5, points: [235, -200, 235, -250, 300, -250, 300, -190, 278, -190] },

    { from: 4, to: 3, text: "20 ", segmentIndex: 2, segmentFraction: 0.5, points: [265, 100, 265, -160] },
    { from: 4, to: 5, text: "40 ", segmentIndex: 2, segmentFraction: 0.5, points: [250, 139, 250, 300] },
    { from: 4, to: 8, text: "1 ฟอง", segmentIndex: 2, segmentFraction: 0.5, points: [278, 130, 400, 130] },
    { from: 4, to: 7, text: "2 ฟอง", segmentIndex: 2, segmentFraction: 0.5 },
    { from: 4, to: 4, text: "30, หมูสับ, ไก่สับ,\nConfirm, Reset", font: "600 8px Barlow, Athiti, sans-serif", segmentIndex: 1, segmentFraction: 0.5, points: [205, 100, 205, 50, 170, 50, 170, 110, 200, 110] },

    { from: 5, to: 3, text: "20 ", segmentIndex: 2, segmentFraction: 0.5, points: [200, 330, -100, 330, -100, -190, 200, -190] },
    { from: 5, to: 4, text: "30 ", segmentIndex: 2, segmentFraction: 0.5, points: [220, 300, 220, 139] },
    { from: 5, to: 9, text: "2 ฟอง", segmentIndex: 2, segmentFraction: 0.5 },
    { from: 5, to: 5, text: "40, หมูสับ, ไก่สับ,\nConfirm, Reset", segmentIndex: 1, segmentFraction: 0.5, points: [230, 340, 230, 390, 210, 390, 210, 339] },

    // Layer 3
    { from: 6, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5, points: [450, -200,450,-300,210,-300,210,-200] },
    { from: 6, to: 4, text: "30 ", segmentIndex: 1, segmentFraction: 0.7, points: [470, -160, 470, -140, 275, -140, 275, 80, 275, 80, 275, 100] },
    { from: 6, to: 5, text: "40 ", segmentIndex: 2, segmentFraction: 0.5, points: [450, -160, 450, -150, 365, -150, 365, 260, 270, 260, 270, 300] },
    { from: 6, to: 2, text: "Confirm", segmentIndex: 2, segmentFraction: 0.5, points: [556, -180, 800, -180, 800, 10, 1010, 10] },
    { from: 6, to: 6, text: "1 ฟอง, 2 ฟอง, หมูสับ, ไก่สับ, Reset", segmentIndex: 1, segmentFraction: 0.5, points: [500, -200, 500, -250, 600, -250, 600, -190, 556, -190] },

    { from: 7, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.3, points: [510, -100, 510, -129,210,-129,210,-160] },
    { from: 7, to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.5, points: [400, -90, 220, -90,220,100] },
    { from: 7, to: 5, text: "40", segmentIndex: 4, segmentFraction: 0.8, points: [470, -62, 470, 240, 235, 240, 235, 300] },
    { from: 7, to: 8, text: "1 ฟอง", segmentIndex: 1, segmentFraction: 0.1, points: [410, -62, 410, 10, 430, 10, 430, 100] },
    { from: 7, to: 2, text: "Confirm", segmentIndex: 2, segmentFraction: 0.5, points: [550, -90, 700, -90, 700, 27.5, 1000, 27.5] },
    { from: 7, to: 7, text: "2 ฟอง, หมูสับ, \nไก่สับ, Reset", segmentIndex: 2, segmentFraction: 0.5, points: [550, -70, 620, -70, 620, -20, 500, -20, 500, -60] },

    { from: 8, to: 3, text: "20", segmentIndex: 2, segmentFraction: 0.5, points: [420, 100, 420, 70, 385, 70, 385, -10,230,-10,230,-160] },
    { from: 8, to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.5, points:[405,140,405,165,235,165,235,140] },
    { from: 8, to: 5, text: "40", segmentIndex: 2, segmentFraction: 0.5, points: [415, 140, 415, 190,205,190,205,301] },
    { from: 8, to: 10, text: "หมูสับ", segmentIndex: 2, segmentFraction: 0.5 },
    { from: 8, to: 11, text: "ไก่สับ", segmentIndex: 2, segmentFraction: 0.5, points: [450, 130, 520, 130, 520, 190, 600, 190] },
    { from: 8, to: 7, text: "2 ฟอง", segmentIndex: 1, segmentFraction: 0.2, points: [440, 100, 440, -10, 440, -60] },
    { from: 8, to: 8, text: "1 ฟอง,\nConfirm, Reset", segmentIndex: 1, segmentFraction: 0.5, points: [450, 110, 540, 110, 540, 50, 450, 50, 450, 100] },

    { from: 9, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5, points: [400, 310, 300, 310, 300, -170, 275, -170] },
    { from: 9, to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.5, points: [400, 335, 310, 335, 310, 108,275,108] },
    { from: 9, to: 5, text: "40", segmentIndex: 1, segmentFraction: 0.2,points: [430, 300, 430, 250,260,250,260,300]},
    { from: 9, to: 12, text: "หมูสับ", segmentIndex: 2, segmentFraction: 0.5 },
    { from: 9, to: 13, text: "ไก่สับ", segmentIndex: 2, segmentFraction: 0.5, points: [454, 330, 520, 330, 520, 390, 600, 390] },
    { from: 9, to: 9, text: "1 ฟอง, 2 ฟอง,\nConfirm, Reset", segmentIndex: 1, segmentFraction: 0.5, points: [450, 338, 450, 400, 410, 400, 410, 338] },

    // Layer 4
    { from: 10, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5, points: [610, 100, 610, 40,215,40,215,-160]},
    { from: 10  , to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.5, points: [600, 110, 490, 110,490,70,210,70,210,100]},
    { from: 10, to: 5, text: "40", segmentIndex: 1, segmentFraction: 0.5,points: [600, 130, 480, 130,480,260,210,260,210,300]},
    { from: 10, to: 7, text: "2 ฟอง", segmentIndex: 1, segmentFraction: 0.5,},
    { from: 10, to: 14, text: "หมูสับ", segmentIndex: 1, segmentFraction: 0.6, points: [670, 100, 670, 80, 820, 80, 820, 100] },
    { from: 10, to: 15, text: "ไก่สับ", segmentIndex: 2, segmentFraction: 0.5, points: [] },
    { from: 10, to: 8, text: "1 ฟอง ,Reset", segmentIndex: 1, segmentFraction: 0.2, points: [615, 140, 615, 160, 435, 160, 435, 140] },
    { from: 10, to: 10, text: "Confirm", segmentIndex: 1, segmentFraction: 0.5, points: [675, 135, 695, 135, 695, 155, 640, 155,640,140] },

    { from: 11, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5,points: [600, 175, 340, 175,340,-140,250,-140,250,-160]},
    { from: 11, to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.1,points: [600, 200, 260, 200,260,140]},
    { from: 11, to: 5, text: "40", segmentIndex: 1, segmentFraction: 0.5,points: [650,210,650, 220, 290, 220,290,310,275,310]},
    { from: 11, to: 7, text: "2 ฟอง", segmentIndex: 1, segmentFraction: 0.5,},
    { from: 11, to: 14, text: "หมูสับ", segmentIndex: 2, segmentFraction: 0.5, points: [670, 190, 715, 190, 715, 165, 810, 165, 810, 140] },
    { from: 11, to: 15, text: "ไก่สับ", segmentIndex: 1, segmentFraction: 0.5, points: [635, 209, 635, 230, 820, 230, 820, 210] },
    { from: 11, to: 8, text: "1 ฟอง ,Reset", segmentIndex: 1    , segmentFraction: 0.5, points: [615, 209, 615, 230, 500, 230, 500, 140, 448, 140] },
    { from: 11, to: 11, text: "Confirm", segmentIndex: 1, segmentFraction: 0.2, points: [660, 210, 660, 255, 625, 255, 625, 210] },

    { from: 12, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5,points: [620, 300, 620, 250,320,250,320,-110,220,-110,220,-160]},
    { from: 12, to: 4, text: "30", segmentIndex: 1, segmentFraction: 1,points: [600, 310, 550, 310,550,260,225,260,225,140]},
    { from: 12, to: 5, text: "40", segmentIndex: 1, segmentFraction: 0.5,points: [600, 330, 500, 330,500,430,300,430,300,330,275,330]},
    { from: 12, to: 16, text: "หมูสับ", segmentIndex: 1, segmentFraction: 0.5, points: [635, 300, 635, 280, 820, 280, 820, 300] },
    { from: 12, to: 17, text: "ไก่สับ", segmentIndex: 1, segmentFraction: 0.6, points: [] },
    { from: 12, to: 9, text: "2 ฟอง,Reset", segmentIndex: 2, segmentFraction: 0.5, points: [615, 300, 615, 280, 500, 280, 500, 310, 455, 310] },
    { from: 12, to: 12, text: "Confirm", font: "600 8px Barlow, Athiti, sans-serif", segmentIndex: 1, segmentFraction: 0.2, points: [660, 339, 660, 355, 610, 355, 610, 339] },

    { from: 13, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5},
    { from: 13, to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.16,points: [600, 380, 550, 380,550,205,240,205,240,140]},
    { from: 13, to: 5, text: "40", segmentIndex: 1, segmentFraction: 0.5,points: [600, 400, 470, 400,470,450,270,450,270,339]},
    { from: 13, to: 16, text: "หมูสับ", segmentIndex: 1, segmentFraction: 0.5, points: [675, 390, 715, 390, 715, 365, 810, 365, 810, 340] },
    { from: 13, to: 17, text: "ไก่สับ", segmentIndex: 1, segmentFraction: 0.5, points: [635, 410, 635, 430, 820, 430, 820, 410] },
    { from: 13, to: 9, text: "2 ฟอง,Reset", segmentIndex: 1, segmentFraction: 0.5, points: [615, 410, 615, 430, 500, 430, 500, 360, 420, 360, 420, 340] },
    { from: 13, to: 13, text: "Confirm", segmentIndex: 1, segmentFraction: 0.2, points: [660, 410, 660, 455, 625, 455, 625, 410] },

    // Layer 5
    { from: 14, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5,points: [810,100,810,70,225,70,225,-160]},
    { from: 14, to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.1,points: [800,110,700,110,700,85,230,85,230,100]},
    { from: 14, to: 5, text: "40", segmentIndex: 1, segmentFraction: 0.5,points: [800,130,730,130,730,260,240,260,240,300]},
    { from: 14, to: 7, text: "2 ฟอง", segmentIndex: 1, segmentFraction: 0.5,points: [830,100,830,60,670,60,670,0,490,0,490,-60]},
    { from: 14, to: 2, text: "confirm", segmentIndex: 2, segmentFraction: 0.5, points: [] },
    { from: 14, to: 14, text: "nหมูสับ, ไก่สับ", font: "600 9px Barlow, Athiti, sans-serif", segmentIndex: 1, segmentFraction: 0.5, points: [850, 100, 850, 50, 910, 50, 910, 110, 890, 110] },
    { from: 14, to: 8, text: "1 ฟอง, Reset", segmentIndex: 2, segmentFraction: 0.7, points: [800,120,780,120,780,155,620,155,620,168,425,168,425,140] },

    { from: 15, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5,points: [880,170,880,160,920,160,920,-110,255,-110,255,-160]},
    { from: 15, to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.5,points: [800,180,760,180,760,40,250,40,250,100]},
    { from: 15, to: 5, text: "40", segmentIndex: 1, segmentFraction: 0.5,points: [800,200,760,200,760,250,230,250,230,300]},
    { from: 15, to: 7, text: "2 ฟอง", segmentIndex: 1, segmentFraction: 0.5,points: [850,170,850,145,770,145,770,-80,550,-80]},
    { from: 15, to: 2, text: "confirm", segmentIndex: 1, segmentFraction: 0.5, points: [888, 180, 970, 180, 970, 47.5, 1000, 47.5] },
    { from: 15, to: 15, text: "หมูสับ, ไก่สับ", font: "600 8px Barlow, Athiti, sans-serif", segmentIndex: 1, segmentFraction: 0.5, points: [888, 200, 900, 200, 900, 250, 850, 250, 850, 210] },
    { from: 15, to: 8, text: "1 ฟอง, Reset", segmentIndex: 1, segmentFraction: 0.3, points: [830,210,830,270,427,270,427,140] },
    
    { from: 16, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5, points: [800, 310, 770, 310,770,-140,205,-140,205,-160]},
    { from: 16, to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.7, points: [800, 320, 750, 320,750,230,205,230,205,140]},
    { from: 16, to: 5, text: "40", segmentIndex: 1, segmentFraction: 0.5, points: [800, 330, 750, 330,750,355,240,355,240,340]},
    { from: 16, to: 2, text: "confirm", segmentIndex: 2, segmentFraction: 0.1, points: [890, 330, 1060, 330, 1060, 275, 1060, 70] },
    { from: 16, to: 16, text: "หมูสับ, ไก่สับ", segmentIndex: 1, segmentFraction: 0.75, points: [890, 315, 900, 315, 900, 260, 840, 260, 840, 300] },
    { from: 16, to: 9, text: "2 ฟอง, Reset", segmentIndex: 1, segmentFraction: 0.5, points: [830, 300, 830, 270, 415, 270, 415, 300]},

    { from: 17, to: 3, text: "20", segmentIndex: 1, segmentFraction: 0.5, points: [800, 380, 770, 380,770,-140,300,-140,300,-175,275,-175]},
    { from: 17, to: 4, text: "30", segmentIndex: 1, segmentFraction: 0.5, points: [800, 400, 750, 400,750,230,210,230,210,140]},
    { from: 17, to: 5, text: "40", segmentIndex: 1, segmentFraction: 0.5, points: [810, 410, 810, 455,250,455,250,340]},
    { from: 17, to: 2, text: "confirm", segmentIndex: 2, segmentFraction: 0.1, points: [890, 387, 1037.5, 387, 1037, 380, 1037, 75] },
    { from: 17, to: 17, text: "หมูสับ, ไก่สับ", segmentIndex: 1, segmentFraction: 0.75, points: [890, 400, 900, 400, 900, 450, 850, 450, 850, 410] },
    { from: 17, to: 9, text: "2 ฟอง, Reset", segmentIndex: 1, segmentFraction: 0.5, points: [830, 410, 830, 480, 375, 480, 375, 330, 400, 330]},

    // Layer 6
    { from: 2, to: 18, text: "20, 30, 40, \nไข่ 1, ไข่ 2, หมูสับ, \nไก่สับ, confirm, reset", segmentIndex: 2, segmentFraction: 0.5 },
    { from: 18, to: 18, text: "20, 30, 40,\nไข่ 1, ไข่ 2,\nหมูสับ, ไก่สับ,\nconfirm, reset", segmentIndex: 2, segmentFraction: 0.5, points: [1037.5, -200, 1037.5, -250, 917.5, -250, 917.5, -162.5, 1000, -162.5] }

]