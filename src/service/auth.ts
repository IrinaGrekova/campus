import ky from "ky";

export const loginRequired = async () => {
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'email',
            password: 'password',
        })
    }
    const data = await ky.post('http://localhost:3000/users', options)
}
