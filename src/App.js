import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Additional from "./panels/Additional";
import TargetDonation from "./panels/TargetDonation";
import CollectionType from "./panels/CollectionType";
import Preview from "./panels/Preview";
import RegularDonation from "./panels/RegularDonation";

const App = () => {
    const [activePanel, setActivePanel] = useState('home');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const [donation, setDonation] = useState({
        name: '',
        description: '',
        sum: '',
        target: ''
    });

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });

        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }

        fetchData();
    }, []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    return (
        <View activePanel={activePanel} popout={popout}>
            <Home id='home' fetchedUser={fetchedUser} go={go}/>
            <Additional id='additional' go={go} fetchedUser={fetchedUser} donation={donation}/>
            <CollectionType id='ctype' go={go} fetchedUser={fetchedUser}/>
            <TargetDonation id="targetDonation" go={go} fetchedUser={fetchedUser} donation={donation}
                            setDonation={setDonation}/>
            <RegularDonation id='regularDonation' go={go} fetchedUser={fetchedUser} donation={donation}
                             setDonation={setDonation}/>
            <Preview id={"preview"} go={go} fetchedUser={fetchedUser} donation={donation} back={"additional"}/>
        </View>
    );
}

export default App;

