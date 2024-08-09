export const handleTokenApi = async ({ request }) => {
    if (request.method.toLowerCase() === 'post') {
        return {
            data: {
                access_token: 'asd09f8as09dfa09sdf9as9dfa.asd09f8as0df.sdf09asdf',
                token_type: 'Bearer',
                expires_in: 120
            }
        }
    }
    return null
}