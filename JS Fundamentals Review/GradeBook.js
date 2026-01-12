function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const status = hasPassingGrade(studentScore) ? "passed" : "failed";

  return "Class average: " + average + ". Your grade: " + grade + ". You " + status + " the course.";
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));