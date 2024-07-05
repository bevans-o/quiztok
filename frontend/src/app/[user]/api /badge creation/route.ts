// post an activity (Laura's template)

export async function POST(request: Request) {
    const formData = await request.formData()
    const id = formData.get('id')
    const name = formData.get('name')
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
        activityName: name,
        options: options,
        answer: answer,
        numOfQs: questionCount,
        badges: badges
      }),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }



// post activity for badge creation

export async function badgeCreation(request: Request) {
  const formData = await request.formData()
  const badgeId = formData.get('badgeid')
  const badgeName = formData.get('badgename')
  const badgeColour = formData.get('badgecolour')
  const badgeCondition = formData.get('badgecondition')
  const res = await fetch('https://quiztok-123c4-default-rtdb.asia-southeast1.firebasedatabase.app/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'AIzaSyCYJJkqJ8qYFMI6aeLfh9mcHR8Y9iEbEP0',
    },
    body: JSON.stringify({
      badgeId: badgeId,
      badgeColour: badgeColour,
      badgeCondition: badgeCondition,
    }),
  })
  const data = await res.json()
   
  return Response.json(data)
}

// get activity to display badge rewards 

export async function badgeRewards(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch('https://quiztok-123c4-default-rtdb.asia-southeast1.firebasedatabase.app/Badge/ID' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'AIzaSyCYJJkqJ8qYFMI6aeLfh9mcHR8Y9iEbEP0',
    },
  })
  const product = await res.json()
  return Response.json({ product })
}

// get function for badge creation and distribution 

export async function badgeDistribution(request: Request) {
  const formData = await request.formData()
  const badgeName = formData.get('badgename')
  const badgeId = formData.get('badgeid')
  const badgeUser = formData.get('badgeuser')
  const badgeCondition = formData.get('badgecondition')
  const res = await fetch('https://quiztok-123c4-default-rtdb.asia-southeast1.firebasedatabase.app/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'AIzaSyCYJJkqJ8qYFMI6aeLfh9mcHR8Y9iEbEP0',
    },
    body: JSON.stringify({
      badgeId: badgeId,
      badgeUser: badgeUser,
      badgeCondition: badgeCondition,
      badgeName: badgeName
    }),
  })
  const data = await res.json()
   
  return Response.json(data)
}