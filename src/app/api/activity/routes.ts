
// create an activity
export async function createActivity(request: Request) {
  const formData = await request.formData()
  const id = formData.get('id')
  const userId = formData.get('userId')
  const name = formData.get('name')
  const activityType = formData.get('activityType')
  const questions = formData.get('questions')
  const options = formData.get('options')
  const answer = formData.get('answer')
  const questionCount = formData.get('questionCount')
  const badges = formData.get('badges')
  const res = await fetch('https://quiztok-123c4-default-rtdb.asia-southeast1.firebasedatabase.app/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'AIzaSyCYJJkqJ8qYFMI6aeLfh9mcHR8Y9iEbEP0',
    },
    body: JSON.stringify({ 
      activityId: id,
      userId: userId,
      activityName: name,
      activityType: activityType,
      questions: questions,
      options: options,
      answer: answer,
      numOfQs: questionCount,
      badges: badges
    }),
  })
  const data = await res.json()
  return Response.json(data)
}

// run activity
export async function runActivity(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch('https://quiztok-123c4-default-rtdb.asia-southeast1.firebasedatabase.app/Activity/ID?' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'AIzaSyCYJJkqJ8qYFMI6aeLfh9mcHR8Y9iEbEP0',
    },
  })
  const product = await res.json()
  return Response.json({ product })
}

// see a list of activities by a certain user
// TODO: path might need to be updated
export async function getActivities(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch('https://quiztok-123c4-default-rtdb.asia-southeast1.firebasedatabase.app/users?${userId}/activity?' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'AIzaSyCYJJkqJ8qYFMI6aeLfh9mcHR8Y9iEbEP0',
    },
  })
  const product = await res.json()
  return Response.json({ product })
}

// update user answer
export async function updateAnswer(request: Request) {
  const formData = await request.formData()
  const choice = formData.get('choice')
  const res = await fetch('https://quiztok-123c4-default-rtdb.asia-southeast1.firebasedatabase.app/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'AIzaSyCYJJkqJ8qYFMI6aeLfh9mcHR8Y9iEbEP0',
    },
    body: JSON.stringify({ 
      choice: choice,
    }),
  })
  const data = await res.json()
  return Response.json(data)
}
