export function getPercentages(table, reading, writing, listening, speaking) {
  switch(table) {
    case 1:
      reading = reading/32*100
      writing = writing/40*100
      listening = listening/25*100
      speaking = speaking/30*100
      break

    /*
    case 2:
      reading = reading/42*100
      // useOfEnglish = useOfEnglish/42*100
      writing = writing/40*100
      listening = listening/30*100
      speaking = speaking/60*100
      break
    */

    default:
      reading = 0
      writing = 0
      listening = 0
      speaking = 0
  }

  return {reading, writing, listening, speaking}
}


export function getCambridgeMark(table, percentage) {
  let cambridgeMark = 0
  percentage = parseInt(percentage)
  switch(table) {
    case 1:
      switch(percentage) {
        // 30-43% => [102-119]
        case 30: cambridgeMark = 102; break;
        case 31: cambridgeMark = 104; break;
        case 32: cambridgeMark = 106; break;
        case 33: cambridgeMark = 107; break;
        case 34: cambridgeMark = 108; break;
        case 35: cambridgeMark = 109; break;
        case 36: cambridgeMark = 110; break;
        case 37: cambridgeMark = 112; break;
        case 38: cambridgeMark = 113; break;
        case 39: cambridgeMark = 114; break;
        case 40: cambridgeMark = 115; break;
        case 41: cambridgeMark = 116; break;
        case 42: cambridgeMark = 118; break;
        case 43: cambridgeMark = 119; break;
        // 44-69% => [120-139]
        case 44: cambridgeMark = 120; break;
        case 45: cambridgeMark = 120; break;
        case 46: cambridgeMark = 121; break;
        case 47: cambridgeMark = 122; break;
        case 48: cambridgeMark = 122; break;
        case 49: cambridgeMark = 123; break;
        case 50: cambridgeMark = 124; break;
        case 51: cambridgeMark = 125; break;
        case 52: cambridgeMark = 126; break;
        case 53: cambridgeMark = 126; break;
        case 54: cambridgeMark = 127; break;
        case 55: cambridgeMark = 128; break;
        case 56: cambridgeMark = 129; break;
        case 57: cambridgeMark = 130; break;
        case 58: cambridgeMark = 130; break;
        case 59: cambridgeMark = 131; break;
        case 60: cambridgeMark = 132; break;
        case 61: cambridgeMark = 133; break;
        case 62: cambridgeMark = 134; break;
        case 63: cambridgeMark = 134; break;
        case 64: cambridgeMark = 135; break;
        case 65: cambridgeMark = 136; break;
        case 66: cambridgeMark = 137; break;
        case 67: cambridgeMark = 138; break;
        case 68: cambridgeMark = 138; break;
        case 69: cambridgeMark = 139; break;
        // 70-84% => [140-152]
        case 70: cambridgeMark = 140; break;
        case 71: cambridgeMark = 141; break;
        case 72: cambridgeMark = 142; break;
        case 73: cambridgeMark = 143; break;
        case 74: cambridgeMark = 143; break;
        case 75: cambridgeMark = 144; break;
        case 76: cambridgeMark = 145; break;
        case 77: cambridgeMark = 146; break;
        case 78: cambridgeMark = 147; break;
        case 79: cambridgeMark = 148; break;
        case 80: cambridgeMark = 149; break;
        case 81: cambridgeMark = 150; break;
        case 82: cambridgeMark = 150; break;
        case 83: cambridgeMark = 151; break;
        case 84: cambridgeMark = 152; break;
        // 85-89 => [153-159]
        case 85: cambridgeMark = 153; break;
        case 86: cambridgeMark = 154; break;
        case 87: cambridgeMark = 156; break;
        case 88: cambridgeMark = 157; break;
        case 89: cambridgeMark = 159; break;
        // 90-100 => [160-170]
        case 90: cambridgeMark = 160; break;
        case 91: cambridgeMark = 161; break;
        case 92: cambridgeMark = 163; break;
        case 93: cambridgeMark = 164; break;
        case 94: cambridgeMark = 165; break;
        case 95: cambridgeMark = 166; break;
        case 96: cambridgeMark = 168; break;
        case 97: cambridgeMark = 169; break;
        case 98: cambridgeMark = 170; break;
        case 99: cambridgeMark = 170; break;
        case 100: cambridgeMark = 170; break;
      }
      break
    /*
    case 2:
      switch(percentage) {
        // 32-44% => [122-139]
        case 32: cambridgeMark = 122; break;
        case 33: cambridgeMark = 123; break;
        case 34: cambridgeMark = 125; break;
        case 35: cambridgeMark = 126; break;
        case 36: cambridgeMark = 128; break;
        case 37: cambridgeMark = 129; break;
        case 38: cambridgeMark = 130; break;
        case 39: cambridgeMark = 132; break;
        case 40: cambridgeMark = 133; break;
        case 41: cambridgeMark = 134; break;
        case 42: cambridgeMark = 136; break;
        case 43: cambridgeMark = 137; break;
        case 44: cambridgeMark = 139; break;
        // 45-59% => [140-156]
        case 45: cambridgeMark = 140; break;
        case 46: cambridgeMark = 141; break;
        case 47: cambridgeMark = 143; break;
        case 48: cambridgeMark = 144; break;
        case 49: cambridgeMark = 145; break;
        case 50: cambridgeMark = 147; break;
        case 51: cambridgeMark = 148; break;
        case 52: cambridgeMark = 149; break;
        case 53: cambridgeMark = 151; break;
        case 54: cambridgeMark = 152; break;
        case 55: cambridgeMark = 153; break;
        case 56: cambridgeMark = 155; break;
        case 57: cambridgeMark = 156; break;
        case 58: cambridgeMark = 157; break;
        case 59: cambridgeMark = 159; break;
        // 60-74% => [160-172]
        case 60: cambridgeMark = 160; break;
        case 61: cambridgeMark = 161; break;
        case 62: cambridgeMark = 162; break;
        case 63: cambridgeMark = 163; break;
        case 64: cambridgeMark = 163; break;
        case 65: cambridgeMark = 164; break;
        case 66: cambridgeMark = 165; break;
        case 67: cambridgeMark = 166; break;
        case 68: cambridgeMark = 167; break;
        case 69: cambridgeMark = 168; break;
        case 70: cambridgeMark = 169; break;
        case 71: cambridgeMark = 170; break;
        case 72: cambridgeMark = 170; break;
        case 73: cambridgeMark = 171; break;
        case 74: cambridgeMark = 172; break;
        // 75-79% => [173-179]
        case 75: cambridgeMark = 173; break;
        case 76: cambridgeMark = 174; break;
        case 77: cambridgeMark = 176; break;
        case 78: cambridgeMark = 177; break;
        case 79: cambridgeMark = 179; break;
        // 90-100 => [180-190]
        case 80: cambridgeMark = 180; break;
        case 81: cambridgeMark = 181; break;
        case 82: cambridgeMark = 182; break;
        case 83: cambridgeMark = 182; break;
        case 84: cambridgeMark = 183; break;
        case 85: cambridgeMark = 184; break;
        case 86: cambridgeMark = 185; break;
        case 87: cambridgeMark = 185; break;
        case 88: cambridgeMark = 186; break;
        case 89: cambridgeMark = 187; break;
        case 90: cambridgeMark = 188; break;
        case 91: cambridgeMark = 188; break;
        case 92: cambridgeMark = 189; break;
        case 93: cambridgeMark = 190; break;
        case 94: cambridgeMark = 190; break;
        case 95: cambridgeMark = 190; break;
        case 96: cambridgeMark = 190; break;
        case 97: cambridgeMark = 190; break;
        case 98: cambridgeMark = 190; break;
        case 99: cambridgeMark = 190; break;
        case 100: cambridgeMark = 190; break;
      }
      break
    */
  }

  return cambridgeMark
}