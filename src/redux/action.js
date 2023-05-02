import fakeStoreAPI from "../apis/fakeStoreAPI"


export const actionFetch = () => {

    return async function(dispatch)
    {
       const apiPromiseObject = await fakeStoreAPI.get('/products');
       dispatch(actionFetchF(apiPromiseObject.data));
    }

}

function actionFetchF(products)
{
    return {
        type: 'fetch',
        actionData: products,
    }
}

export function actionReset(products)
{
    return {
        type: 'Reset',
    }
}