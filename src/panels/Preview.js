import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import MyProgress from "./MyProgress";
import {PanelHeaderBack} from "@vkontakte/vkui";

const Preview = ({ id, go, fetchedUser, donation, back }) => (
    <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to={back}/>}>Предпросмотр</PanelHeader>
        <MyProgress id={id} go={go} donation={donation}/>
    </Panel>
);

Preview.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    back: PropTypes.string.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
    donation: PropTypes.shape({
        name: PropTypes.string,
        sum: PropTypes.string,
        target: PropTypes.string,
        description: PropTypes.string,
    })
};

export default Preview;
