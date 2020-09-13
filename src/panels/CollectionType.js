import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Button, Div, Cell} from '@vkontakte/vkui';

import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28ChevronRightOutline from '@vkontakte/icons/dist/28/chevron_right_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';

import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import {PanelHeaderBack} from "@vkontakte/vkui";
import './styles.css'

const CollectionType = ({id, go, fetchedUser}) => (
    <Panel id={id} centered={true}>
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Тип сбора</PanelHeader>
        <Div style={{width: "95%", padding: "5px"}}>
            <SimpleCell className="type_button"
                        before={<Icon28TargetOutline/>} after={<Icon28ChevronRightOutline/>}
                        onClick={go} data-to="targetDonation"
                        description="Когда есть определенная цель">Целевой сбор</SimpleCell>
            <SimpleCell className="type_button"
                        before={<Icon28CalendarOutline/>} after={<Icon28ChevronRightOutline/>}
                        onClick={go} data-to="regularDonation"
                        description="Если помощь нужна ежемесячно">Регулярный сбор</SimpleCell>
        </Div>
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
