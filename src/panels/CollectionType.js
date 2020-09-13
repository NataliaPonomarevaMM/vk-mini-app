import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import Icon28ChevronRightOutline from '@vkontakte/icons/dist/28/chevron_right_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

import './CollectionType.css'
import {Banner, FixedLayout} from "@vkontakte/vkui";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";

const CollectionType = ({id, go, fetchedUser}) => (
    <Panel id={id}>
        <PanelHeader>Тип сбора</PanelHeader>
        <Placeholder stretched>
            <SimpleCell className="target"
                        before={<Icon28TargetOutline/>} after={<Icon28ChevronRightOutline/>}
                        description="Когда есть определенная цель">Целевой сбор</SimpleCell>
            <SimpleCell className="target"
                        before={<Icon28CalendarOutline/>} after={<Icon28ChevronRightOutline/>}
                        description="Если помощь нужна ежемесячно">Регулярный сбор</SimpleCell>
        </Placeholder>
    </Panel>
);

CollectionType.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default CollectionType;
