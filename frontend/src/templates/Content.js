import Axios from 'axios';
import { useEffect } from 'react';

const Content = () => {

    useEffect(() => {
        Axios.get('http://localhost:3002/tweet/get_data')
            .then((res) => console.log(res.data.statuses[0].text));
    })

    return(
        <div>
            <p>content</p>
        </div>
    )
};

export default Content;