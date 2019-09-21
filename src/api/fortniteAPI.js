
export default class fortniteAPI {
    static async getUserId(username) {
        try {
            const response = await fetch(`https://fortnite-api.theapinetwork.com/users/id?username=${username}`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'f64dcf544864a8f6f5eb7e3c0b648462'
                    }
                })

            const data = await response.json()

            console.log('data', data)
            if (data && data.hasOwnProperty('success') && data.success === false) {
                console.error('getUserId.error', data)
                return data
            } else {
                return data.data.uid
            }
        } catch (error) {
            console.error('getUserId.error', error)
            throw error
        }
    }

    static async getUserData(userId) {

        const response = await fetch(`https://fortnite-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'f64dcf544864a8f6f5eb7e3c0b648462'
            }
        })

        const data = await response.json()
        return data.data

    }
}