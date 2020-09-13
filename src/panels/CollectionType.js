import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28ChevronRightOutline from '@vkontakte/icons/dist/28/chevron_right_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";

import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";

const CollectionType = ({id, go, fetchedUser}) => (
    <Panel id={id}>
        <PanelHeader>Тип сбора</PanelHeader>
        <Placeholder stretched>
            <SimpleCell className="target"
                        before={<Icon28TargetOutline/>} after={<Icon28ChevronRightOutline/>}
                        onClick={go} data-to="collection"
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
