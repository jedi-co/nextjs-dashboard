import {cookies} from "next/headers"
import {authentication} from '@commercelayer/js-auth'

export default async function Page() {
    'use server'
    console.log("hi dad");
    const cookieStore = cookies();
    const getCookieToken = cookieStore.get("clIntegrationToken");
    const token = await authentication(
        "client_credentials", {
            slug: 'houseofrad',
            clientId: 'P8v2jVSRNd-xLixBIpp5RT05wi_Zf3-fnDyNb1FA-rE',
            scope: 'market:14595'
        });
    console.log('My access token: ', token.accessToken)
    console.log('Expiration date: ', token.expires)
    return (<div className="w-full">
        <h1>hi mom</h1>
        <h1>token: {token.accessToken}</h1>
    </div>)
}